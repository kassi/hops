describe('react-postcss', () => {
  let url;

  beforeAll(async () => {
    jest.setTimeout(30000);
    url = await HopsCLI.develop();
  });

  it('styles when served in development mode', async () => {
    const { page } = await createPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    const { position, fontFamily } = await page.evaluate(() => {
      const { position, fontFamily } = window.getComputedStyle(
        document.querySelector('h1')
      );
      return { position, fontFamily };
    });

    expect(position).toBe('sticky');
    expect(fontFamily).toContain('-apple-system');

    const stylesheet = await page.$('link[rel=stylesheet]');
    expect(stylesheet).not.toBeNull();

    await page.close();
  });

  it('does not add css file to template', async () => {
    const { page } = await createPage();
    await page.setJavaScriptEnabled(false);

    await page.goto(url, { waitUntil: 'networkidle2' });

    const stylesheet = await page.$('link[rel=stylesheet]');
    expect(stylesheet).toBeNull();

    await page.close();
  });
});
