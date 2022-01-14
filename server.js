const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const bodyParser = require('body-parser')

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))
  app.get('/', (req, res) =>  {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.get('/words', (req, res) => {
  res.send('getting words!')
})

// fetch('/words').then(res => res.text().then(data => console.log(data)))

app.listen(port, () => {
  console.log(`SB-Solver listening on port ${port}!`)
})