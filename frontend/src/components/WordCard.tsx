import { Word } from "../context/contextTypes";
import { useSBSelector } from "../context/hooks";
import { getSearchLettersArray } from "../reducers/lettersReducer";
import TooltipItem from "./TooltipItem";

function WordCard({details, word} : Word) {
  const letters = useSBSelector(getSearchLettersArray)
  return (
    <div className="word-card">
      <h1>{letters.map((letter:string) => <span>{letter}</span>)}</h1>
      <h2>{word}</h2>
      <ul className="def-list">
        {details.definitions.map((def: any, idx: number) => <TooltipItem key={idx} definition={def} />)}
      </ul>
    </div>
  )
}

export default WordCard;