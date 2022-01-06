import React, { useContext, useReducer, useState } from "react";
import { SBContext } from "../index";

function updateRequired(e: any, state: any, setter: Function) {
  e.preventDefault()
  setter(e.currentTarget.value)
  state.requiredLetter = e.currentTarget.value
}

interface props {
  required: boolean
}

function Letter({required}:props) {
  const [letter, setLetter] = useState("")
  const details = useContext(SBContext)
  return (
    <input 
      className={`letter${required ? " req-letter" : ""}`}
      type="text" 
      placeholder="A"
      value={letter}
      onChange={e => updateRequired(e, details, setLetter)}
    />
  )
}

export default Letter;