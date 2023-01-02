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
