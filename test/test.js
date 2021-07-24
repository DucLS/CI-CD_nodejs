var request = require('supertest');
var app = require('../index.js');

describe('GET /', () => {
    it('response with Hello World', () => {
        request(app).get('/').expect('Hello World!!');
    });
});
