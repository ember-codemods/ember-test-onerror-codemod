const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const root = j(file.source);

  const replacer = path => {
    let node = path.node;
    let onErrorArg = node.arguments.pop();

    return j.callExpression(j.identifier('setupOnerror'), [onErrorArg]);
  }

  root.find(j.CallExpression, {
    arguments: {
      length: 3
    }
  })
  .replaceWith(replacer);

  return root.toSource();
}