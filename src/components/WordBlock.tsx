import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Word } from "./IWord";

interface Props {
  word: Word;
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const useStyles = makeStyles({
  root: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #e3e3e3",
    // color: "white",
    width: 500,
    // padding: "0 30px",
    marginBottom: 20,
  },
  text: {
    whiteSpace: "normal",
  },
});

export const WordBlock = ({ word }: Props) => {
  console.log(word);
  const classes = useStyles();

  const slug = () => {
    return word.slug;
  };

  const mouseHover = () => {
    console.log("mouseOver " + slug());
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

  const [wordHover, setWordHover] = useState([]);

  return (
    <>
      <Card className={classes.root} sx={{ minWidth: 275 }}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h5" component="div" onMouseOver={mouseHover}>
            {slug()}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {word.japanese[0].reading}
          </Typography>
          <Typography className={classes.text} variant="body2">
            {word.senses[0].english_definitions.join(", ")}
            {/* <br />
            {'"..."'} */}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
