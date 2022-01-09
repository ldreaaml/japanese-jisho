import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { InputForm } from "./components/InputForm";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <CssBaseline />
          <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to Jisho
            </Typography>
            {/* <Typography variant="h5" component="h2" gutterBottom>
            {"Japanese dictionary made for fun :D"}
          </Typography> */}
            {/* <Typography variant="body1">
            {"Japanese dictionary made for fun :D"}
          </Typography> */}

            <InputForm />
          </Container>
          <Box
            component="footer"
            sx={{
              py: 3,
              px: 2,
              mt: "auto",
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
            }}
          >
            {/* <Container maxWidth="sm">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
            <Copyright />
          </Container> */}
          </Box>
        </Box>
      </QueryClientProvider>
    </>
  );
}

export default App;
