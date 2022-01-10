import { useEffect, useState } from "react";

interface props {
  letters: string
}

function shuffleLetters(letters: string, setLetters: Function) {
  const allLetters = letters.split('')
  console.log("did shuffle.")
  setLetters(shuffle(allLetters))
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
  const shuffleInterval = setInterval(() => shuffleLetters(letters, setLetters), 200)
  return () => clearInterval(shuffleInterval)
}

function Loader({letters}:props) {
  const [shuffledLetters, reshuffle] = useState(letters)
  useEffect(() => startLoading(shuffledLetters, reshuffle), [])
  return (
    <h1 id="loader">{shuffledLetters}</h1>
  )
}

export default Loader;