import Tooltip from "./Tooltip";

interface props {
  wordObj: any,
  isPanagram: boolean
}

function Word({wordObj, isPanagram}: props) {
  return (
    <section className={`word${isPanagram ? ' panagram' : ''}`}>
      <p>{wordObj.word}</p>
      <Tooltip wordObj={wordObj} />
    </section>
  )
}

export default Word;