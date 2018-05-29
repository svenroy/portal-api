process.env.NODE_ENV = 'testing';

const { Case } = require('../../dist/api/models');
const chai = require('chai');
const should = chai.should();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/portal_test');

const server = require('../../dist/server');

describe('GET /api/state/:caseId', () => {
    it('Should return 200 when case exists', (done) => {
        (async function awaitable() {
            const model = await Case.create({
                caseId: '91924',
                answers: []
            });
            done();
        }());
    });
});

