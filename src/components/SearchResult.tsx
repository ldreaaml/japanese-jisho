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
  const [keyword] = useAtom(keywordAtom);
  const [result, setResult] = useState([]);
  useEffect(() => {
    const baseURL =
      "https://jisho.org/api/v1/search/words?keyword=" +
      encodeURIComponent(keyword);
    const proxyURL = "https://api.allorigins.win/raw?url=" + baseURL;
    axios
      .get(proxyURL)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [keyword]);

  return <>{populateList(result)}</>;
};
