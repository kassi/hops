const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const PORT = 8999;

describe('development proxy string config', () => {
  let url;

  beforeAll(async () => {
    jest.setTimeout(30000);

    const packageJsonPath = path.join(global.cwd, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
    packageJson.hops.port = PORT;
    packageJson.hops.proxy = `http://localhost:${PORT}/proxy`;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    url = await HopsCLI.develop();
  });

  it('proxies with proxy config set as string', async () => {
    const content = await fetch(url + '/dmbch').then(r => r.text());
    expect(content).toBe('proxy:dmbch');
  });

  it('does not proxy when browser explicitly requests html document', async () => {
    const content = await fetch(url + '/dmbch', {
      headers: { accept: 'text/html' },
    }).then(r => r.text());

    expect(content).toBe('hello world');
  });
});
