import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";

import theme from "./theme";
import { Container } from "./styles";

import UploadFilePage from "./UploadFilePage";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Container maxWidth="sm">
            <UploadFilePage />
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}
