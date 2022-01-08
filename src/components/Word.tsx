import React from "react";

interface props {
  word: string
}

function Word({word}: props) {
  return (
    <p className="word">{word}</p>
  )
}

export default Word;