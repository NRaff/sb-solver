export interface SearchLetters {
  [key: number]: string;
}

export interface Letter {
  letterKey: number;
  letter: string;
}

export interface Words {
  [key: string]: Word;
}

export interface Word {
  word: string;
  details: {
    isWord: boolean;
    definitions?: Definition[];
  };
}

export interface Definition {
  variation: string;
  pos?: string;
  date?: string;
  definitions: string[];
}

export interface UIState {
  loading: boolean;
  word: string;
}
