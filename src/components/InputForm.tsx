import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { SearchResult } from "./SearchResult";
import { useAtom } from "jotai";
import { kanjiAtom, keywordAtom } from "../atom/kanjiAtom";

interface Props {}

export const InputForm = (props: Props) => {
  const [keyword, setKeyword] = useAtom(keywordAtom);
  const [, resetKanji] = useAtom(kanjiAtom); //TODO
  const handleChange = (e: any) => {
    resetKanji("");
    setKeyword(e.target.value);
    console.log(keyword);
  };

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
          value={keyword}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <SearchResult />
      </Box>
    </>
  );
};
