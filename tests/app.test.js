const request = require('supertest');
const app = require('../server');

test('GET / returns homepage', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
});