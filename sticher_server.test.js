const app = require('./sticher_server');
const request = require('supertest')

describe('Stitcher', () => {
    test('Says hello', async () => {
        const response = await request(app).get('/')
        expect(response.text).toMatch('Hello, World')
    });
})
