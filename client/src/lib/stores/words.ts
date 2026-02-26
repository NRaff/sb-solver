import { writable, derived } from "svelte/store";
import type { Words, Word } from "../types";

export const words = writable<Words>({});

export const wordsArray = derived(words, ($words) => Object.values($words));

export function setWords(wordList: Word[]) {
  words.update((state) => {
    const newState = { ...state };
    wordList.forEach((w) => {
      newState[w.word] = w;
    });
    return newState;
  });
}

export function clearWords() {
  words.set({});
}
