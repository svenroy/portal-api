process.env.NODE_ENV = 'test';

const chai = require('chai');

const should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../../dist/server');

describe('GET /api/questions/:caseId', () => {
  it('Should get a 200 response', (done) => {
    chai.request(server)
      .get('/api/questions/caseId')
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        done();
      });
  });
});
