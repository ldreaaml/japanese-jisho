import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { SearchResult } from "./SearchResult";
import { ReactQueryDevtools } from "react-query/devtools";

interface Props {}

export const InputForm = (props: Props) => {
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const [userInput, setInput] = useState<string>("okonomiyaki");

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
