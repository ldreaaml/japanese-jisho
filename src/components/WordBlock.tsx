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
      boxShadow: "2 3px 5px 2px #545454",
    },
  },
  text: {
    whiteSpace: "normal",
  },
});

export const WordBlock = ({ word }: Props) => {
  const classes = useStyles();

  const [, setCurrentWord] = useAtom(kanjiAtom);

  const slug = () => {
    return word.slug;
  };

  const mouseHover = () => {
    console.log("mouseEnter " + slug());
    setCurrentWord(slug());
  };

  //japanese
  const jap = (list: string[]) => {
    for (const i in word.senses) {
      for (const j in word.senses[i].english_definitions)
        console.log("[" + word.senses[i].english_definitions[j] + "]");
    }
  };
  //english
  const eng = (list: string[]) => {};

  return (
    <>
      <Card
        className={classes.root}
        sx={{ minWidth: 275 }}
        onMouseEnter={mouseHover}
      >
        <CardContent>
          <Typography variant="h5" component="div" onMouseOver={mouseHover}>
            {slug()}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {word.japanese
              .map((j) => j.reading)
              .filter((value, index, self) => self.indexOf(value) === index)
              .join("  •  ")}
          </Typography>
          <Typography className={classes.text} variant="body2">
            {word.senses[0].english_definitions.join(", ")}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
