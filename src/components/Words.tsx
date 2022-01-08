import React from "react";
import Word from "./word";

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
