import {Letter} from "../context/contextTypes"
import { useSBSelector, useSBDispatch } from "../context/hooks"
import { getSearchLetters } from "../reducers/lettersReducer"
import {updateLetter} from "../reducers/lettersReducer"

function NewLetter({letterKey, letter}: Letter) {
  const isRequired = letterKey < 2
  const dispatch = useSBDispatch()
  const setPayload = (e: any) => {
    return {
      letterKey: letterKey,
      letter: e.currentTarget.value
    } as Letter
  }

  return (
    <input
      className={`letter${isRequired ? " req-letter" : ""}`}
      type="text"
      placeholder="_"
      value={letter}
      maxLength={1}
      onChange={
        e => dispatch(updateLetter(setPayload(e)))
      }
      tabIndex={letterKey}
    />
  )
}

export default NewLetter;