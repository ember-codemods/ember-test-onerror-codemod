const { getParser } = require('codemod-cli').jscodeshift;
const { addImportStatement, writeImportStatements } = require('../utils');

module.exports = function transformer(file, api) {
  const j = getParser(api);

  const root = j(file.source);

  const replacer = path => {
    let node = path.node;
    let onError = node.right;

    return j.callExpression(j.identifier('setupOnerror'), [onError]);
  };

  let replacements = root.find(j.AssignmentExpression, {
    left: {
      object: {
        name: 'Ember',
      },
      property: {
        name: 'onerror',
      },
    },
  });

  if (replacements.length > 0) {
    replacements.replaceWith(replacer);
    addImportStatement(['setupOnerror']);
    writeImportStatements(j, root);
  }

  return root.toSource({ quote: 'single' });
};
