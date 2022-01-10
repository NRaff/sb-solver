import TooltipItem from "./TooltipItem";
import "../styles/tooltip.css"

interface props {
  wordObj: any
}

function Tooltip({wordObj}:props) {
  const {details, word} = wordObj
  return (
    <div className="tooltip">
      <h2>{word}</h2>
      <ul className="def-list">
        {details.definitions.map((def: any, idx: number) => <TooltipItem key={idx} definition={def} />)}
      </ul>
    </div>
  )
}

export default Tooltip;