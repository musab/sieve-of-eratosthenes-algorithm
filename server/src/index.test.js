import { app } from './index';
const supertest = require('supertest');
const request = supertest(app);

describe('GET /median-prime', () => {
  it('/median-prime/10 responds with json', async done => {
    const response = await request.get('/median-prime/10');
    const expected = { median: [3, 5] };

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(expected);
    done();
  });

  it('/median-prime/-11 responds with 500', async done => {
    const response = await request.get('/median-prime/-11');
    const expected = 'Must supply a Number that is greater than 1';

    expect(response.status).toBe(500);
    expect(response.text).toBe(expected);
    done();
  });

  it('/median-prime/xx responds with 500', async done => {
    const response = await request.get('/median-prime/xx');
    const expected = 'Bad Request';

    expect(response.status).toBe(400);
    expect(response.text).toBe(expected);
    done();
  });

  it('/median-prime responds with 404', async done => {
    const response = await request.get('/median-prime');

    expect(response.status).toBe(404);
    expect(response.text).toMatchSnapshot();
    done();
  });
});

describe('GET /notfound', () => {
  it('/notfound responds with 404', async done => {
    const response = await request.get('/notfound');

    expect(response.status).toBe(404);
    expect(response.text).toMatchSnapshot();
    done();
  });
});
