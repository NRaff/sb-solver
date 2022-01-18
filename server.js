const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const path = require('path')
const bodyParser = require('body-parser');
const getWordObjects = require('./api/wordsUtil')

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

app.get('/words', (req, res) => {
  const {query} = req
  const {reqLetter, letters} = query
  getWordObjects(reqLetter, letters)
  .then(wordObjects => res.send(wordObjects))
  .catch(err => console.log(err))
})

app.listen(port, () => {
  console.log(`SB-Solver listening on port ${port}!`)
})