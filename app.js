const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = process.env.port || 3000


app.engine('hbs', exphbs({ dafaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index')
})


app.listen(port, () => {
  console.log('app is running in port: ', port)
})