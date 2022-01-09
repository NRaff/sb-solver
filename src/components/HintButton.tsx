import React, { useContext } from "react";
import { SBContext } from "..";
import '../styles/button.css'

interface props {
  handleClick: Function
}

function HintButton({handleClick}: props) {
  return (
    <button
      className="hint-button"
      onClick={e => handleClick()}
      tabIndex={8}
      id="letter-8"
    >Get Words</button>
  )
}

export default HintButton;