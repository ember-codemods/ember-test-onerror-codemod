import { module, test } from 'qunit';
import { click } from '@ember/test-helpers';

module('foo', function() {
  test('foo test', async function(assert) {
    assert.expect(1);

    Ember.onerror = function() {};
    Ember.onerror = () => {};
    Ember.onerror = fn;
  });
});
