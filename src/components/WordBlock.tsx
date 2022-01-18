import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAtom } from "jotai";
import { kanjiAtom } from "../atom/kanjiAtom";
import { Word } from "./IWord";

interface Props {
  word: Word;
}

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #e3e3e3",
    width: 500,
    marginBottom: 20,
    transition: "background 1s, color 1s",
    "&:hover": {
      transform: "scale(1.05, 1.05)",
    },
  },
  text: {
    whiteSpace: "normal",
  },
});

export const WordBlock = ({ word: result }: Props) => {
  const classes = useStyles();
  const [, setCurrentWord] = useAtom(kanjiAtom);

  const japanese = () => {
    return result.japanese[0].word
      ? result.japanese[0].word
      : result.japanese[0].reading;
  };

  const mouseHover = () => {
    setCurrentWord(japanese());
  };

  return (
    <>
      <Card
        className={classes.root}
        sx={{ minWidth: 275 }}
        onMouseEnter={mouseHover}
      >
        <CardContent>
          <Typography variant="h5" component="div" onMouseOver={mouseHover}>
            {japanese()}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {result.japanese
              .map((j) => j.reading)
              .filter((value, index, self) => self.indexOf(value) === index)
              .join("  •  ")}
          </Typography>
          <Typography className={classes.text} variant="body2">
            {result.senses[0].english_definitions.join(", ")}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
