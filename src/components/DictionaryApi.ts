import axios from "axios";
import { Kanji } from "./IKanji";
import { WordList } from "./IWord";

interface KeywordResponse {
  data: WordList;
}

interface KanjiResponse {
  data: Kanji;
}

export async function fetchKeyword(keyword: string) {
  const baseURL =
    "https://jisho.org/api/v1/search/words?keyword=" +
    encodeURIComponent(keyword);
  const proxyURL = "https://api.allorigins.win/raw?url=" + baseURL;
  return axios
    .get<WordList>(proxyURL)
    .then((response: KeywordResponse) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
}

export async function fetchKanji(kanji: string) {
  const baseURL = "https://kanjiapi.dev/v1/kanji/" + encodeURIComponent(kanji);
  const proxyURL = "https://api.allorigins.win/raw?url=" + baseURL;
  return axios.get<Kanji>(proxyURL).then((response: KanjiResponse) => {
    return response.data;
  });
}
