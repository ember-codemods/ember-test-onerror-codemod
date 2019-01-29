# remove-onerror-sinon-stubs


## Usage

```
npx ember-test-onerror-codemod remove-onerror-sinon-stubs path/of/files/ or/some**/*glob.js

# or

yarn global add ember-test-onerror-codemod
ember-test-onerror-codemod remove-onerror-sinon-stubs path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/remove-onerror-sinon-stubs/__testfixtures__/basic.input.js)</small>):
```js
test('foo test', async function (assert) {
  assert.expect(1);

  this.sandbox.stub(Ember, 'onerror', function() {});
  this.sandbox.stub(Ember, 'onerror', () => {});
  this.sandbox.stub(Ember, 'onerror', fn);
});
```

**Output** (<small>[basic.output.js](transforms/remove-onerror-sinon-stubs/__testfixtures__/basic.output.js)</small>):
```js
test('foo test', async function (assert) {
  assert.expect(1);

  setupOnerror(function() {});
  setupOnerror(() => {});
  setupOnerror(fn);
});

```
<!--FIXTURE_CONTENT_END-->