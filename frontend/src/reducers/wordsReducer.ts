import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../context/store";
import {Word, Words} from "../context/contextTypes"


const initialState = {} as Words

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    setWords(state, action: PayloadAction<Array<Word>>) {
      const words = action.payload
      words.forEach((word: Word) => {
        state[word.word] = word
      })
    }
  }
})

export const {setWords} = wordsSlice.actions
export const getWords = (state: RootState) => state.words
export default wordsSlice.reducer