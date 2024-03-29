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
  let login = "login";
  const [open, setOpen] = useState(true);
  const handleClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleHidden = () => {};

  return (
    <div>
      {msg === success ? (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            severity="success"
            onClose={handleClose}
            sx={{ width: "100%", fontSize: 14 }}
          >
            {msg}
          </Alert>
        </Snackbar>
      ) : msg === login ? (
        <Dialog
          open={open}
          TransitionComponent ={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description" sx={{ width: "100%", fontSize: 18 }} >
              Inicio de sesión requerida
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" sx={{ width: "100%", fontSize: 12 }} >
              Ok
            </Button>
            {/* <Login /> */}
            <Button onClick={handleClose} color="primary" sx={{ width: "100%", fontSize: 12 }}>
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      )  : (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          severity="success"
          onClose={handleClose}
          sx={{ width: "100%", fontSize: 14 }}
        >
          {msg}
        </Alert>
      </Snackbar>
        // <Dialog
        //   open={open}
        //   keepMounted
        //   onClose={handleClose}
        //   aria-labelledby="alert-dialog-slide-title"
        //   aria-describedby="alert-dialog-slide-description"
        // >
        //   <DialogTitle id="alert-dialog-slide-title" sx={{ width: "100%", fontSize: 18 }}>
        //     Producto agotado
        //   </DialogTitle>
        //   <DialogContent>
        //     <DialogContentText id="alert-dialog-slide-description" sx={{ width: "100%", fontSize: 14 }}>
        //       Te gustaría te avisemos cuando este nuevamente disponible?
        //     </DialogContentText>
        //   </DialogContent>
        //   <DialogActions>
        //     <Button onClick={handleClose} color="primary" sx={{ width: "100%", fontSize: 12 }}>
        //       Si, gracias.
        //     </Button>
        //     <Button onClick={handleClose} color="primary" sx={{ width: "100%", fontSize: 12 }}>
        //       No, gracias.
        //     </Button>
        //   </DialogActions>
        // </Dialog>
      )}
    </div>
  );
};
