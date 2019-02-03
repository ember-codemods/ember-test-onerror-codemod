# ember-test-onerror-codemod

[![Build Status](https://secure.travis-ci.com/ember-codemods/ember-test-onerror-codemod.svg?branch=master)](http://travis-ci.com/ember-codemods/ember-test-onerror-codemod)
[![npm version](https://badge.fury.io/js/ember-test-onerror-codemod.svg)](https://badge.fury.io/js/ember-test-onerror-codemod)

A collection of codemod's for ember-test-onerror-codemod.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx ember-test-onerror-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add ember-test-onerror-codemod
ember-test-onerror-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [remove-onerror-assignments](transforms/remove-onerror-assignments/README.md)
* [remove-onerror-sinon-stubs](transforms/remove-onerror-sinon-stubs/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`
