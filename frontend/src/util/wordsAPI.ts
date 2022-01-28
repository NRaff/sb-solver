import axios from "axios"

export function requestWords(reqLetter: string, searchLetters: string) {
  console.log(`Req Letter: ${reqLetter} \n Search Letters: ${searchLetters}`)
  const letters = (reqLetter + searchLetters).split('')
  const params = {
    reqLetter,
    letters,
  }
  return axios.get('/words', { params })
}