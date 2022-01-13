import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";

import { kanjiAtom } from "../atom/kanjiAtom";
import { KanjiBlock } from "./KanjiBlock";

interface Props {}

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    position: "sticky",
    top: 30,
    // overflow: "scroll",
  },
});

const isKanji = (ch: string) => {
  return (
    (ch >= "\u4e00" && ch <= "\u9faf") || (ch >= "\u3400" && ch <= "\u4dbf")
  );
};

export const KanjiDisplay = (props: Props) => {
  const classes = useStyles();
  const [word] = useAtom(kanjiAtom);
  const [kanji, setKanji] = useState<string[]>([]);

  useEffect(() => {
    setKanji(word.split("").filter(isKanji));
  }, [word]);

  return (
    <>
      <Grid container className={classes.root}>
        {kanji.map((k) => {
          console.log(k);
          return <KanjiBlock kanji={k} />;
        })}
      </Grid>
    </>
  );
};
