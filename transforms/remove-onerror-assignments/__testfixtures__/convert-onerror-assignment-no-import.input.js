import { module, test } from 'qunit';

module('foo', function() {
  test('foo test', async function(assert) {
    assert.expect(1);

    Ember.onerror = function() {};
    Ember.onerror = () => {};
    Ember.onerror = fn;
  });
});
