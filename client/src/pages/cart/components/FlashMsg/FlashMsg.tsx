<<<<<<< HEAD
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  SlideProps,
  Snackbar,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React, { useState } from "react";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Transition = React.forwardRef<JSX.Element, SlideProps>(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

export const FlashMsg = ({ msg }: any) => {
  let success = "Tienes productos en tu carrito";
  let info = "Stock agotado";

  const [open, setOpen] = useState(true);
  const handleClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      {msg === success ? (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            severity="success"
            onClose={handleClose}
            sx={{ width: "100%", fontSize: 12 }}
          >
            {msg}
          </Alert>
        </Snackbar>
      ) : (
        <Dialog
          open={open}
          // TransitionComponent ={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Producto agotado
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Te gustaría te avisemos cuando este nuevamente disponible?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Si, gracias.
            </Button>
            <Button onClick={handleClose} color="primary">
              No, gracias.
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};
=======
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React, {useState} from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const FlashMsg = ({ msg }: any) => {

  const [open, setOpen] = useState(true);
  const handleClose = (reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert 
        severity="success" 
        onClose={handleClose}
        sx={{ width: "100%", fontSize: 12 }}
        >
          {msg}
        </Alert>
      </Snackbar>
    </div>
  )
}
>>>>>>> e236a12518508ee58b84e2443c2eae21d7bb8651
