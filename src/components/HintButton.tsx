import React, { useContext } from "react";
import { SBContext } from "..";
import searchWords from "../util/wordsAPI";

function setWords(state: any) {
  const reqLetter = state.requiredLetter
  const searchLetters = state.searchLetters
  searchWords(reqLetter, searchLetters)
  .then(words => {
    state.words = words
  })
}

function HintButton() {
  const state = useContext(SBContext)
  return (
    <button
      onClick={e => setWords(state)}
    >Get Words</button>
  )
}

export default HintButton;