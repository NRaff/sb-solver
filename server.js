const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const bodyParser = require('body-parser');
const splitWords = require('./api/wordsUtil')
const fs = require('fs')

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

function getAllWords() {
  const fileURL = __dirname + "/api/words_alpha.txt"
  try {
    const data = fs.readFileSync(fileURL, 'utf-8')
    console.log(data)
  } catch (err) {
    console.error(err)
  }
}

app.get('/words', (req, res) => {
  // getAllWords()
  res.send(splitWords())
})

// fetch('/words').then(res => res.text().then(data => console.log(data)))

app.listen(port, () => {
  console.log(`SB-Solver listening on port ${port}!`)
})