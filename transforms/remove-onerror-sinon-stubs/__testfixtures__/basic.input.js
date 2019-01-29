test('foo test', async function (assert) {
  assert.expect(1);

  this.sandbox.stub(Ember, 'onerror', function() {});
  this.sandbox.stub(Ember, 'onerror', () => {});
  this.sandbox.stub(Ember, 'onerror', fn);
});