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
    },
    clearLetters(state, action: PayloadAction<SearchLetters>) {
      const searchLetters = action.payload
      const keys = Object.keys(searchLetters)
      keys.forEach((key: any) => {
        state[key] = ''
      })
    }
  }
})

export const {updateLetter, clearLetters} = searchLettersSlice.actions
export const getSearchLetters = (state: RootState) => state.searchLetters
export const getSearchLettersArray = (state: RootState) => Object.values(state.searchLetters)
export default searchLettersSlice.reducer