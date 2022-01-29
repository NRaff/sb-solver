import Tooltip from "./Tooltip";
import {Word} from "../context/contextTypes"

interface props {
  wordObj: Word,
  isPanagram: boolean
}

function scrollTo(e: any) {
  e.preventDefault()
  const el = document.getElementById(e.target.id)
  el?.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center"
  })
}

function DisplayWord({wordObj, isPanagram}: props) {
  return (
    <section className={`word${isPanagram ? ' panagram' : ''}`}>
      <p
        id={`${wordObj.word}`}
        onClick={(e) => scrollTo(e)}
      >{wordObj.word}</p>
      <Tooltip {...wordObj} />
    </section>
  )
}

export default DisplayWord;