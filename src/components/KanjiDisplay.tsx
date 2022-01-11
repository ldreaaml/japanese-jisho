import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAtom } from "jotai";

import { kanjiAtom } from "../atom/kanjiAtom";
import { KanjiBlock } from "./KanjiBlock";

interface Props {}

const useStyles = makeStyles({
  root: { width: 500 },
});

export const KanjiDisplay = (props: Props) => {
  const classes = useStyles();
  const [word] = useAtom(kanjiAtom);

  const kanji = word.split("");

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
