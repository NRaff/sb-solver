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

const alphabet = "abcdefghijklmnopqrstuvwxyz"

function setRegex(reqLetter: string, searchLetters: string) {
  const alphas = alphabet.split('')
  const excludeLetters = alphas.filter((char: string) => {
    return (char !== reqLetter && !searchLetters.includes(char))
  })

}

export {}