import { setupOnerror } from '@ember/test-helpers';
import { module, test } from 'qunit';

module('foo', function() {
  test('foo test', async function(assert) {
    assert.expect(1);

    setupOnerror(function() {});
    setupOnerror(() => {});
    setupOnerror(fn);
  });
});
