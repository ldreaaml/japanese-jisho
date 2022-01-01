import { useEffect, useState } from "react";
import axios from "axios";
import { debounce } from "@mui/material";

interface Props {
  word: string;
}

export const SearchResult = ({ word }: Props) => {
  const baseURL =
    "https://jisho.org/api/v1/search/words?keyword=" + encodeURIComponent(word);
  const proxyURL = "https://api.allorigins.win/raw?url=" + baseURL;

  const [result, setResult] = useState([]);

  useEffect(
    debounce(() => {
      axios
        .get(proxyURL)
        .then((response) => {
          setResult(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.toJSON());
        });
    }, 500),
    [proxyURL]
  );

  return (
    <div>
      <p>{JSON.stringify(result)}</p>
    </div>
  );
};
