import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme.js";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./components/ErrorComponent/index.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Container>
        <ErrorBoundary FallbackComponent={ErrorComponent}>
          <App />
        </ErrorBoundary>
      </Container>
    </BrowserRouter>
  </ThemeProvider>
);
