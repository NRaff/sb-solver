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