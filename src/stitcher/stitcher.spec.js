import { stitcher } from './stitcher'

describe("Stitcher", () => {
  test('pass urls and return a stitched string', async () => {
    const stubCall = (url) => {
      if (url === "hello.com") {
        return "hello"
      }
      if (url === "awesome.com") {
        return "awesome"
      }
      if (url === "world.com") {
        return "world"
      }
    }
    expect(await stitcher(["hello.com", "awesome.com", "world.com"], stubCall)).toEqual("helloawesomeworld")
  })

  test('return an empty string if no urls passed', async () => {
    const stubGetUrl = jest.fn()
    expect(await stitcher([], stubGetUrl)).toEqual("")
  })
})