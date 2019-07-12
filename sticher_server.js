const express = require('express')
const app = express()

app.get('/', (req, res) => res.sendStatus(400))

module.exports = app