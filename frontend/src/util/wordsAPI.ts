import { API_KEY } from "../configuration/dictionaryKey"
import axios from "axios"

axios.defaults.baseURL = "https://dictionaryapi.com/api/v3/references/collegiate/json/"

async function getWords() {
  const data = await fetch('words_alpha.txt')
  const wordBlob = await data.text()
  const words = wordBlob.split('\r\n')
  return words
}

export async function searchWords(reqLetter: string, searchLetters: string) {
  const words = await getWords()
  const letters = (reqLetter + searchLetters).split('')
  const availableWords = words.filter((word: string) => {
    const chars = word.split('')
    return (
      chars.every(char => letters.includes(char)) && 
      chars.includes(reqLetter) && 
      chars.length >= 4
    )
  })
  return availableWords
}

export function requestWords(reqLetter: string, searchLetters: string) {
  const letters = (reqLetter + searchLetters).split('')
  const params = {
    reqLetter,
    letters,
  }
  // return axios.get()
}

export async function getDefinition(word: string) {
  const url = `${word}?key=${API_KEY}`
  return axios.get(url)
}

export async function getDetails(word: string) {
  const url = `${word}?key=${API_KEY}`
  const {data, status} = await axios.get(url)
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
    const details = data.map((item: any) => {
      const {date, fl, shortdef, meta} = item
      return ({
        date: date,
        pos: fl,
        definitions: shortdef,
        variation: meta.id,
      })
    })
    return ({details, isWord: true})
  }
}

export async function getWordObjects(reqLetter: string, searchLetters: string) {
  const words = await searchWords(reqLetter, searchLetters)
  const wordDetails = await Promise.all(
    words.map(async (word: string) => {
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