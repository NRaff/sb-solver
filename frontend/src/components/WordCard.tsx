import { Word } from "../context/contextTypes";
import { useSBDispatch, useSBSelector } from "../context/hooks";
import { updateWord, wordToShow } from "../reducers/uiReducer";
import { getWords } from "../reducers/wordsReducer";
import TooltipItem from "./TooltipItem";
import '../styles/wordCard.css'

function WordCard() {
  const dispatch = useSBDispatch()
  const words = useSBSelector(getWords)
  const showWord = useSBSelector(wordToShow)
  const word = words[showWord] as Word

  function closeCard(){
    const card = document.getElementsByClassName('word-card')[0]
    card.classList.add('close-card')
    setTimeout(() => {
      dispatch(updateWord(''))
    }, 550)
  }


  return (
    <div className="word-card">
      <header>
        <span 
          className="close-button"
          onClick={closeCard}
        >&times;</span>
        <h1><span>{word.word}</span></h1>
      </header>
      <ul className="word-card-defs">
        {word.details.definitions.map((def: any, idx: number) => <TooltipItem key={idx} definition={def} />)}
      </ul>
    </div>
  )
}

export default WordCard;