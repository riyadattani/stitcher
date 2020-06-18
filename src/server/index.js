import express from "express"
import { getErrorHandler, getStitcher } from "./handlers"

const server = express()

server.get('/', getStitcher(server))
server.use(getErrorHandler())

export default server
