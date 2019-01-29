test('foo test', async function (assert) {
  assert.expect(1);

  sinon.stub(Ember, 'onerror', function() {});
  sinon.stub(Ember, 'onerror', () => {});
  sinon.stub(Ember, 'onerror', fn);

  sinon.stub(Ember, 'foo', function() {});
  sinon.stub(Ember, 'foo', () => {});
  sinon.stub(Ember, 'foo', fn);

  this.sinon.stub(Ember, 'onerror', function() {});
  this.sinon.stub(Ember, 'onerror', () => {});
  this.sinon.stub(Ember, 'onerror', fn);
});