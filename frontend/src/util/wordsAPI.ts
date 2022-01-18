import axios from "axios"

// ! Request effectively times out on mobile
export function requestWords(reqLetter: string, searchLetters: string) {
  const letters = (reqLetter + searchLetters).split('')
  const params = {
    reqLetter,
    letters,
  }
  return axios.get('/words', { params })
}