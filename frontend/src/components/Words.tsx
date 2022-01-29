import "../styles/words.css"
import OneWord from "../components/OneWord"
import { Word } from "../context/contextTypes";
import { useSBSelector } from "../context/hooks";
import { getWordsArray } from "../reducers/wordsReducer";
import { getSearchLettersArray } from "../reducers/lettersReducer";

function Words() {
  const words = useSBSelector(getWordsArray) as Array<Word>
  const letters = useSBSelector(getSearchLettersArray) as Array<string>

  function isPanagram(word: string) {
    return letters.every((letter: string) => word.includes(letter))
  }

  return (
    <section className="words-area">
      {words.length > 0 ? <p className="instructions">{words.length} words found</p> : null }
      <ul className="words">
        {words.map((word, idx) => {
          return (
            <OneWord
              wordObj={word}
              isPanagram={isPanagram(word.word)}
              key={idx}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default Words;
