const express = require('express')
const app = express()

app.get('/', (req, res) => res.send(400))

module.exports = app