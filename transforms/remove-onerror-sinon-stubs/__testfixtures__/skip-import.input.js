import { module, test } from 'qunit';

module('foo', function() {
  test('foo test', async function(assert) {
    assert.expect(1);

    sinon.stub(Ember, 'foo', function() {});
    sinon.stub(Ember, 'foo', () => {});
    sinon.stub(Ember, 'foo', fn);
  });
});
