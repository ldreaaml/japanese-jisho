import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import React from "react";
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

export const WordBlock = ({ word }: Props) => {
  console.log(word);
  const slug = () => {
    return word.slug;
  };
  //japanese
  //english
  for (const i in word.senses) {
    for (const j in word.senses[i].english_definitions)
      console.log("[" + word.senses[i].english_definitions[j] + "]");
  }

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h5" component="div">
            {slug()}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {word.japanese[0].reading}
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
