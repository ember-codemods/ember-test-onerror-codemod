const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);

  const root = j(file.source);

  const replacer = path => {
    let node = path.node;
    let onError = node.right;

    return j.callExpression(j.identifier('setupOnerror'), [onError]);
  }

  root.find(j.AssignmentExpression, {
    left: {
      object: {
        name: 'Ember'
      },
      property: {
        name: 'onerror'
      }
    }
  })
  .replaceWith(replacer);

  return root.toSource();
}