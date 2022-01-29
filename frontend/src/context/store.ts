import { configureStore } from "@reduxjs/toolkit"
import SearchLettersReducer from '../reducers/lettersReducer'
import WordsReducer from "../reducers/wordsReducer"
import UIReducer from "../reducers/uiReducer"

export const store = configureStore({
  reducer: {
    ui: UIReducer,
    searchLetters: SearchLettersReducer,
    words: WordsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
