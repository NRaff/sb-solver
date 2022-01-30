import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../context/store";
import { UIState } from "../context/contextTypes";

const initialState = {
  loading: false,
  word: ''
} as UIState

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleLoading(state) {
      state.loading = !state.loading
    },
    updateWord(state, action: PayloadAction<string>) {
      state.word = action.payload
    }
  }
})

export const {toggleLoading, updateWord} = uiSlice.actions
export const isLoading = (state: RootState) => state.ui.loading
export const isShowing = (state: RootState) => state.ui.word !== ''
export const wordToShow = (state: RootState) => state.ui.word
export default uiSlice.reducer