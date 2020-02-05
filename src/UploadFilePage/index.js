import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import Dropzone from "../components/Dropzone";
import FileItem from "../components/FileItem";

export default function UploadFilePage() {
  const [files, setfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function onDrop(acceptedFiles, rejectedFiles) {
    const auxA = acceptedFiles.map(f => ({ accepted: true, file: f }));
    const auxR = rejectedFiles.map(f => ({ accepted: false, file: f }));
    setfiles(files.concat(auxA, auxR));
  }

  function onDelete(index) {
    setfiles(files.filter((_, i) => i !== index));
  }

  function uploadAll() {
    setIsLoading(p => !p);
    /* put here the request to upload your files */
  }

  return (
    <Box
      display="flex"
      flex={1}
      flexDirection="column"
      minHeight="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box alignSelf="flex-end" mt={2}>
        <Button variant="contained" color="secondary" onClick={uploadAll}>
          Save
        </Button>
      </Box>
      <Dropzone onDrop={onDrop} accept=".json" />
      <Box width={1} mt={4}>
        {files.map((item, index) => (
          <FileItem
            key={index.toString()}
            index={index}
            item={item}
            onDelete={onDelete}
            isLoading={isLoading}
          />
        ))}
      </Box>
    </Box>
  );
}
