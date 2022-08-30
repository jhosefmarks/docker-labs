const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Jose')`
connection.query(sql)

connection.end()

app.get('/', (_, res) => {
  res.send('<h1>Docker + NodeJS === 😍</h1>')
})

app.listen(port, () => {
  console.log('Run server on port ', port)
})