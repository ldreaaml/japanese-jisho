import { useEffect, useState } from "react";
import axios from "axios";
import { KeywordList } from "./IKeyword";

interface Props {
  keyword: string;
}

const formatJSON = (result: any) => {
  const words: KeywordList = Object.assign({}, result.data);

  const results = [];
  for (const i in words) {
    results.push(
      <div>
        {i} :{" "}
        {
          JSON.stringify(words[i])
          // JSON.stringify(words[i], null, 2)
        }
      </div>
    );
    console.log(words[i]);
  }

  return (
    <div>
      <p>Found: {result.data ? Object.keys(result.data).length : 0}</p>
      <pre>{results}</pre>
    </div>
  );
};

export const SearchResult = ({ keyword: word }: Props) => {
  const baseURL =
    "https://jisho.org/api/v1/search/words?keyword=" + encodeURIComponent(word);
  const proxyURL = "https://api.allorigins.win/raw?url=" + baseURL;

  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get(proxyURL)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [proxyURL]);

  return <div>{formatJSON(result)}</div>;
};
