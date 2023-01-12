import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from "@mui/material/CircularProgress";
import { ImagLogin } from "../login/styled-components/Login.styled";
import registerImg from "../../assets/register.jpg";
import {
  BoxStyle,
  ModalContainer,
  Fields,
  Tittle,
  TwoFields,
  ButtonLog,
} from "./styled-components/SingUp.styled";

// Authentication
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { postUser } from "../../services/services";

function setOpenSingUp(setOpen: Function) {
  return () => { setOpen(true); }
}

export var openSingUp = () => { };

export default function SingUp() {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    imageProfile: "",
    phone: '',
    mail: "",
    password: "",
    userName: "username",
    birthday: new Date().toISOString().substr(0, 10),
    state: true,
    roleId: 1,
  });

  const [error, setError] = useState({
    name: false,
    lastName: false,
    imageProfile: false,
    phone: false,
    mail: '',
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [btnLoading, setBtnLoading] = useState(Boolean);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fontSizeLabel = 18;
  const fontSizeInput = 16;
  openSingUp = setOpenSingUp(setOpen);

  function handleInput(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { target } = event;

    setUser({
      ...user,
      [target.name]: target.value,
    });

    if (!target.value) {
      if (target.name === 'mail')
        setError({
          ...error,
          [target.name]: 'Mail esta vacio!',
        });
      else if (target.name === 'password')
        setError({
          ...error,
          [target.name]: 'Contraseña esta vacia!',
        });
      else
        setError({
          ...error,
          [target.name]: true,
        });
    }
    else
      setError({
        ...error,
        [event.target.name]: false,
      });
  }

  function handleInputConfirm(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { target } = event;
    setConfirmPassword(target.value);
  }

  function handleClickShow() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit() {
    const newError = {
      name: false,
      lastName: false,
      imageProfile: false,
      phone: false,
      mail: '',
      password: '',
    };

    var hasError = false;

    if (!user.name) {
      hasError = true;
      newError.name = true;
    }

    if (!user.lastName) {
      hasError = true;
      newError.lastName = true;
    }

    if (!user.imageProfile) {
      hasError = true;
      newError.imageProfile = true;
    }

    if (!user.phone) {
      hasError = true;
      newError.phone = true;
    }

    if (!user.mail) {
      hasError = true;
      newError.mail = 'Mail esta vacio!';
    }

    if (!user.password) {
      hasError = true;
      newError.password = 'Password esta vacia!';
    }

    if (hasError)
      setError(newError);
    else {
      try {
        setBtnLoading(true);
        await createUserWithEmailAndPassword(auth, user.mail, user.password);

        if (auth.currentUser)
          sendEmailVerification(auth.currentUser);
          
        await signOut(auth);
        window.alert('Debes verificar tu mail para inicar sesion!');
        
        await postUser(user);
        // await signInWithEmailAndPassword(auth, user.mail, user.password);
        setBtnLoading(false);
      } catch ({ code }) {
        setBtnLoading(false);

        switch (code) {
          case 'auth/email-already-in-use':
            setError({ ...error, mail: 'Mail ya registrado!' });
            break;

          case 'auth/invalid-email':
            setError({ ...error, mail: 'Mail invalido!' });
            break;

          case 'auth/weak-password':
            setError({ ...error, password: 'La contraseña debe tener al menos 6 caracteres!' });
            break;
        }
      }
    }
  }

  return (
    <div>
      {/* <Button onClick={handleOpen}>
        Registrarse
      </Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backdropFilter: 'blur(10px)' }}
      >
        <Box sx={BoxStyle}>
          <ModalContainer>
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <ImagLogin src={registerImg} />
            </div>

            <Fields>
              <Tittle>Regristrate</Tittle>

              <TwoFields className="input">
                <TextField
                  InputLabelProps={{
                    style: { fontSize: fontSizeLabel },
                  }}
                  label="Nombre"
                  name="name"
                  value={user.name}
                  placeholder="escribe tu nombre"
                  InputProps={{
                    style: { fontSize: fontSizeInput },
                  }}
                  error={error.name}
                  helperText={
                    error.name && (
                      <span style={{ fontSize: "12px" }}>
                        Nombre esta vacio!
                      </span>
                    )
                  }
                  variant="standard"
                  onChange={handleInput}
                  onFocus={handleInput}
                />

                <TextField
                  InputLabelProps={{
                    style: { fontSize: fontSizeLabel },
                  }}
                  label="Apellido"
                  name="lastName"
                  value={user.lastName}
                  placeholder="escribe tu apellido"
                  InputProps={{
                    style: { fontSize: fontSizeInput },
                  }}
                  error={error.lastName}
                  helperText={
                    error.lastName && (
                      <span style={{ fontSize: "12px" }}>
                        Apellido esta vacio!
                      </span>
                    )
                  }
                  variant="standard"
                  onChange={handleInput}
                  onFocus={handleInput}
                />
              </TwoFields>

              <TextField
                className="input"
                InputLabelProps={{
                  style: { fontSize: fontSizeLabel },
                }}
                label="Foto de perfil"
                name="imageProfile"
                value={user.imageProfile}
                placeholder="Coloca tu foto de perfil"
                sx={{ width: "100%" }}
                InputProps={{
                  style: { fontSize: fontSizeInput },
                }}
                error={error.imageProfile}
                helperText={
                  error.imageProfile && (
                    <span style={{ fontSize: "12px" }}>Foto de perfil esta vacia!</span>
                  )
                }
                variant="standard"
                onChange={handleInput}
                onFocus={handleInput}
              />

              <TwoFields className="input">
                <TextField
                  InputLabelProps={{
                    style: { fontSize: fontSizeLabel },
                  }}
                  label="Telefono"
                  name="phone"
                  value={user.phone}
                  type="number"
                  placeholder="escribe tu telefono"
                  sx={{ width: "100%" }}
                  InputProps={{
                    style: { fontSize: fontSizeInput },
                  }}
                  error={error.phone}
                  helperText={
                    error.phone && (
                      <span style={{ fontSize: "12px" }}>Telefono esta vacio!</span>
                    )
                  }
                  variant="standard"
                  onChange={handleInput}
                  onFocus={handleInput}
                />

                <TextField
                  name="birthday"
                  label="Fecha de nacimiento"
                  type="date"
                  value={user.birthday}
                  InputLabelProps={{
                    shrink: true,
                    style: { fontSize: fontSizeLabel },
                  }}
                  InputProps={{
                    style: { fontSize: fontSizeInput },
                  }}
                  variant="standard"
                  onChange={handleInput}
                />
              </TwoFields>

              <TextField
                className="input"
                InputLabelProps={{
                  style: { fontSize: fontSizeLabel },
                }}
                label="Mail"
                name="mail"
                value={user.mail}
                placeholder="escribe tu mail"
                sx={{ width: "100%" }}
                InputProps={{
                  style: { fontSize: fontSizeInput },
                }}
                error={error.mail ? true : false}
                helperText={
                  error.mail && (
                    <span style={{ fontSize: "12px" }}>{error.mail}</span>
                  )
                }
                variant="standard"
                onChange={handleInput}
                onFocus={handleInput}
              />

              <TwoFields className="input">
                <TextField
                  InputLabelProps={{
                    style: { fontSize: fontSizeLabel },
                  }}
                  label="Contraseña"
                  name="password"
                  value={user.password}
                  type={showPassword ? "text" : "password"}
                  placeholder="escribe tu contraseña"
                  InputProps={{
                    style: { fontSize: fontSizeInput },
                    endAdornment: user.password ? (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShow}>
                          {showPassword ? (
                            <VisibilityOffIcon sx={{ fontSize: "large" }} />
                          ) : (
                            <VisibilityIcon sx={{ fontSize: "large" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ) : (
                      <></>
                    ),
                  }}
                  error={error.password ? true : false}
                  helperText={
                    error.password && (
                      <span style={{ fontSize: "12px", position: "absolute" }}>
                        {error.password}
                      </span>
                    )
                  }
                  variant="standard"
                  onChange={handleInput}
                  onFocus={handleInput}
                />

                <TextField
                  InputLabelProps={{
                    style: { fontSize: fontSizeLabel },
                  }}
                  label="Confirmar contraseña"
                  name="password"
                  value={confirmPassword}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="confirma tu contraseña"
                  InputProps={{
                    style: { fontSize: fontSizeInput },
                    endAdornment: confirmPassword ? (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <VisibilityOffIcon sx={{ fontSize: "large" }} />
                          ) : (
                            <VisibilityIcon sx={{ fontSize: "large" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ) : (
                      <></>
                    ),
                  }}
                  error={
                    user.password && user.password !== confirmPassword
                      ? true
                      : false
                  }
                  helperText={
                    user.password && user.password !== confirmPassword ? (
                      <span style={{ fontSize: "12px", position: "absolute" }}>
                        Contraseña no coincide!
                      </span>
                    ) : (
                      <></>
                    )
                  }
                  variant="standard"
                  onChange={handleInputConfirm}
                />
              </TwoFields>

              {
                btnLoading ?
                  <LoadingButton
                    loading
                    variant="outlined"
                    size="small"
                    sx={{ ...ButtonLog, padding: "25px 25px", }}
                    loadingIndicator={
                      <CircularProgress size={"20px"} sx={{ color: "#fff" }} />
                    }
                  />
                  :
                  <Button
                    variant="contained"
                    sx={ButtonLog}
                    disabled={
                      (error.imageProfile ||
                        error.lastName ||
                        error.mail ? true : false ||
                          error.name ||
                          error.password ? true : false ||
                      error.phone) ||
                      (user.password !== '' && user.password !== confirmPassword)
                    }
                    onClick={handleSubmit}
                  >Registrarme</Button>
              }
            </Fields>
          </ModalContainer>
        </Box>
      </Modal>
    </div>
  );
}
