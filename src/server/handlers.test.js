import request from "supertest"
import app from './index.js'
import { getStitcher } from "./handlers"

x.describe('stitcher handler', () => {
    it('/?url=https://news.bbc.co.uk', done => {
        request(app)
          .get('/?url=https://news.bbc.co.uk')
          .expect(200, done)
          .expect('Welcome to the BBC')
    })

    const server = jest.fn()
    const stitcherHandler = getStitcher(server)
    const res = jest.Mocked({ status: jest.fn() })

    it('returns a 200 status code', () => {
        res.status.mockReturnThis()
    })
})