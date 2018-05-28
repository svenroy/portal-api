process.env.NODE_ENV = 'test';

const chai = require('chai');

const should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../../dist/server');

describe('GET /api/state/:caseId', () => {
    it('Should return 404 when case Id does not exist', (done) => {

        const caseId = "XXX-XXXX-XXXX";

        chai.request(server)
            .get(`/api/state/${caseId}`)
            .end((err, res) => {
                // there should be no errors
                should.not.exist(err);

                // there should be a 404 status code
                res.status.should.equal(404);
                console.log(res);
                done();
            });
    });
});