import { useEffect, useState } from "react";
import { useSBSelector } from "../context/hooks";
import { getSearchLetters } from "../reducers/lettersReducer";
import "../styles/loader.css"

function shuffle(items: Array<string>) {
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

function Loader() {
  const searchLetters = useSBSelector(getSearchLetters)
  const lettersArr = Object.values(searchLetters)
  const letters = lettersArr.join('')
  const [shuffledLetters, reshuffle] = useState(letters)

  function shuffleLetters() {
    reshuffle(shuffle(lettersArr).join(''))
  }

  function startLoading() {
    const shuffleInterval = setInterval(() => shuffleLetters(), 400)
    return () => clearInterval(shuffleInterval)
  }

  useEffect(() => startLoading(), [])
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