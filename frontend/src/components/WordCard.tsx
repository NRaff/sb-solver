import { useParams } from "react-router-dom";
import { Word } from "../context/contextTypes";
import { useSBSelector } from "../context/hooks";
import { getSearchLettersArray } from "../reducers/lettersReducer";
import { getWords } from "../reducers/wordsReducer";
import TooltipItem from "./TooltipItem";

function WordCard() {
  const letters = useSBSelector(getSearchLettersArray)
  const words = useSBSelector(getWords)
  const showWord = useParams()
  console.log(showWord)
  // get word to display from router 
  return (
    <h1>{showWord}</h1>
    // <div className="word-card">
    //   <h1>{letters.map((letter:string) => <span>{letter}</span>)}</h1>
    //   <h2>{word}</h2>
    //   <ul className="def-list">
    //     {details.definitions.map((def: any, idx: number) => <TooltipItem key={idx} definition={def} />)}
    //   </ul>
    // </div>
  )
}

export default WordCard;