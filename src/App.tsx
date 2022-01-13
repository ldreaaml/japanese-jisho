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
            <Grid item xl>
              <Item>left</Item>
            </Grid>

            <Grid item xs={"auto"}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100vh",
                  justifyContent: "center",
                }}
              >
                <Item>main</Item>
                <CssBaseline />
                <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                  <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to Jisho
                  </Typography>
                  <InputForm />
                </Container>
              </Box>
            </Grid>

            <Grid item xs>
              <Item>right</Item>
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
