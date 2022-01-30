import axios from "axios"

export function requestWords(reqLetter: string, searchLetters: string) {
  const letters = (reqLetter + searchLetters).split('')
  const params = {
    reqLetter,
    letters,
  }
  return axios.get('/words', { params })
}

export function getLetters() {
  return axios.get('https://www.nytimes.com/puzzles/spelling-bee')
}