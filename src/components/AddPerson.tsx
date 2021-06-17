import React, { useState } from "react";
import AddPersonForm from "./AddPersonForm";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import AddIcon from "@material-ui/icons/Add";

const AddPerson: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen: () => void = () => {
    setOpen(true);
  };

  const handleClose: () => void = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        style={{ borderRadius: "50%", minWidth: "0", padding: "16px" }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>Add a Person</Box>
            <Box>
              <IconButton
                aria-label="close"
                color="secondary"
                onClick={handleClose}
              >
                <CancelIcon />
              </IconButton>
            </Box>
          </Box>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            Fields marked by * are required. Others are optional.
          </DialogContentText>
          <AddPersonForm handleClose={handleClose} />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};

export default AddPerson;
