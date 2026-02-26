import { writable, derived } from "svelte/store";
import type { SearchLetters } from "../types";

const initialState: SearchLetters = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
};

export const searchLetters = writable<SearchLetters>({ ...initialState });

export const searchLettersArray = derived(searchLetters, ($letters) =>
  Object.values($letters)
);

export function updateLetter(letterKey: number, letter: string) {
  searchLetters.update((state) => ({
    ...state,
    [letterKey]: letter,
  }));
}

export function clearLetters() {
  searchLetters.set({ ...initialState });
}
