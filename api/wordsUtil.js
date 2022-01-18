const fs = require('fs')
const API_KEY = require('../config/keys')
const axios = require('axios')

axios.defaults.baseURL = "https://dictionaryapi.com/api/v3/references/collegiate/json/"

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

function filterWords(reqLetter, letters) {
  const words = splitWords()
  const downcasedLetters = letters.map(letter => letter.toLowerCase())
  const downcasedReq = reqLetter.toLowerCase()
  const availableWords = words.filter((word) => {
    const chars = word.split('')
    return (
      chars.every(char => downcasedLetters.includes(char)) &&
      chars.includes(downcasedReq) &&
      chars.length >= 4
    )
  })
  return availableWords
}

async function getDetails(word) {
  const url = `${word}?key=${API_KEY}`
  const { data, status } = await axios.get(url)
  if (status !== 200) {
    return ({
      status: "Questionable",
      isWord: false
    })
  } else {
    if (data[0].meta === undefined) {
      return ({
        status: "Questionable",
        isWord: false
      })
    }
    const details = data.map((item) => {
      const { date, fl, shortdef, meta } = item
      return ({
        date: date,
        pos: fl,
        definitions: shortdef,
        variation: meta.id,
      })
    })
    return ({ details, isWord: true })
  }
}

async function getWordObjects(reqLetter, searchLetters) {
  const words = filterWords(reqLetter, searchLetters)
  const wordDetails = await Promise.all(
    words.map(async (word) => {
      const details = await getDetails(word)
      return ({
        word,
        details: {
          isWord: details.isWord,
          definitions: details.details
        }
      })
    })
  )
  return wordDetails
}

module.exports = getWordObjects;


