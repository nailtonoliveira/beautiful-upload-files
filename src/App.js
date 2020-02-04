import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import UploadFilePage from "./UploadFilePage";

export default function App() {
  return (
    <>
      <CssBaseline>
        <Container maxWidth="md">
          <UploadFilePage />
        </Container>
      </CssBaseline>
    </>
  );
}
