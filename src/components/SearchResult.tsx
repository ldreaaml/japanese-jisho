import { useEffect, useState } from "react";
import { WordList } from "./IWord";
import { WordBlock } from "./WordBlock";
import { keywordAtom } from "../atom/kanjiAtom";
import { useAtom } from "jotai";
import { Typography } from "@mui/material";
import { fetchKeyword } from "./DictionaryApi";
import axios from "axios";

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
  const [result, setResult] = useState<WordList>([]);
  const [keyword] = useAtom(keywordAtom);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    fetchKeyword(keyword, cancelTokenSource).then((data: WordList) => {
      setResult(data);
    });
    return () => {
      cancelTokenSource.cancel();
    };
  }, [keyword]);

  return <>{populateList(result)}</>;
};
