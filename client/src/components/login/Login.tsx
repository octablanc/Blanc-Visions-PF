import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  BoxStyle,
  ModalContainer,
  CreateContainer,
  LoginContainer,
  ButtonLog,
  ForgetPassword,
  ImagLogin,
  Inputs,
  Password,
  Mail
} from "./styled-components/Login.styled";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import loginImg from "../../assets/login.jpg";
import CircularProgress from '@mui/material/CircularProgress';

// Authentication
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { openSingUp } from "../singup/SingUp";


export default function Login() {
  const [user, setUser] = useState({
    mail: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [btnLoading, setBtnLoading] = useState(Boolean);
  const [error, setError] = useState({ mail: false, password: false });
  const fontSizeLabel = 18;
  const fontSizeInput = 16;

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  function handleInput(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });

    setError({
      ...error,
      [event.target.name]: false
    })
  }

  function handleClickShow() {
    setShowPassword(!showPassword);
  }
  
  async function handleSubmit() {
    try {
      setBtnLoading(true);

      await signInWithEmailAndPassword(auth, user.mail, user.password);

      if(!auth.currentUser?.emailVerified){
        window.alert('Debes verificar tu mail!');
        await signOut(auth);
      }
      
      setBtnLoading(false);
    } catch ({ code }) {
      setBtnLoading(false);

      switch (code) {
        case 'auth/user-not-found':
          setError({ ...error, mail: true });
          break;

        case 'auth/wrong-password':
          setError({ ...error, password: true });
          break;
        
        default:
          window.alert(code);
      }
    }
  }

  return (
    <div>
      <Button onClick={handleOpen} sx={{ marginRight: '1rem' }}>
        Iniciar sesion
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backdropFilter: 'blur(10px)' }}
      >
        <Box sx={BoxStyle}>
          <ModalContainer>
            <div style={{
              width: '100%',
              height: '100%',
            }}>
              <ImagLogin src={loginImg} alt="loginImage" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
              }}
            >
              <LoginContainer>
                <h2 style={{ fontWeight: "500" }}>Log In</h2>
                <Inputs>
                  <TextField
                    InputLabelProps={{
                      style: { fontSize: fontSizeLabel },
                    }}
                    label="Mail"
                    name="mail"
                    value={user.mail}
                    placeholder="escribe tu mail"
                    sx={Mail}
                    InputProps={{
                      style: { fontSize: fontSizeInput }
                    }}
                    error={error.mail ? true : false}
                    helperText={
                      (error.mail && (
                        <span style={{ fontSize: '12px' }}>Usuario no encontrado!</span>
                      ))
                    }
                    variant="standard"
                    onChange={handleInput}
                  />

                  <TextField
                    InputLabelProps={{
                      style: { fontSize: fontSizeLabel },
                    }}
                    label="Contraseña"
                    name="password"
                    value={user.password}
                    type={showPassword ? "text" : "password"}
                    placeholder="escribe tu contraseña"
                    sx={Password}
                    InputProps={{
                      style: { fontSize: fontSizeInput },
                      endAdornment: (
                        user.password ? <InputAdornment position="end">
                          <IconButton onClick={handleClickShow}>
                            {showPassword ? <VisibilityOffIcon sx={{ fontSize: 'large' }} /> : <VisibilityIcon sx={{ fontSize: 'large' }} />}
                          </IconButton>
                        </InputAdornment> : <></>
                      )
                    }}
                    error={error.password ? true : false}
                    helperText={
                      (error.password && (
                        <span style={{ fontSize: '12px', position: 'absolute' }}>Contraseña incorrecta!</span>
                      ))
                    }
                    variant="standard"
                    onChange={handleInput}
                  />
                </Inputs>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",

                  }}
                >
                  {
                    btnLoading ?
                      <LoadingButton
                        loading
                        variant="outlined"
                        size="small"
                        sx={{ ...ButtonLog, backgroundColor: '#1976D2' }}
                        loadingIndicator={<CircularProgress size={'20px'} sx={{ color: '#fff' }} />}
                      /> : <Button variant="contained" sx={ButtonLog} onClick={handleSubmit}>Iniciar Sesion</Button>
                  }
                  <ForgetPassword>Olvidaste tu contraseña?</ForgetPassword>
                </div>
              </LoginContainer>
              <CreateContainer>
                <p>
                  No tienes una cuenta? <span onClick={()=> {
                    handleClose()
                    openSingUp()
                  }} >Registrate</span>
                </p>
              </CreateContainer>
            </div>
          </ModalContainer>
        </Box>
      </Modal>
    </div>
  );
}
