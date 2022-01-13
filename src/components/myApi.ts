import axios from "axios";
import { WordList } from "./IWord";

interface KeywordResponse{
    data: WordList;
}

interface KanjiResponse {
  data: Kanji;
}

export function fetchKeyword(keyword: string) {
  const baseURL =
    "https://jisho.org/api/v1/search/words?keyword=" +
    encodeURIComponent(keyword);
  const proxyURL = "https://api.allorigins.win/raw?url=" + baseURL;
  return axios
    .get(proxyURL)
    .then((response) => {
      console.log("hello");
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
