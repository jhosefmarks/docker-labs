const express = require('express')
const app = express()
const port = 3000

app.get('/', (_, res) => {
  res.send('<h1>Docker + NodeJS = 😍</h1>')
})

app.listen(port, () => {
  console.log('Run server on port ', port)
})