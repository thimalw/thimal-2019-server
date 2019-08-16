import { expect } from 'chai';
import config from 'config';
import server from '../src/server';

describe('Server', () => {
  it('Should be running on the current port', async () => {
    expect(server.port).to.equal(config.get('port'));
  });
});
