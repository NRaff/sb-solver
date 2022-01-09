import React from "react";

interface props {
  word: string,
  isPanagram: boolean
}

function Word({word, isPanagram}: props) {
  return (
    <section className={`word${isPanagram ? ' panagram' : ''}`}>
      <p>{word}</p>
    </section>
    
  )
}

export default Word;