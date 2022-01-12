import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { SearchResult } from "./SearchResult";
import { useAtom } from "jotai";
import { kanjiAtom } from "../atom/kanjiAtom";

interface Props {}

export const InputForm = (props: Props) => {
  const [, resetKanji] = useAtom(kanjiAtom); //TODO
  const handleChange = (e: any) => {
    resetKanji("");
    setInput(e.target.value);
  };

  const [userInput, setInput] = useState<string>("りゅうしゅつ");

  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Search..."
          id="txtField"
          value={userInput}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Typography>{userInput}</Typography>

        <SearchResult keyword={userInput} />
      </Box>
    </>
  );
};
