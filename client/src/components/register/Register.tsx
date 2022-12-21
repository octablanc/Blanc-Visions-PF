import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { BoxStyle, ModalContainer, ImagLogin } from '../login/styled-components/Login.styled';
import loginImg from "../../assets/login.jpg";

export default function SingUp() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          color: "black",
          fontSize: "20px",
          textTransform: "capitalize",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "400",
        }}
      >
        Sing Up
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={BoxStyle}>
            <ModalContainer>
                <div>
                    <ImagLogin alt='Register Image' src={loginImg}/>
                </div>
            </ModalContainer>
        </Box>
      </Modal>
    </div>
  );
}