import React, { useContext } from "react";
import { SBContext } from "..";

interface props {
  handleClick: Function
}

function HintButton({handleClick}: props) {
  return (
    <button
      onClick={e => handleClick()}
    >Get Words</button>
  )
}

export default HintButton;