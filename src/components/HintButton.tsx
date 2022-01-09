import React, { useContext } from "react";
import '../styles/button.css'

interface props {
  handleClick: Function,
  id: number,
  title: string
}

function HintButton({handleClick, id, title}: props) {
  return (
    <button
      className="hint-button"
      onClick={e => handleClick()}
      tabIndex={id}
      id={`letter-${id}`}
    >{title}</button>
  )
}

export default HintButton;