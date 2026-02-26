import type { Word } from "./types";

export async function requestWords(
  reqLetter: string,
  searchLetters: string
): Promise<Word[]> {
  const letters = (reqLetter + searchLetters).split("");
  const params = new URLSearchParams({ reqLetter });
  letters.forEach((l) => params.append("letters", l));

  const response = await fetch(`/api/words?${params}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.statusText}`);
  }

  return response.json();
}
