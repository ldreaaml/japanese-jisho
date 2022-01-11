import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

import { kanjiAtom } from "../atom/kanjiAtom";
import { KanjiBlock } from "./KanjiBlock";

interface Props {}

const useStyles = makeStyles({
  root: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #e3e3e3",
    // color: "white",
    width: 500,
    // height: 300,
    // float: "right",
  },
});

export const KanjiDisplay = (props: Props) => {
  const classes = useStyles();
  const [word] = useAtom(kanjiAtom);

  // console.log(kanji);
  const kanji = word.split("");
  const [test, setTest] = useState<string[]>([]);

  // useEffect(() => {
  //   setTest(word.split(""));
  // }, [word]);

  return (
    <>
      <Grid container className={classes.root}>
        {kanji.map((character) => {
          return <KanjiBlock kanji={character} />;
        })}
      </Grid>
    </>
  );
};
