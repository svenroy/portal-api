process.env.NODE_ENV = 'test';

var assert = require('assert');
var clients = require('restify-clients');
var expect = require("chai").expect;

var client = clients.createJsonClient({
    url: 'http://localhost:3000',
    version: '*'
});

describe('GET /api/questions/:caseId', function () {
    it('Should get a 200 response', function (done) {
        client.get('/api/questions/sdv', function (err, req, res, obj) {
            expect(res.status).to.be(200);
        });
        done();
    });
});