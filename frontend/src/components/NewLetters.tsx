import NewLetter from "./NewLetter"
import {Letter, SearchLetters} from "../context/contextTypes"
import {useSBSelector} from "../context/hooks"
import {getSearchLetters} from "../reducers/lettersReducer"
import '../styles/letter.css'

function setLetters(letters: SearchLetters) {
  const letterKeys = Object.keys(letters)
  const displayLetters : Array<any> = []
  letterKeys.forEach((letterKey: any) => {
    const letter = {
      letterKey,
      letter: letters[letterKey]
    } as Letter
    displayLetters.push(<NewLetter key={letterKey} {...letter}/>)
  })
  return displayLetters
}

function NewLetters() {
  const letters: SearchLetters = useSBSelector(getSearchLetters)
  return (
    <section className="letters">
      {setLetters(letters)}
    </section>
  )
}

export default NewLetters;