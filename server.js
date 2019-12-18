const express = require('express')

const serveStatic = require('serve-static')
const path = require('path')

// lets create the express app

const app = express()

// create middleware to handle the serving app

app.use('/', serveStatic(path.join(__dirname, '/public')))

// create defvault port to serve the app

const PORT = process.env.PORT || 5000
app.listen(port)

Console.log('server started on port' + port)