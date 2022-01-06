import React, { useContext, useState } from "react";
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
  setter(e.currentTarget.value)
  state.searchLetters += e.currentTarget.value
  moveToNext(e)
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
      placeholder="A"
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