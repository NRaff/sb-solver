import React, { useContext } from "react";
import '../styles/button.css'

interface props {
  handleClick: Function,
  id: number,
  title: string,
  isDisabled: boolean
}

function HintButton({handleClick, id, title, isDisabled}: props) {
  return (
    <button
      className="hint-button"
      onClick={e => handleClick()}
      tabIndex={id}
      id={`letter-${id}`}
      disabled={isDisabled}
    >{title}</button>
  )
}

export default HintButton;