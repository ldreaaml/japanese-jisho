import { useEffect, useState } from "react";
import axios from "axios";
import { WordList } from "./IWord";
import { WordBlock } from "./WordBlock";
import { keywordAtom } from "../atom/kanjiAtom";
import { useAtom } from "jotai";
import { Typography } from "@mui/material";

interface Props {}

const populateList = (result: any) => {
  const words: WordList = Object.assign({}, result.data);

  const results = [];
  if (words[0]) {
    for (const i in words) {
      results.push(<WordBlock word={words[i]} />);
    }
  }
  return (
    <>
      <Typography>
        Found: {result.data ? Object.keys(result.data).length : 0}
      </Typography>
      <pre>{results}</pre>
    </>
  );
};

export const SearchResult = (props: Props) => {
  const [result, setResult] = useState([]);
  const [keyword] = useAtom(keywordAtom);
  useEffect(() => {
    fetchResult(keyword).then((data) => {
      console.log("world");
      setResult(data);
    });
    console.log("test");
  }, [keyword]);

  return <>{populateList(result)}</>;
};

function fetchResult(keyword: string) {
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
