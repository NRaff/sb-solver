import React, { useContext, useState } from "react";
import { SBContext } from "..";
import searchWords from "../util/wordsAPI";
import HintButton from "./HintButton";
import Word from "./OneWord";
import "../styles/words.css"

function setDisplayWords(state: any, setter: Function) {
  const reqLetter = state.requiredLetter
  const searchLetters = state.searchLetters
  searchWords(reqLetter, searchLetters)
    .then(words => {
      setter(words)
    })
}

function isPanagram(state: any, word: string) {
  const letters = (state.requiredLetter + state.searchLetters).split('')
  return letters.every((letter: string) => word.includes(letter))
}

function Words() {
  const context = useContext(SBContext)
  const wordsDefault: Array<string> = []
  const [words, setWords] = useState(wordsDefault)
  return (
    <section className="words-area">
      <HintButton handleClick={() => setDisplayWords(context,setWords)}/>
      <ul className="words">
        {words.map(word => {
          return (
            <Word
              word={word}
              isPanagram={isPanagram(context, word)}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default Words;
