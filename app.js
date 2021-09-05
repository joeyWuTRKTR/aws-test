const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
  res.send('home page!')
})

app.listen(port, () => {
  console.log('app is running in port: ', port)
})