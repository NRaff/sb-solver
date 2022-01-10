import React, { useContext, useState } from "react";
import { SBContext } from "..";
import {searchWords, getWordObjects} from "../util/wordsAPI";
import HintButton from "./HintButton";
import Word from "./OneWord";
import "../styles/words.css"

function setDisplayWords(state: any, setter: Function) {
  const reqLetter = state.requiredLetter
  const searchLetters = state.searchLetters
  getWordObjects(reqLetter, searchLetters)
  .then(wordObjs => {
    const words = wordObjs.filter(({ details }) => details.isWord === true)
    setter(words)
  })
}

function reset(context: any, setter: Function) {
  const inputs = document.getElementsByClassName('letter')
  for (let i=0; i<inputs.length; i++) {
    const letter = inputs[i] as HTMLInputElement
    letter.value = ""
  }
  context.requiredLetter = ""
  context.searchLetters = ""
  const firstLetter = document.getElementById("letter-1")
  firstLetter?.focus()
  setter([])
}

function isPanagram(state: any, word: string) {
  const letters = (state.requiredLetter + state.searchLetters).split('')
  return letters.every((letter: string) => word.includes(letter))
}

function Words() {
  const context = useContext(SBContext)
  const wordsDefault: Array<any> = []
  const [words, setWords] = useState(wordsDefault)
  return (
    <section className="words-area">
      <section className="buttons">
        <HintButton
          handleClick={() => setDisplayWords(context, setWords)}
          id={8}
          title="Get Words"
          key="Get Words"
        />
        <HintButton
          handleClick={() => reset(context, setWords)}
          id={9}
          title="Reset"
          key="Reset"
        />
      </section>
      <ul className="words">
        {words.map((word, idx) => {
          return (
            <Word
              word={word.word}
              isPanagram={isPanagram(context, word.word)}
              key={idx}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default Words;
