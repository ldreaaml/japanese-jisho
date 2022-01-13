import "./App.css";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { InputForm } from "./components/InputForm";
import { QueryClient, QueryClientProvider } from "react-query";
import { KanjiDisplay } from "./components/KanjiDisplay";
import { SearchResult } from "./components/SearchResult";

const queryClient = new QueryClient();

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xl></Grid>

            <Grid item xs={"auto"}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // width: 500,
                  // minHeight: "100vh",
                  justifyContent: "center",
                }}
              >
                <Item>main</Item>
                <CssBaseline />
                <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                  <Typography
                    sx={{ width: 500 }}
                    variant="h2"
                    component="h1"
                    gutterBottom
                  >
                    Welcome to Jisho
                  </Typography>
                  <InputForm />
                </Container>
              </Box>
            </Grid>
            <Grid item xs>
              <Item>right</Item>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xl></Grid>

            <Grid item xs={"auto"}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CssBaseline />
                <Container
                  component="main"
                  sx={{ mt: 8, mb: 2, margin: 0 }}
                  maxWidth="sm"
                >
                  <SearchResult />
                </Container>
              </Box>
            </Grid>

            <Grid item xs>
              <KanjiDisplay />
            </Grid>
          </Grid>
        </Box>

        {/* test out */}
        {/* <Box
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
            <InputForm />
          </Container>
        </Box> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
