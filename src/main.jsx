import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme.js";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header/index.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Container>
        <Header />
        <App />
      </Container>
    </BrowserRouter>
  </ThemeProvider>
);
