// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Homepage Security & Headers - LamboDrip', () => {

  test('should not expose x-powered-by header', async ({ request }) => {
    const res = await request.get('/');
    const headers = res.headers();
    expect(headers['x-powered-by']).toBeUndefined();
  });

  test('should not expose server header explicitly (nginx, apache...)', async ({ request }) => {
    const res = await request.get('/');
    const serverHeader = res.headers()['server'];
    if (serverHeader) {
      expect(serverHeader).not.toMatch(/nginx|apache|express/i);
    }
  });

  test('should return a 200 on homepage', async ({ request }) => {
    const res = await request.get('/');
    expect(res.status()).toBe(200);
  });

  test('should warn if .env file is publicly accessible', async ({ request }) => {
    const res = await request.get('/.env');
    if (res.status() === 200) {
      console.warn(' .env file is publicly accessible!');
    }
    expect(res.status()).not.toBe(500); // On vérifie juste que ça crashe pas
  });
  
  test('should warn if package.json is publicly accessible', async ({ request }) => {
    const res = await request.get('/package.json');
    if (res.status() === 200) {
      console.warn(' package.json is publicly accessible!');
    }
    expect(res.status()).not.toBe(500); // Idem ici
  });

});