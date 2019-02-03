import { module, test } from 'qunit';
import { click, setupOnerror } from '@ember/test-helpers';

module('foo', function() {
  test('foo test', async function(assert) {
    assert.expect(1);

    setupOnerror(function() {});
    setupOnerror(() => {});
    setupOnerror(fn);

    sandbox.stub(Ember, 'foo', function() {});
    sandbox.stub(Ember, 'foo', () => {});
    sandbox.stub(Ember, 'foo', fn);

    setupOnerror(function() {});
    setupOnerror(() => {});
    setupOnerror(fn);
  });
});
