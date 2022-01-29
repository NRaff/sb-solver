import { Word } from "../context/contextTypes";
import TooltipItem from "./TooltipItem";

function WordCard({details, word} : Word) {
  return (
    <div className="word-card">
      <h2>{word}</h2>
      <ul className="def-list">
        {details.definitions.map((def: any, idx: number) => <TooltipItem key={idx} definition={def} />)}
      </ul>
    </div>
  )
}

export default WordCard;