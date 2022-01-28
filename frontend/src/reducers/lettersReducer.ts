import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../context/store"
import {SearchLetters} from "../context/contextTypes"
import {Letter} from "../context/contextTypes"

const initialState = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: ''
} as SearchLetters

const searchLettersSlice = createSlice({
  name: 'searchLetters',
  initialState,
  reducers: {
    updateLetter(state, action: PayloadAction<Letter>) {
      const {letterKey, letter} = action.payload
      state[letterKey] = letter
    }
  }
})

export const {updateLetter} = searchLettersSlice.actions
export const getSearchLetters = (state: RootState) => state.searchLetters
export default searchLettersSlice.reducer