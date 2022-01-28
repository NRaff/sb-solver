import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../context/store";
import { UIState } from "../context/contextTypes";

const initialState = {
  loading: false
} as UIState

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleLoading(state) {
      state.loading = !state.loading
    }
  }
})

export const {toggleLoading} = uiSlice.actions
export const isLoading = (state: RootState) => state.ui.loading
export default uiSlice.reducer