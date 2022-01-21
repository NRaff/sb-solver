import Tooltip from "./Tooltip";

interface props {
  wordObj: any,
  isPanagram: boolean
}

function scrollTo({id}: any) {
  console.log(id)
  const el = document.getElementById(id)
  console.log(el)
  el?.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center"
  })
}

function Word({wordObj, isPanagram}: props) {
  return (
    <section 
      className={`word${isPanagram ? ' panagram' : ''}`} 
      id={wordObj.word}
      onClick={({target}) => scrollTo(target)}
    >
      <p>{wordObj.word}</p>
      <Tooltip wordObj={wordObj} />
    </section>
  )
}

export default Word;