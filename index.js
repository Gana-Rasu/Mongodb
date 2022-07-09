const express = require('express') //importing 3rd party package
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

// npm init -y -> to create package json
// npm i express