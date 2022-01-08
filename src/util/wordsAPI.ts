import { fileURLToPath } from "url"
import { API_KEY } from "../config/keys"

const params = {
  lettersmin: "lettersmin=",
  lettersMax: "lettersMax=",
  letterPattern: "letterPattern="
}

const auth = {
  host: "wordsapiv1.p.rapidapi.com",
  apiKey: API_KEY
}

async function searchWords(reqLetter: string, searchLetters: string) {
  const words = await getWords()
  debugger
  const letters = (reqLetter + searchLetters).split('')
  const availableWords = words.filter((word: string) => {
    const chars = word.split('')
    return chars.every(char => letters.includes(char)) && chars.includes(reqLetter)
  })
  return availableWords
}

async function getWords() {
  const data = await fetch('words_alpha.txt')
  const wordBlob =  await data.text()
  const words = wordBlob.split('\r\n')
  return words
}

export default searchWords