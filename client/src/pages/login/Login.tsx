import { useState } from "react";
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
} from "./styled-components/Login.styled";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import loginImg from "../../assets/login.jpg";

// Authentication
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export default function Login() {
  const [user, setUser] = useState({
    mail: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fontSizeLabel = 19;
  const fontSizeInput = 17;

  function handleInput(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  }

  function handleClickShow() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(){
    try {
      const logged = await signInWithEmailAndPassword(auth, user.mail, user.password);
    } catch ({ message }) {
      window.alert(message);
    }
  }

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
        Log In
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
              <ImagLogin src={loginImg} alt="loginImage" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: "flex-end"
              }}
            >
              <LoginContainer>
                <h2 style={{ fontWeight: "500" }}>Log In</h2>
                <TextField
                  InputLabelProps={{
                    style: { fontSize: fontSizeLabel },
                  }}
                  label="Mail"
                  name="mail"
                  value={user.mail}
                  placeholder="type your mail"
                  sx={{ width: "100%" }}
                  InputProps={{
                    style: { fontSize: fontSizeInput }
                  }}
                  variant="standard"
                  onChange={handleInput}
                />

                <TextField
                  InputLabelProps={{
                    style: { fontSize: fontSizeLabel },
                  }}
                  label="Password"
                  name="password"
                  value={user.password}
                  type={showPassword ? "text" : "password"}
                  placeholder="type your password"
                  sx={{ width: "100%", marginTop: "20px" }}
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
                  variant="standard"
                  onChange={handleInput}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "20px",
                  }}
                >
                  <Button variant="contained" sx={ButtonLog} onClick={handleSubmit}>Log In</Button>

                  <ForgetPassword>Forgot your password?</ForgetPassword>
                </div>
              </LoginContainer>
              <CreateContainer>
                <p>
                  Do not have an account? <span>Create one</span>
                </p>
              </CreateContainer>
            </div>
          </ModalContainer>
        </Box>
      </Modal>
    </div>
  );
}
