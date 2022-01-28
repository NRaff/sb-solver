import { configureStore } from "@reduxjs/toolkit"
import SearchLettersReducer from '../reducers/lettersReducer'
import WordsReducer from "../reducers/wordsReducer"

export const store = configureStore({
  reducer: {
    searchLetters: SearchLettersReducer,
    words: WordsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
