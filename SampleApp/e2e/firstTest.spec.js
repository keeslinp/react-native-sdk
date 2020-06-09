describe('Example', () => {
  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  it('Should have black coffee', async () => {
    await expect(element(by.text('Black Coffee'))).toBeVisible();
  });

  it('tap black coffee', async () => {
    await element(by.text('Black Coffee')).tap();
    await expect(element(by.text('Buy Now'))).toBeVisible();
    await element(by.text('Buy Now')).tap();

    await expect(element(by.text('Mocha'))).toBeVisible();
  });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
