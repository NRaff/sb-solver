import React, { useContext, useState } from "react";
import { SBContext } from "../index";
import '../styles/letter.css'

function updateRequired(e: any, state: any, setter: Function) {
  e.preventDefault()
  setter(e.currentTarget.value)
  state.requiredLetter = e.currentTarget.value
  if(e.currentTarget.value !== "") {
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
      onChange={e => updateRequired(e, details, setLetter)}
      tabIndex={tab}
      id={`letter-${tab}`}
    />
  )
}

export default Letter;