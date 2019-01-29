test('foo test', async function (assert) {
  assert.expect(1);

  setupOnerror(function() {});
  setupOnerror(() => {});
  setupOnerror(fn);

  setupOnerror(function() {});
  setupOnerror(() => {});
  setupOnerror(fn);
});
