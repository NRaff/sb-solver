import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../context/store"

interface SearchLetters {
  reqLetter: string,
  1: string,
  2: string,
  3: string,
  4: string,
  5: string,
  6: string
}

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
    updateReqLetter(state, action: PayloadAction<LetterUpdate>) {
      const {letter} = action.payload
      state.reqLetter = letter
    }
  }
})

export const {updateReqLetter} = searchLettersSlice.actions
export const getSearchLetters = (state: RootState) => state.searchLetters
export default searchLettersSlice.reducer