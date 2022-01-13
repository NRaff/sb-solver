import { useContext, useState } from "react";
import { SBContext } from "../index";
import '../styles/letter.css'

function updateRequired(e: any, state: any, setter: Function) {
  e.preventDefault()
  setter(e.currentTarget.value)
  state.requiredLetter = e.currentTarget.value
  moveToNext(e)
}

function updateLetters(e: any, state: any, setter: Function) {
  e.preventDefault()
  const reqLetter = state.requiredLetter
  const letters = state.searchLetters
  const allLetters = [reqLetter].concat(letters.split(''))
  const oldLetter = letters[e.currentTarget.tabIndex - 2]
  const newLetter = e.currentTarget.value
  if (!allLetters.includes(newLetter)) {
    setter(e.currentTarget.value)
    if(e.currentTarget.value !== "") {
      if (oldLetter) {
        state.searchLetters = state.searchLetters.replace(oldLetter, newLetter)
      } else {
        state.searchLetters += e.currentTarget.value
      }
      moveToNext(e)
    }
  }
}

function moveToNext(e: any) {
  if (e.currentTarget.value !== "") {
    const nextID = e.currentTarget.tabIndex + 1
    const nextEle = document.getElementById(`letter-${nextID}`)
    nextEle?.focus()
  }
}

interface props {
  required: boolean,
  tab: number
}

function Letter({required, tab}:props) {
  const [letter, setLetter] = useState("")
  const details = useContext(SBContext)
  return (
    <input 
      className={`letter${required ? " req-letter" : ""}`}
      type="text" 
      placeholder="_"
      value={letter}
      maxLength={1}
      onChange={
        e => required ? 
        updateRequired(e, details, setLetter) : 
        updateLetters(e, details, setLetter)
      }
      tabIndex={tab}
      id={`letter-${tab}`}
    />
  )
}

export default Letter;