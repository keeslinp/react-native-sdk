const detox = require('detox');
const adapter = require('detox/runners/mocha/adapter');

before(async () => {
  await detox.init();
});

beforeEach(async () => {
  try {
    await adapter.beforeEach();
  } catch (err) {
    // Workaround for the 'jest-jasmine' runner (default one): if 'beforeAll' hook above fails with a timeout,
    // unfortunately, 'jest' might continue running other hooks and test suites. To prevent that behavior,
    // adapter.beforeEach() will throw if detox.init() is still running; that allows us to run detox.cleanup()
    // in that emergency case and disable calling 'device', 'element', 'expect', 'by' and other Detox globals.
    // If you switch to 'jest-circus' runner, you can omit this try-catch workaround at all.

    await detox.cleanup();
    throw err;
  }
});

after(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
