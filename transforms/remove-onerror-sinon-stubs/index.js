const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const root = j(file.source);

  const replacer = path => {
    let node = path.node;
    let emberArg = node.arguments[0];
    let onerrorArg = node.arguments[1];
    let onErrorFn = node.arguments[2];

    if (emberArg.name !== 'Ember' || onerrorArg.value !== 'onerror') {
      return node;
    }

    return j.callExpression(j.identifier('setupOnerror'), [onErrorFn]);
  }

  root.find(j.CallExpression, {
    callee: {
      type: 'MemberExpression',
      property: {
        type: 'Identifier',
        name: 'stub'
      }
    },
    arguments: {
      length: 3
    }
  })
  .replaceWith(replacer);


  return root.toSource();
}