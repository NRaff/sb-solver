export interface SearchLetters {
  [key: number]: string
}

export interface Letter {
  letterKey: number,
  letter: string
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