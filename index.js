require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', function(req, res){
    res.send('hiteshdotcom')
})
app.get('/login', function(req, res){
    res.send('<h1> Please Login </h1>')
})
app.get('/about', function(req, res){
    res.send('<h2> We are students </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})