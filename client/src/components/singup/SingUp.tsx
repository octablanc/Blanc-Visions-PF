import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ImagLogin } from '../login/styled-components/Login.styled';
import registerImg from "../../assets/register.jpg";
import { BoxStyle, ModalContainer, Fields, Tittle, TwoFields, ButtonLog } from './styled-components/SingUp.styled';

export default function SingUp() {
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    imageProfile: '',
    userName: 'username',
    phone: '',
    birthday: '',
    mail: '',
    password: '',
    state: true,
    roleId: 1
  });

  const [error, setError] = useState({
    name: false,
    lastName: false,
    imageProfile: false,
    phone: false,
    birthday: false,
    mail: false,
    password: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fontSizeLabel = 18;
  const fontSizeInput = 16;

  function handleInput(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { target } = event;

    setUser({
      ...user,
      [target.name]: target.value
    });


    if (!target.value)
      setError({
        ...error,
        [target.name]: true
      })
    else
      setError({
        ...error,
        [event.target.name]: false
      })
  }

  function handleInputFocus(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { target } = event;

    if (!target.value)
      setError({
        ...error,
        [target.name]: true
      })
  }

  function handleClickShow() {
    setShowPassword(!showPassword);
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
        Sing Up
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflow: 'auto' }}
      >
        <Box sx={BoxStyle}>
          <ModalContainer>
            <div style={{
              width: '100%',
              height: '100%',
            }}>
              <ImagLogin alt='Register Image' src={registerImg} />
            </div>

            <Fields>
              <Tittle>Sing Up</Tittle>

              <TwoFields className='input'>
                <TextField
                  InputLabelProps={{
                    style: { fontSize: fontSizeLabel },
                  }}
                  label="First name"
                  name="name"
                  value={user.name}
                  placeholder="type your first name"
                  InputProps={{
                    style: { fontSize: fontSizeInput }
                  }}
                  error={error.name}
                  helperText={
                    (error.name && (
                      <span style={{ fontSize: '12px' }}>First name is empty!</span>
                    ))
                  }
                  variant="standard"
                  onChange={handleInput}
                  onFocus={handleInputFocus}
                />

                <TextField
                  InputLabelProps={{
                    style: { fontSize: fontSizeLabel },
                  }}
                  label="Last name"
                  name="lastName"
                  value={user.lastName}
                  placeholder="type your last name"
                  InputProps={{
                    style: { fontSize: fontSizeInput }
                  }}
                  error={error.lastName}
                  helperText={
                    (error.lastName && (
                      <span style={{ fontSize: '12px' }}>Last name is empty!</span>
                    ))
                  }
                  variant="standard"
                  onChange={handleInput}
                  onFocus={handleInputFocus}
                />
              </TwoFields>

              <TextField
                className='input'
                InputLabelProps={{
                  style: { fontSize: fontSizeLabel },
                }}
                label="Image"
                name="imageProfile"
                value={user.imageProfile}
                placeholder="type your image"
                sx={{ width: '100%' }}
                InputProps={{
                  style: { fontSize: fontSizeInput }
                }}
                error={error.imageProfile}
                helperText={
                  (error.imageProfile && (
                    <span style={{ fontSize: '12px' }}>Image is empty!</span>
                  ))
                }
                variant="standard"
                onChange={handleInput}
                onFocus={handleInputFocus}
              />

              <TwoFields className='input'>
                <TextField
                  InputLabelProps={{
                    style: { fontSize: fontSizeLabel },
                  }}
                  label="Phone"
                  name="phone"
                  value={user.phone}
                  type="number"
                  placeholder="type your phone"
                  sx={{ width: '100%' }}
                  InputProps={{
                    style: { fontSize: fontSizeInput }
                  }}
                  error={error.phone}
                  helperText={
                    (error.phone && (
                      <span style={{ fontSize: '12px' }}>Phone is empty!</span>
                    ))
                  }
                  variant="standard"
                  onChange={handleInput}
                  onFocus={handleInputFocus}
                />

                <TextField
                  name='birthday'
                  label="Birthday"
                  type="date"
                  defaultValue={new Date().toISOString().substr(0, 10)}
                  InputLabelProps={{
                    shrink: true,
                    style: { fontSize: fontSizeLabel }
                  }}
                  InputProps={{
                    style: { fontSize: fontSizeInput }
                  }}
                  variant="standard"
                />
              </TwoFields>

              <TextField
                className='input'
                InputLabelProps={{
                  style: { fontSize: fontSizeLabel },
                }}
                label="Mail"
                name="mail"
                value={user.mail}
                placeholder="type your mail"
                sx={{ width: '100%' }}
                InputProps={{
                  style: { fontSize: fontSizeInput }
                }}
                error={error.mail}
                helperText={
                  (error.mail && (
                    <span style={{ fontSize: '12px' }}>Mail is empty!</span>
                  ))
                }
                variant="standard"
                onChange={handleInput}
                onFocus={handleInputFocus}
              />

              <TwoFields className='input'>
                <TextField
                  InputLabelProps={{
                    style: { fontSize: fontSizeLabel },
                  }}
                  label="Password"
                  name="password"
                  value={user.password}
                  type={showPassword ? "text" : "password"}
                  placeholder="type your password"
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
                      <span style={{ fontSize: '12px', position: 'absolute' }}>Password is empty!</span>
                    ))
                  }
                  variant="standard"
                  onChange={handleInput}
                />

                <TextField
                  InputLabelProps={{
                    style: { fontSize: fontSizeLabel },
                  }}
                  label="Confirm password"
                  name="password"
                  value={user.password}
                  type={showPassword ? "text" : "password"}
                  placeholder="confirm your password"
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
                      <span style={{ fontSize: '12px', position: 'absolute' }}>Password is empty!</span>
                    ))
                  }
                  variant="standard"
                  onChange={handleInput}
                />
              </TwoFields>

              <Button variant="contained" sx={ButtonLog}>Sing Up</Button>
            </Fields>

          </ModalContainer>
        </Box>
      </Modal>
    </div >
  );
}