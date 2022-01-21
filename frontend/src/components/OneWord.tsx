import Tooltip from "./Tooltip";

interface props {
  wordObj: any,
  isPanagram: boolean
}

function scrollTo(e: any) {
  e.preventDefault()
  const el = document.getElementById(e.target.id)
  console.log(el)
  el?.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center"
  })
}

function Word({wordObj, isPanagram}: props) {
  return (
    <section className={`word${isPanagram ? ' panagram' : ''}`}>
      <p
        id={`${wordObj.word}`}
        onClick={(e) => scrollTo(e)}
      >{wordObj.word}</p>
      <Tooltip wordObj={wordObj} />
    </section>
  )
}

export default Word;