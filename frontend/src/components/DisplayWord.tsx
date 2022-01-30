import Tooltip from "./Tooltip";
import {Word} from "../context/contextTypes"
import { useSBDispatch } from "../context/hooks";
import { updateWord } from "../reducers/uiReducer";

interface props {
  wordObj: Word,
  isPanagram: boolean
}

function DisplayWord({wordObj, isPanagram}: props) {
  const dispatch = useSBDispatch()
  console.log(isPanagram)
  function setWord() {
    const {word} = wordObj
    dispatch(updateWord(word))
  }

  return (
    <section 
      className={`word${isPanagram ? ' panagram' : ''}`}
      onClick={setWord}
    >
      <p
        id={`${wordObj.word}`}
      >{wordObj.word}</p>
      <Tooltip {...wordObj} />
    </section>
  )
}

export default DisplayWord;