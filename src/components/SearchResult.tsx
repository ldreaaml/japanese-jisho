import { useEffect, useState } from "react";
import axios from "axios";
import { WordList } from "./IWord";
import { WordBlock } from "./WordBlock";
import { KanjiDisplay } from "./KanjiDisplay";

interface Props {
  keyword: string;
}

const formatJSON = (result: any) => {
  const words: WordList = Object.assign({}, result.data);

  const results = [];

  if (words[0]) {
    for (const i in words) {
      results.push(<WordBlock word={words[i]} />);
    }
  }
  return (
    <div>
      <p>Found: {result.data ? Object.keys(result.data).length : 0}</p>
      <pre>{results}</pre>
    </div>
  );
  return words;
};

export const SearchResult = ({ keyword: word }: Props) => {
  const baseURL =
    "https://jisho.org/api/v1/search/words?keyword=" + encodeURIComponent(word);
  const proxyURL = "https://api.allorigins.win/raw?url=" + baseURL;

  const [result, setResult] = useState([]);
  const [test, setTest] = useState<WordList>();
  useEffect(() => {
    axios
      .get(proxyURL)
      .then((response) => {
        setResult(response.data);
        const json = formatJSON(result);
        // setTest(formatJSON(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [proxyURL]);

  return (
    <>
      {/* <Typography>onHover: {wordHover} </Typography> */}
      <KanjiDisplay />
      <div>
        {formatJSON(result)}
        {/* {test.map((word) => {
          return <WordBlock word={words[i]} />;
        })} */}
      </div>
    </>
  );
};
