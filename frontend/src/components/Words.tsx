import { useContext, useState } from "react";
import { SBContext } from "..";
import {requestWords} from "../util/wordsAPI";
import HintButton from "./HintButton";
import Word from "./OneWord";
import "../styles/words.css"
import Loader from "./Loader";
import WordButtons from "./WordButtons";

// function setDisplayWords(state: any, setWords: Function, setLoader: Function) {
//   setLoader(true)
//   const reqLetter = state.requiredLetter
//   const searchLetters = state.searchLetters
//   requestWords(reqLetter, searchLetters)
//   .then(res => {
//     const wordObjs = res.data
//     const words = wordObjs.filter(({ details }: any) => details.isWord === true)
//     setLoader(false)
//     setWords(words)
//   })
// }

// function reset(context: any, setWords: Function) {
//   const inputs = document.getElementsByClassName('letter')
//   for (let i=0; i<inputs.length; i++) {
//     const letter = inputs[i] as HTMLInputElement
//     letter.value = ""
//   }
//   context.requiredLetter = ""
//   context.searchLetters = ""
//   const firstLetter = document.getElementById("letter-1")
//   firstLetter?.focus()
//   setWords([])
// }

function isPanagram(state: any, word: string) {
  const letters = (state.requiredLetter + state.searchLetters).split('')
  return letters.every((letter: string) => word.includes(letter))
}

function Words() {
  const context = useContext(SBContext)
  const letters = context.requiredLetter + context.searchLetters
  const wordsDefault: Array<any> = []
  const [words, setWords] = useState(wordsDefault)
  const [loading, setLoading] = useState(false)
  return (
    <section className="words-area">
      {/* {loading ? 
        <Loader letters={letters} />: null
      } */}
      {words.length > 0 ? <p className="instructions">{words.length} words found</p> : null }
      <ul className="words">
        {words.map((word, idx) => {
          return (
            <Word
              wordObj={word}
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
