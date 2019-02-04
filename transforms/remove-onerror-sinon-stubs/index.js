const { getParser } = require('codemod-cli').jscodeshift;
const { addImportStatement, writeImportStatements } = require('../utils');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const root = j(file.source);
  let requiresImport = false;

  const replacer = path => {
    let node = path.node;
    let emberArg = node.arguments[0];
    let onerrorArg = node.arguments[1];
    let onErrorFn = node.arguments[2];

    if (emberArg.name !== 'Ember' || onerrorArg.value !== 'onerror') {
      return node;
    }

    requiresImport = true;
    return j.callExpression(j.identifier('setupOnerror'), [onErrorFn]);
  };

  let replacements = root.find(j.CallExpression, {
    callee: {
      type: 'MemberExpression',
      property: {
        type: 'Identifier',
        name: 'stub',
      },
    },
    arguments: {
      length: 3,
    },
  });

  if (replacements.length > 0) {
    replacements.replaceWith(replacer);

    if (requiresImport) {
      addImportStatement(['setupOnerror']);
      writeImportStatements(j, root);
    }
  }

  return root.toSource({ quote: 'single' });
};
