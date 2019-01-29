test('foo test', async function (assert) {
  assert.expect(1);

  sandbox.stub(Ember, 'onerror', function() {});
  sandbox.stub(Ember, 'onerror', () => {});
  sandbox.stub(Ember, 'onerror', fn);

  sandbox.stub(Ember, 'foo', function() {});
  sandbox.stub(Ember, 'foo', () => {});
  sandbox.stub(Ember, 'foo', fn);

  this.sandbox.stub(Ember, 'onerror', function() {});
  this.sandbox.stub(Ember, 'onerror', () => {});
  this.sandbox.stub(Ember, 'onerror', fn);
});