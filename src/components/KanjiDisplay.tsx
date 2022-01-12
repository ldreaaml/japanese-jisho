import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

import { kanjiAtom } from "../atom/kanjiAtom";
import { Kanji } from "./IKanji";
import { KanjiBlock } from "./KanjiBlock";

interface Props {}

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #e3e3e3",
    width: 500,
  },
});

const fetchKanji = (kanji: string) => {
  const baseURL = "https://kanjiapi.dev/v1/kanji/" + encodeURIComponent(kanji);
  const proxyURL = "https://api.allorigins.win/raw?url=" + baseURL;
  axios
    .get(proxyURL)
    .then((response) => {
      const _kanji: Kanji = Object.assign({}, response.data);
      return _kanji.kanji;
    })
    .catch((error) => {
      console.log(error);
    });
};

const isKanji = (ch: string) => {
  return (
    (ch >= "\u4e00" && ch <= "\u9faf") || (ch >= "\u3400" && ch <= "\u4dbf")
  );
};

export const KanjiDisplay = (props: Props) => {
  const classes = useStyles();
  const [word] = useAtom(kanjiAtom);
  // console.log("typing  +   " + word);
  const test = word.split("");
  const [kanji, setKanji] = useState<string[]>([]);
  //fetch all kanji

  useEffect(() => {
    console.log("fetching for " + word);
    setKanji(word.split("").filter(isKanji));
  }, [word]);

  return (
    <>
      <Grid container className={classes.root}>
        {kanji.map((k) => {
          // const _kanji = fetchKanji(k);
          console.log(k);
          return <KanjiBlock kanji={k} />;
        })}
      </Grid>
    </>
  );
};
