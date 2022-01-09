import React from "react";
import logo from "../assets/sb-solver-logo.png"
import "../styles/credits.css"

function Credits() {
  return (
    <section className="credits-area">
      <div className="about-logo">
        <img src={logo} alt="logo" />
        <h3>About</h3>
      </div>
      <ul className="about-options">
        <a href="https://www.nytimes.com/puzzles/spelling-bee" target="_blank"><span>NYT Spelling Bee</span></a>
        <a href="https://www.linkedin.com/in/nickraff/" target="_blank"><span>LinkedIn</span></a>
        <a href="https://github.com/NRaff/sb-solver" target="_blank"><span>Github</span></a>
        <a href="https://github.com/dwyl/english-words" target="_blank"><span>English Words</span></a>
      </ul>
    </section>
  )
}

export default Credits;