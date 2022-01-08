import React from "react";
import Word from "./OneWord";

interface props {
  words: any
}

function Words({words}:props) {
  return (
    <ul className="words">
      {words.map((word: string) => <Word word={word} />)}
    </ul>
  )
}

export default Words;
