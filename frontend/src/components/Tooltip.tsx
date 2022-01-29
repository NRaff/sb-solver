import TooltipItem from "./TooltipItem";
import { Word } from "../context/contextTypes"
import "../styles/tooltip.css"

function Tooltip({details, word}: Word) {
  return (
    <div className="tooltip">
      <div className="arrow-up"></div>
      <h2>{word}</h2>
      <ul className="def-list">
        {details.definitions.map((def: any, idx: number) => <TooltipItem key={idx} definition={def} />)}
      </ul>
    </div>
  )
}

export default Tooltip;