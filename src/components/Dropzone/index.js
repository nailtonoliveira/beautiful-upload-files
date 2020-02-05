import React from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

import { UploadIcon } from "./styles";

export default function Dropzone({ onDrop, accept }) {
  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
      border="3px dashed"
      borderColor={isDragActive ? "primary.light" : "divider"}
      borderRadius={16}
      bgcolor="background.paper"
      boxShadow={16}
      my={2}
      color={isDragActive ? "primary.light" : "divider"}
    >
      <Box {...getRootProps()} px={6} pt={8} pb={2} style={{ outline: "none" }}>
        <UploadIcon color="inherit" />
        <input {...getInputProps()} />
        <Typography variant="h6" color="textPrimary">
          Drag and drop your files here
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="1"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        mx={12}
      >
        <Divider width="30%" />
        <Typography variant="subtitle2" color="textSecondary">
          OR
        </Typography>
        <Divider width="30%" />
      </Box>
      <Box p={2} mx={8} pb={6}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={open}
        >
          Browse files
        </Button>
      </Box>
    </Box>
  );
}

// Dropzone.defaultProps = {};

Dropzone.propTypes = {
  onDrop: PropTypes.func.isRequired
};
