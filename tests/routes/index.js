import server from '../../src/server';
import request from 'supertest';
import { expect } from 'chai';

describe('Project Routes', () => {
  it('GET /v1/projects should return an array of projects as data', async () => {
    const response = await request(server).get('/v1/projects');
    expect(response.status).to.equal(200);
    expect(response.body.data).to.be.an.instanceof(Array);
  });
});
