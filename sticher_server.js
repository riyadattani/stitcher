const express = require('express')
const mustache = require('mustache')
const mustacheExpress = require('mustache-express');

const app = express()

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => res.render('index.html', { name: 'World' }))

module.exports = app
