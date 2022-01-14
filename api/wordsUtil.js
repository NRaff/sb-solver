const fs = require('fs')

async function getWords() {
  const data = await fetch('words_alpha.txt')
  const wordBlob = await data.text()
  const words = wordBlob.split('\r\n')
  return words
}

function readWords() {
  const fileURL = __dirname + "/words_alpha.txt"
  try {
    const data = fs.readFileSync(fileURL, 'utf-8')
    return data
  } catch (err) {
    return err
  }
}

function splitWords() {
  const splitWords = readWords().split('\r\n')
  return splitWords
}

module.exports = splitWords;


