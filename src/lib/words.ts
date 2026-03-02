import { readFileSync } from "fs";
import Bun from "bun";
import { join } from "path";

const API_BASE = "https://dictionaryapi.com/api/v3/references/collegiate/json/";

let cachedWords: string[] | null = null;

function loadWords(): string[] {
  if (cachedWords) return cachedWords;
  const dataDir = join(import.meta.dir, "..", "data");
  const ta = readFileSync(join(dataDir, "wordle-Ta.txt"), "utf-8");
  const la = readFileSync(join(dataDir, "wordle-La.txt"), "utf-8");
  const alpha = readFileSync(join(dataDir, "words_alpha.txt"), "utf-8");
  const all = [
    ...ta.split(/\r?\n/).filter(Boolean),
    ...la.split(/\r?\n/).filter(Boolean),
    ...alpha.split(/\r?\n/).filter(Boolean),
  ];
  cachedWords = [...new Set(all)];
  return cachedWords;
}

export function filterWords(reqLetter: string, letters: string[]): string[] {
  const words = loadWords();
  const allowed = new Set(letters.map((l) => l.toLowerCase()));
  const lowerReq = reqLetter.toLowerCase();

  return words.filter((word) => {
    if (word.length < 4 || !word.includes(lowerReq)) return false;
    for (const char of word) {
      if (!allowed.has(char)) return false;
    }
    return true;
  });
}

interface WordDefinition {
  date?: string;
  pos?: string;
  definitions: string[];
  variation: string;
}

interface WordDetails {
  isWord: boolean;
  details?: WordDefinition[];
}

async function getDetails(word: string): Promise<WordDetails> {
  const apiKey = Bun.env.DICT_KEY;
  if (!apiKey) throw new Error("DICT_KEY environment variable is not set");

  const url = `${API_BASE}${word}?key=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    return { isWord: false };
  }

  const data = await response.json();

  if (!Array.isArray(data) || !data[0]?.meta) {
    return { isWord: false };
  }

  const details: WordDefinition[] = data.map((item: any) => ({
    date: item.date,
    pos: item.fl,
    definitions: item.shortdef,
    variation: item.meta.id,
  }));

  return { isWord: true, details };
}

export interface WordObject {
  word: string;
  details: {
    isWord: boolean;
    definitions?: WordDefinition[];
  };
}

export async function getWordObjects(
  reqLetter: string,
  searchLetters: string[],
): Promise<WordObject[]> {
  const words = filterWords(reqLetter, searchLetters);

  const wordDetails = await Promise.all(
    words.map(async (word) => {
      const details = await getDetails(word);
      return {
        word,
        details: {
          isWord: details.isWord,
          definitions: details.details,
        },
      };
    }),
  );

  return wordDetails;
}
