export interface SearchLetters {
  [key: string]: string,
  [key: number]: string
}

export interface Words {
  [key: string]: Word
}

export interface Word {
  word: string;
  details: Array<Detail>
}

export interface Detail {
  variation: string;
  pos: string;
  date: string;
  definitions: Array<string>
}