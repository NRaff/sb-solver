import HintButton from "./HintButton";
import { useSBDispatch, useSBSelector } from "../context/hooks";
import { getSearchLetters, clearLetters } from "../reducers/lettersReducer";
import {getWords, setWords, clearWords} from "../reducers/wordsReducer";
import {Words, SearchLetters} from "../context/contextTypes"
import { requestWords } from "../util/wordsAPI";
import { toggleLoading } from "../reducers/uiReducer";

export function WordButtons() {
  const searchLetters = useSBSelector(getSearchLetters) as SearchLetters
  const words = useSBSelector(getWords)
  const dispatch = useSBDispatch()

  function lettersMissing() {
    const countLetters = Object.values(searchLetters).join('').length
    return countLetters < 7
  }

  function wordsExist() {
    return Object.keys(words).length > 0
  }

  function isPanagram(word: string) {
    const letters = Object.values(searchLetters)
    return letters.every((letter: string) => word.includes(letter))
  }

  function searchWords() {
    const letters = Object.values(searchLetters).slice(1).join('')
    dispatch(toggleLoading())
    requestWords(searchLetters[1], letters)
    .then(res => {
      const wordObjs = res.data
      const newWords = wordObjs.filter(({ details }: any) => details.isWord === true)
      dispatch(setWords(newWords))
      dispatch(toggleLoading())
    })
  }

  function reset() {
    dispatch(clearWords(Object.keys(words)))
    dispatch(clearLetters(searchLetters))
  }

  return (
    <section className="buttons">
      <HintButton
        handleClick={() => searchWords()}
        id={8}
        title="Get Words"
        key="Get Words"
        isDisabled={lettersMissing() || wordsExist()}
      />
      <HintButton
        handleClick={() => reset()}
        id={9}
        title="Reset"
        key="Reset"
        isDisabled={false}
      />
    </section>
  )
}

export default WordButtons;