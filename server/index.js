
const express = require('express')
const app = express()
const connectDb = require('./db')
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

connectDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})