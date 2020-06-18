import { getURL, stitcher } from "../stitcher/stitcher"
import mustacheExpress from 'mustache-express'

const urlArray = url => {
  let urls = []
  if (!Array.isArray(url)) {
    urls.push(url)
  } else {
    urls = url
  }
  return urls
}

export const getStitcher = (server) => async (req, res, next) => {
    server.engine('html', mustacheExpress())
    server.set('view engine', 'html')
    server.set('views', __dirname + '/views');
  try {
    res.render('index.html', async () => {
      try {
        res.status(200)
        res.send(await stitcher(urlArray(req.query.url), getURL))
      } catch (e) {
        return e.message
      }
    })
  } catch (err) {
    return next(err)
  }
}

export const getErrorHandler = () => async (error, _, res) => {
  res.status(error.statusCode)
  return res.send('An error occurred!')
}