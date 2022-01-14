import { useEffect, useState } from "react";
import { WordList } from "./IWord";
import { WordBlock } from "./WordBlock";
import { keywordAtom } from "../atom/kanjiAtom";
import { useAtom } from "jotai";
import { Typography } from "@mui/material";
import { fetchKeyword } from "./DictionaryApi";

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
    fetchKeyword(keyword).then((data: WordList) => {
      setResult(data);
    });
  }, [keyword]);

  return <>{populateList(result)}</>;
};
