import { Letter, SearchLetters } from "../context/contextTypes"
import { useSBSelector, useSBDispatch } from "../context/hooks"
import { getSearchLetters } from "../reducers/lettersReducer"
import { updateLetter } from "../reducers/lettersReducer"

function DisplayLetter({ letterKey, letter }: Letter) {
  const isRequired = letterKey < 2
  const dispatch = useSBDispatch()
  const letters = useSBSelector(getSearchLetters) as SearchLetters

  function setPayload(e: any) {
    return {
      letterKey: letterKey,
      letter: e.currentTarget.value
    } as Letter
  }

  function moveToNext(e: any) {
    if (e.currentTarget.value !== "") {
      const nextID = e.currentTarget.tabIndex + 1
      const nextEle = document.getElementById(`letter-${nextID}`)
      nextEle?.focus()
    }
  }

  function handleUpdate(e: any) {
    if (isUnique(e)) {
      e.currentTarget.classList.remove("duplicate-err")
      const payload = setPayload(e)
      dispatch(updateLetter(payload))
      moveToNext(e)
    } else {
      e.currentTarget.classList.add("duplicate-err")
    }
  }

  function isUnique(e: any) {
    const letter = e.currentTarget.value
    return !Object.values(letters).includes(letter)
  }

  return (
    <input
      className={`letter${isRequired ? " req-letter" : ""}`}
      type="text"
      placeholder="_"
      value={letter}
      maxLength={1}
      onChange={handleUpdate}
      tabIndex={letterKey}
      id={`letter-${letterKey}`}
    />
  )
}

export default DisplayLetter;