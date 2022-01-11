export interface Kanji {
  kanji: string;
  grade: number;
  stroke_count: number;
  meanings: string[];
  kun_readings: string[];
  on_readings: string[];
  name_readings: string[];
  jlpt: number;
  unicode: string;
  heisig_en: string;
}

// export const JSONtoKanji = (result: any) => {
//   const kanji: Kanji = Object.assign({}, result.data);
//   return kanji;
// };
