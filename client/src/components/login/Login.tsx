import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
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
  Mail,
} from './styled-components/Login.styled';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import loginImg from '../../assets/login.jpg';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { FcGoogle } from 'react-icons/fc';
// Authentication
import {
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth, provider } from '../../firebase/firebase.config';
import { openSingUp } from '../singup/SingUp';
import { getuser, postUser } from '../../services/services';
import { useAppDispatch } from '../../redux/app/hooks';
import { getUser } from '../../redux/slices/user-authentication';
import { setUser as setUserState } from '../../redux/slices/user-authentication';

export default function Login() {
  const [user, setUser] = useState({
    mail: '',
    password: '',
  });
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [btnLoading2, setBtnLoading2] = useState(false);
  const [btnLoading3, setBtnLoading3] = useState(false);
  const [error, setError] = useState({ mail: false, password: false });
  const [openDialog, setOpenDialog] = useState(false);
  const fontSizeLabel = 18;
  const fontSizeInput = 16;
  const disptach = useAppDispatch();

  const handleOpen = () => setOpen(true);

  const handleOpenDialog = () => setOpenDialog(!openDialog);

  const handleClose = () => setOpen(false);

  function handleChangeEmail(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setEmail(event.target.value);
    setEmailError(!event.target.value ? true : false);
  }

  function handleInput(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });

    setError({
      ...error,
      [event.target.name]: false,
    });
  }

  function handleClickShow() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit() {
    try {
      setBtnLoading(true);

      await signInWithEmailAndPassword(auth, user.mail, user.password);

      // if (!auth.currentUser?.emailVerified) {
      //   await signOut(auth);
      //   window.alert("Debes verificar tu mail!");
      // }

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

  async function handleSubmitGoogle() {
    try {
      setBtnLoading2(true);
      const { user } = await signInWithPopup(auth, provider);
      const fullName = user.displayName?.split(' ');

      const newUser = {
        name: fullName && fullName[0],
        lastName: fullName && fullName[1] !== undefined ? fullName[1] : ' ',
        imageProfile: user.photoURL,
        phone: user.phoneNumber ? user.phoneNumber : 'Numero no registrado',
        mail: user.email,
        password: 'registredWithGoogle',
        userName: 'username',
        birthday: new Date().toISOString().slice(0, 10),
        state: true,
        roleId: 1,
      };

      try {
        disptach(setUserState(await getuser(newUser.mail)));
      } catch (error) {
        await postUser(newUser);
        disptach(getUser(newUser.mail));
      }

      setBtnLoading2(false);
    } catch ({ code }) {
      setBtnLoading2(false);
    }
  }

  async function handleSubmitEmail() {
    try {
      setBtnLoading3(true);
      await sendPasswordResetEmail(auth, email);
      setBtnLoading3(false);
      alert('Mail enviado correctamente!');
      setOpenDialog(false);
    } catch ({ code }) {
      alert(code);
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
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{ backdropFilter: 'blur(10px)' }}
      >
        <Box sx={BoxStyle}>
          <ModalContainer>
            <div
              style={{
                width: '100%',
                height: '100%',
              }}
            >
              <ImagLogin src={loginImg} alt='loginImage' />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <LoginContainer>
                <h2 style={{ fontWeight: '500' }}>Iniciar Sesión</h2>
                <Inputs>
                  <TextField
                    InputLabelProps={{
                      style: { fontSize: fontSizeLabel },
                    }}
                    label='Correo'
                    name='mail'
                    value={user.mail}
                    placeholder='Escribe tu correo'
                    sx={Mail}
                    InputProps={{
                      style: { fontSize: fontSizeInput },
                    }}
                    error={error.mail ? true : false}
                    helperText={
                      error.mail && (
                        <span style={{ fontSize: '12px' }}>
                          Usuario no encontrado!
                        </span>
                      )
                    }
                    variant='standard'
                    onChange={handleInput}
                  />

                  <TextField
                    InputLabelProps={{
                      style: { fontSize: fontSizeLabel },
                    }}
                    label='Contraseña'
                    name='password'
                    value={user.password}
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Escribe tu contraseña'
                    sx={Password}
                    InputProps={{
                      style: { fontSize: fontSizeInput },
                      endAdornment: user.password ? (
                        <InputAdornment position='end'>
                          <IconButton onClick={handleClickShow}>
                            {showPassword ? (
                              <VisibilityOffIcon sx={{ fontSize: 'large' }} />
                            ) : (
                              <VisibilityIcon sx={{ fontSize: 'large' }} />
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
                        <span
                          style={{ fontSize: '12px', position: 'absolute' }}
                        >
                          Contraseña incorrecta!
                        </span>
                      )
                    }
                    variant='standard'
                    onChange={handleInput}
                  />
                </Inputs>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  {btnLoading ? (
                    <LoadingButton
                      loading
                      variant='outlined'
                      size='small'
                      sx={{ ...ButtonLog, backgroundColor: '#1976D2' }}
                      loadingIndicator={
                        <CircularProgress
                          size={'20px'}
                          sx={{ color: '#fff' }}
                        />
                      }
                    />
                  ) : (
                    <Button
                      variant='contained'
                      sx={ButtonLog}
                      onClick={handleSubmit}
                    >
                      Ingresar
                    </Button>
                  )}

                  {btnLoading2 ? (
                    <LoadingButton
                      loading
                      variant='outlined'
                      size='small'
                      sx={{
                        ...ButtonLog,
                        backgroundColor: '#1976D2',
                        marginTop: '20px',
                      }}
                      loadingIndicator={
                        <CircularProgress
                          size={'20px'}
                          sx={{ color: '#fff' }}
                        />
                      }
                    />
                  ) : (
                    <Button
                      variant='contained'
                      sx={{
                        ...ButtonLog,
                        marginTop: '20px',
                        textTransform: 'none',
                      }}
                      onClick={handleSubmitGoogle}
                      startIcon={
                        <FcGoogle
                          style={{
                            width: '25px',
                            height: '25px',
                            backgroundColor: 'white',
                            borderRadius: '3px',
                          }}
                        />
                      }
                    >
                      Iniciar sesión con Google
                    </Button>
                  )}
                  <ForgetPassword onClick={handleOpenDialog}>
                    Olvidaste tu contraseña?
                  </ForgetPassword>

                  <Dialog
                    open={openDialog}
                    onClose={handleOpenDialog}
                    sx={{ 'h2:after': { backgroundColor: 'transparent' } }}
                  >
                    <div style={{ padding: '25px' }}>
                      <DialogTitle style={{ fontSize: '23px' }}>
                        Recuperar contraseña
                      </DialogTitle>
                      <DialogContent style={{ width: '400px' }}>
                        <DialogContentText style={{ fontSize: '15px' }}>
                          Escribe tu email y te enviaremos un link para
                          restablecer tu contraseña.
                        </DialogContentText>
                        <TextField
                          autoFocus
                          margin='dense'
                          id='email'
                          label='Email'
                          type='email'
                          value={email}
                          fullWidth
                          variant='standard'
                          InputProps={{
                            style: {
                              fontSize: '15px',
                            },
                          }}
                          InputLabelProps={{
                            style: {
                              fontSize: '17px',
                            },
                          }}
                          helperText={
                            emailError ? (
                              <span style={{ fontSize: '12px' }}>
                                Email esta vacio!
                              </span>
                            ) : (
                              <></>
                            )
                          }
                          onChange={handleChangeEmail}
                          onBlur={handleChangeEmail}
                          error={emailError}
                        />
                        {btnLoading3 ? (
                          <LoadingButton
                            loading
                            variant='outlined'
                            size='small'
                            sx={{
                              ...ButtonLog,
                              backgroundColor: '#1976D2',
                              marginTop: '20px',
                            }}
                            loadingIndicator={
                              <CircularProgress
                                size={'20px'}
                                sx={{ color: '#fff' }}
                              />
                            }
                          />
                        ) : (
                          <Button
                            onClick={handleSubmitEmail}
                            variant='contained'
                            sx={{ ...ButtonLog, textTransform: 'none' }}
                            disabled={emailError}
                            color={'primary'}
                          >
                            Enviar
                          </Button>
                        )}
                      </DialogContent>
                    </div>
                  </Dialog>
                </div>
              </LoginContainer>

              <CreateContainer>
                <p>
                  No tienes una cuenta?
                  <span
                    onClick={() => {
                      handleClose();
                      openSingUp();
                    }}
                  >
                    Regístrate
                  </span>
                </p>
              </CreateContainer>
            </div>
          </ModalContainer>
        </Box>
      </Modal>
    </div>
  );
}
