import { writable, derived } from "svelte/store";

export const loading = writable(false);
export const activeWord = writable("");

export const isShowing = derived(activeWord, ($word) => $word !== "");

export function toggleLoading() {
  loading.update((v) => !v);
}

export function setActiveWord(word: string) {
  activeWord.set(word);
}
