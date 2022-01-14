import { Card, CardContent, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { Kanji } from "./IKanji";
import { fetchKanji } from "./DictionaryApi";

interface Props {
  kanji: string;
}

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #e3e3e3",
    width: 400,
    whiteSpace: "normal",
    marginBottom: 10,
  },
});

export const KanjiBlock = ({ kanji }: Props) => {
  const classes = useStyles();

  const [_kanji, setKanji] = useState<Kanji>();
  useEffect(() => {
    fetchKanji(kanji).then((data: Kanji) => {
      setKanji(data);
    });
  }, [kanji, setKanji]);

  if (_kanji) {
    return (
      <>
        <Card className={classes.root} sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container justifyContent="space-between">
              <Typography
                display="inline"
                variant="h5"
                sx={{ mb: 1 }}
                component="div"
              >
                {_kanji.kanji}
              </Typography>
              <Typography
                display="inline"
                variant="subtitle2"
                color="text.secondary"
              >
                {_kanji.jlpt ? "N" + _kanji.jlpt : ""}
              </Typography>
            </Grid>
            <Typography sx={{ mb: 0.8 }} color="text.secondary">
              {_kanji.kun_readings.join("  •  ")}
            </Typography>
            <Typography sx={{ mb: 0.8 }} color="text.secondary">
              {_kanji.on_readings.join("  •  ")}
            </Typography>
            <Typography variant="body2">
              {_kanji.meanings.join(", ")}
            </Typography>
            {/* <Typography variant="body2">{JSON.stringify(result)}</Typography> */}
          </CardContent>
        </Card>
      </>
    );
  }
  return <></>;
};
