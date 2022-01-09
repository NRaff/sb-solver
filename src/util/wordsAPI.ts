import { API_KEY } from "../config/keys"
import axios from "axios"

axios.defaults.baseURL = "https://dictionaryapi.com/api/v3/references/collegiate/json/"

export function getDefinition(word: string) {
  const url = `${word}?key=${API_KEY}`
  return axios.get(url)
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

async function getWords() {
  const data = await fetch('words_alpha.txt')
  const wordBlob =  await data.text()
  const words = wordBlob.split('\r\n')
  return words
}