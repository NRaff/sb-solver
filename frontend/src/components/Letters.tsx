import Letter from "./Letter";
import {getSearchLetters} from "../reducers/lettersReducer"
import {useSBSelector} from "../context/hooks"
import { SearchLetters } from "../context/contextTypes";

function setLetters(num: number) {
  const letters = []
  for (let i=0; i<num; i++){
    letters.push(
      <Letter
        required={i === 0 ? true : false}
        tab={i + 1}
        key={i}
      />
    )
  }
  return letters
}

function Letters() {
  const letters : SearchLetters = useSBSelector(getSearchLetters)
  const numLetters : number = Object.keys(letters).length
  return (
    <section className="letters">
      {setLetters(numLetters)}
    </section>
  )
}

export default Letters;