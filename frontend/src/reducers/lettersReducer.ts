import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../context/store"
import {SearchLetters} from "../context/contextTypes"

interface LetterUpdate {
  key: number,
  letter: string
}

const initialState = {
  reqLetter: '',
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: ''
} as SearchLetters

const searchLettersSlice = createSlice({
  name: 'searchLetters',
  initialState,
  reducers: {
    updateLetter(state, action: PayloadAction<LetterUpdate>) {
      const {key, letter} = action.payload
      state[key] = letter
    }
  }
})

export const {updateLetter} = searchLettersSlice.actions
export const getSearchLetters = (state: RootState) => state.searchLetters
export default searchLettersSlice.reducer