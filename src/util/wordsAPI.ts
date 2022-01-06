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

function setRegex(reqLetter, searchLetters) {
  const excludeLetters = alphabet.filter(char => {
    return (char !== reqLetter && !searchLetters.includes(char))
  })
  
}

export {}