import { setupOnerror } from '@ember/test-helpers';
import { module, test } from 'qunit';

module('foo', function() {
  test('foo test', async function(assert) {
    assert.expect(1);

    setupOnerror(function() {});
    setupOnerror(() => {});
    setupOnerror(fn);

    sinon.stub(Ember, 'foo', function() {});
    sinon.stub(Ember, 'foo', () => {});
    sinon.stub(Ember, 'foo', fn);

    setupOnerror(function() {});
    setupOnerror(() => {});
    setupOnerror(fn);
  });
});
