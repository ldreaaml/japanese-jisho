import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { SearchResult } from "./SearchResult";
import { kanjiAtom } from "../atom/kanjiAtom";
import { useAtom } from "jotai";

interface Props {}

export const InputForm = (props: Props) => {
  const handleChange = (e: any) => {
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
        <ReactQueryDevtools />
      </Box>
    </>
  );
};
