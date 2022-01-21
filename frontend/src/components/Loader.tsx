import { useEffect, useState } from "react";
import "../styles/loader.css"

interface props {
  letters: string
}

function shuffleLetters(letters: string, setLetters: Function) {
  const allLetters = letters.split('')
  setLetters(shuffle(allLetters).join(''))
}

export function shuffle(items: Array<string>) {
  // randomly pick an element out of the array
  // slice it from the old array
  // append it to the new array
  let copyItems = items.slice(0,items.length)
  let newOrder = []
  while (copyItems.length > 0) {
    const randIdx = Math.floor(Math.random() * copyItems.length)
    newOrder.push(copyItems[randIdx])
    copyItems.splice(randIdx,1)
  }
  return newOrder
}

function startLoading(letters: string, setLetters: Function) {
  const shuffleInterval = setInterval(() => shuffleLetters(letters, setLetters), 400)
  return () => clearInterval(shuffleInterval)
}

function Loader({letters}:props) {
  const [shuffledLetters, reshuffle] = useState(letters)
  useEffect(() => startLoading(shuffledLetters, reshuffle), [])
  return (
    <section className="loading-area">
      <h3>Loading...</h3>
      <h1 id="loader">
        {shuffledLetters.split('').map((letter: string, idx: number) => <span key={idx}>{letter}</span>)}
      </h1>
    </section>
  )
}

export default Loader;