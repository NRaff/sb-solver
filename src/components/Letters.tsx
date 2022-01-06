import React from "react";
import Letter from "./Letter";

interface props {
  numLetters: number
}

function setLetters(num: number) {
  const letters = []
  for (let i=0; i<num; i++){
    letters.push(
      <Letter
        required={i === 0 ? true : false}
        tab={i + 1}
        key={i}
      />
    )
  }
  return letters
}

function Letters({numLetters}: props) {
  return (
    <section className="letters">
      {setLetters(numLetters)}
    </section>
  )
}

export default Letters;