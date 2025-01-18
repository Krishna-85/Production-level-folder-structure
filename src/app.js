const express = require('express')
const app = express()
const routes = require('./routes/index.route')

app.use('/', routes)
module.exports = app