import Tooltip from "./Tooltip";
import {Word} from "../context/contextTypes"
import { useSBDispatch } from "../context/hooks";
import { updateWord } from "../reducers/uiReducer";

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
  const dispatch = useSBDispatch()

  function setWord() {
    const {word} = wordObj
    dispatch(updateWord(word))
  }

  return (
    <section className={`word${isPanagram ? ' panagram' : ''}`}>
      <p
        id={`${wordObj.word}`}
        onClick={(e) => setWord()}
      >{wordObj.word}</p>
      <Tooltip {...wordObj} />
    </section>
  )
}

export default DisplayWord;