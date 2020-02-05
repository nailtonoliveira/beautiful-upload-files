import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import CloseIcon from "@material-ui/icons/Close";

// import {} from './styles';

export default function FileItem({ index, item, onDelete, isLoading }) {
  console.log(item);
  const { accepted, file } = item;

  function bytesToSize(bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "n/a";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i == 0) return bytes + " " + sizes[i];
    return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
  }

  return (
    <Box
      display="flex"
      py={1.5}
      pl={2}
      pr={1}
      mb={2}
      height={72}
      flexDirection="row"
      alignItems="center"
      bgcolor="background.paper"
      borderRadius={8}
      border={"2px solid"}
      borderColor={accepted ? "success.main" : "error.main"}
    >
      <Box
        display="flex"
        width={48}
        height={48}
        justifyContent="center"
        alignItems="center"
        bgcolor={accepted ? "success.light" : "error.light"}
        borderRadius={4}
      >
        <InsertDriveFileIcon color="action" fontSize="large" />
      </Box>
      <Box display="flex" flexDirection="column" flexGrow="1" mx={2}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="subtitle2" color="textPrimary">
            {file.name}
          </Typography>
          <Typography variant="subtitle2" color="textPrimary">
            {bytesToSize(file.size)}
          </Typography>
        </Box>
        <Box color="success.light">
          {accepted && (
            <Typography variant="caption" color="inherit">
              Arquivo válido
            </Typography>
          )}
          {!accepted && (
            <Typography variant="caption" color="error">
              Arquivo inválido ou no formato incorreto
            </Typography>
          )}
        </Box>
      </Box>
      {onDelete && (!isLoading || !accepted) && (
        <IconButton color="secondary" onClick={() => onDelete(index, file)}>
          <CloseIcon />
        </IconButton>
      )}
      {isLoading && accepted && (
        <Box m={1.5}>
          <CircularProgress size="24px" />
        </Box>
      )}
    </Box>
  );
}

// FileItem.defaultProps = {};

FileItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
  isLoading: PropTypes.bool
};
