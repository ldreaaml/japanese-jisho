import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";

import React, { useEffect, useState } from "react";

interface Props {
  //   word: string;
}

const useStyles = makeStyles({
  root: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #e3e3e3",
    // color: "white",
    width: 300,
    height: 300,
    float: "right",
  },
});

export const KanjiDisplay = (props: Props) => {
  const classes = useStyles();
  const word = "留出";

  const kanji = word.split("");
  console.log(kanji);

  const baseURL =
    "https://kanjiapi.dev/v1/kanji/" + encodeURIComponent(kanji[0]);
  const proxyURL = "https://api.allorigins.win/raw?url=" + baseURL;

  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get(proxyURL)
      .then((response) => {
        setResult(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [proxyURL]);

  return (
    <>
      <Grid container className={classes.root}>
        <Paper elevation={3}> {JSON.stringify(result)} </Paper>
      </Grid>
    </>
  );
};
