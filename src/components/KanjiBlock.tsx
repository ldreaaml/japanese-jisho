import {
  Box,
  Card,
  CardContent,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useAtom } from "jotai";

import React, { useEffect, useState } from "react";
import { kanjiAtom } from "../atom/kanjiAtom";
import { Kanji } from "./IKanji";

interface Props {
  kanji: string;
}

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #e3e3e3",
    width: 500,
    whiteSpace: "normal",
  },
});

export const KanjiBlock = ({ kanji }: Props) => {
  const classes = useStyles();
  console.log("test");

  const baseURL = "https://kanjiapi.dev/v1/kanji/" + encodeURIComponent(kanji);
  const proxyURL = "https://api.allorigins.win/raw?url=" + baseURL;

  const [result, setResult] = useState([]);
  const [test, setTest] = useState<Kanji>();

  useEffect(() => {
    axios
      .get(proxyURL)
      .then((response) => {
        setResult(response.data);
        const foo: Kanji = Object.assign({}, response.data);
        console.log(foo);
        setTest(foo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [proxyURL]);
  if (test) {
    console.log(test);
    return (
      <>
        <Card className={classes.root} sx={{ minWidth: 275 }}>
          <CardContent>
            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography> */}
            <Grid container justifyContent="space-between">
              <Typography
                display="inline"
                variant="h5"
                sx={{ mb: 1 }}
                component="div"
              >
                {test.kanji}
              </Typography>
              <Typography
                display="inline"
                variant="subtitle2"
                color="text.secondary"
              >
                N{test.jlpt}
              </Typography>
            </Grid>
            <Typography sx={{ mb: 0.7 }} color="text.secondary">
              {[...test.kun_readings].join("  •  ")}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {[...test.on_readings].join("  •  ")}
            </Typography>
            <Typography variant="body2">{test.meanings.join(", ")}</Typography>
            {/* <Typography variant="body2">{JSON.stringify(result)}</Typography> */}
          </CardContent>
        </Card>
      </>
    );
  }
  return <></>;
};
