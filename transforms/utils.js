// The following utils are borrowed from @simonihmig's
// https://github.com/simonihmig/ember-test-helpers-codemod/blob/master/transforms/utils.js

let _statementsToImport = new Set();

/**
 * Adds (one or more) named imports to a private import statement collection.
 * To write the import statements to a file, use writeImportStatements.
 *
 * @param j
 * @param {array} imports
 */
function addImportStatement(imports) {
  imports.forEach(method => _statementsToImport.add(method));
}

/**
 * Adds all collected named imports to an (existing or to be created) `import { namedImport } from '@ember/test-helpers';
 * To add named imports to the collection, use addImportStatement
 *
 * @param j
 * @param root
 */
function writeImportStatements(j, root) {
  if (_statementsToImport.size > 0) {
    let body = root.get().value.program.body;
    let importStatement = root.find(j.ImportDeclaration, {
      source: { value: '@ember/test-helpers' },
    });

    if (importStatement.length === 0) {
      importStatement = createImportStatement(
        j,
        '@ember/test-helpers',
        'default',
        Array.from(_statementsToImport)
      );
      body.unshift(importStatement);
    } else {
      let existingSpecifiers = importStatement.get('specifiers');

      _statementsToImport.forEach(name => {
        if (
          existingSpecifiers.filter(exSp => exSp.value.imported.name === name)
            .length === 0
        ) {
          existingSpecifiers.push(j.importSpecifier(j.identifier(name)));
        }
      });
    }
  }

  _statementsToImport = new Set();
}

/**
 * Create an ES6 module import statement
 *
 * @param j
 * @param source
 * @param imported
 * @param local
 * @returns {*}
 */
function createImportStatement(j, source, imported, local) {
  let declaration, variable, idIdentifier, nameIdentifier;

  // if no variable name, return `import 'jquery'`
  if (!local) {
    declaration = j.importDeclaration([], j.literal(source));
    return declaration;
  }

  // multiple variable names indicates a destructured import
  if (Array.isArray(local)) {
    let variableIds = local.map(function(v) {
      return j.importSpecifier(j.identifier(v), j.identifier(v));
    });

    declaration = j.importDeclaration(variableIds, j.literal(source));
  } else {
    // else returns `import $ from 'jquery'`
    nameIdentifier = j.identifier(local); //import var name
    variable = j.importDefaultSpecifier(nameIdentifier);

    // if propName, use destructuring `import {pluck} from 'underscore'`
    if (imported && imported !== 'default') {
      idIdentifier = j.identifier(imported);
      variable = j.importSpecifier(idIdentifier, nameIdentifier); // if both are same, one is dropped...
    }

    declaration = j.importDeclaration([variable], j.literal(source));
  }

  return declaration;
}

module.exports = {
  addImportStatement,
  writeImportStatements,
};
