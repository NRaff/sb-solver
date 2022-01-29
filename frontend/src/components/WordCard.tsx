import { Word } from "../context/contextTypes";
import { useSBDispatch, useSBSelector } from "../context/hooks";
import { getSearchLettersArray } from "../reducers/lettersReducer";
import { updateWord, wordToShow } from "../reducers/uiReducer";
import { getWords } from "../reducers/wordsReducer";
import TooltipItem from "./TooltipItem";
import '../styles/wordCard.css'

function WordCard() {
  const dispatch = useSBDispatch()
  const letters = useSBSelector(getSearchLettersArray)
  const words = useSBSelector(getWords)
  const showWord = useSBSelector(wordToShow)
  const word = words[showWord] as Word
  return (
    <div className="word-card">
      <header>
        <span 
          className="close-button"
          onClick={() => dispatch(updateWord(''))}
        >&times;</span>
        <h1>{letters.map((letter: string) => <span>{letter}</span>)}</h1>
        <span>➡️</span>
        <h1><span>{word.word}</span></h1>
      </header>
      <ul className="def-list">
        {word.details.definitions.map((def: any, idx: number) => <TooltipItem key={idx} definition={def} />)}
      </ul>
    </div>
  )
}

export default WordCard;