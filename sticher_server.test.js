const app = require('./sticher_server');
const request = require('supertest')

describe('Stitcher', () => {
    test('Bad request when no URIs passed through', async () => {
        await request(app)
        .get('/')
        .expect(200, 'Hello, world')
    });
})
