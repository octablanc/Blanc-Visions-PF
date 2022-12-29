import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { BoxTabList, BoxTabs, IconS, SpanTab, TabField, TabFieldContainer, Title } from './styled-components/Tabs.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import TabView from './TabView';
import TextField from '@mui/material/TextField';
import { ButtonLog, TwoFields } from '../../singup/styled-components/SingUp.styled';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { Button } from '@mui/material';
import { theme } from '../../../styled-components/theme';
import { updateUser } from '../../../services/services';
import { setUser } from '../../../redux/slices/user-authentication';
import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from "@mui/material/CircularProgress";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { signOut, updateEmail, updatePassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase.config';

// Firebase

export default function Tabs({ closeModal }: { closeModal: Function; }) {
    const [value, setValue] = useState('1');
    const getUser = useAppSelector(({ userState }) => () => {
        return {
            name: userState.user?.name,
            lastName: userState.user?.lastName,
            birthday: userState.user?.birthday,
            phone: userState.user?.phone,
            mail: '',
            password: ''
        }
    })
    const userGlobal = useAppSelector(({ userState }) => userState.user);
    const [user, setUserState] = useState(getUser());
    const [changes, setChanges] = useState(false);
    const dispatch = useAppDispatch();
    const [error, setError] = useState({
        name: false,
        lastName: false,
        phone: false,
    });
    const [btnLoading, setBtnLoading] = useState(false);

    // View 1
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        setUserState(getUser());
        setMail('');
        setConfirmMail('');
        setErrorView2('');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setCurrentPasswordError('');
        setNewPasswordError('');
    }

    function handleChangeUser(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setUserState({
            ...user,
            [event.target.name]: event.target.value
        });

        if (!event.target.value)
            setError({
                ...error,
                [event.target.name]: true
            });
        else
            setError({
                ...error,
                [event.target.name]: false
            });

        setChanges(true);
    }

    async function handleSubmitView1() {
        if (changes) {
            try {
                setBtnLoading(true);
                await updateUser(user, userGlobal?.id);
                dispatch(setUser({ ...userGlobal, ...user }));
                setBtnLoading(false);
                closeModal();
            } catch ({ message }) {
                setBtnLoading(false);
                window.alert(message);
            }
        }
    }

    // View 2
    const [mail, setMail] = useState('');
    const [errorView2, setErrorView2] = useState('');
    const [confirmMail, setConfirmMail] = useState('');

    function handleConfirmMail(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setConfirmMail(event.target.value);
    }

    function handleChangeView2(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setMail(event.target.value);
        if (!event.target.value)
            setErrorView2('Mail is empty!');
        else if (event.target.value === userGlobal?.mail)
            setErrorView2('Enter a different email!');
        else
            setErrorView2('');
    }

    async function handleSubmitView2() {
        if (!mail)
            setErrorView2('Mail is empty');
        else {
            try {
                if (auth.currentUser != null) {
                    setBtnLoading(true);
                    await updateEmail(auth.currentUser, mail);
                    dispatch(setUser({ ...userGlobal, mail }));
                    await updateUser({ mail }, userGlobal?.id);
                    setBtnLoading(false);
                    closeModal();
                }
            } catch ({ code }) {
                setBtnLoading(false);

                switch (code) {
                    case 'auth/requires-recent-login':
                        if (window.confirm('Need to log in again to make changes.'))
                            signOut(auth);
                        break;
                    case 'auth/email-already-in-use':
                        setErrorView2('Mail already in use!');
                        break;
                    case 'auth/invalid-email':
                        setErrorView2('Invalid mail!');
                        break;
                }
            }
        }
    }

    // View 3
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [currentPasswordError, setCurrentPasswordError] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function handleClickShow() {
        setShowPassword(!showPassword);
    }

    function handleClickShow2() {
        setShowNewPassword(!showNewPassword);
    }

    function handleClickShow3() {
        setShowConfirmPassword(!showConfirmPassword);
    }

    function handleChangeCurrentPassword(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setCurrentPassword(event.target.value);

        if (!event.target.value)
            setCurrentPasswordError('Password is empty!');
        else if (event.target.value != userGlobal?.password)
            setCurrentPasswordError('Wrong password!');
        else
            setCurrentPasswordError('');
    }

    function handleChangeNewPassword(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setNewPassword(event.target.value);

        if (!event.target.value)
            setNewPasswordError('New password is empty!');
        else
            setNewPasswordError('');
    }

    function handleChangeConfirmPassword(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setConfirmPassword(event.target.value);
    }

    async function handleSubmitView3(){
        if(!currentPassword)
            setCurrentPasswordError('Password is empty!');
        
        if(!newPassword)
            setNewPasswordError('New password is empty!');
        else{
            try {
                if (auth.currentUser != null) {
                    setBtnLoading(true);
                    await updatePassword(auth.currentUser, newPassword);
                    dispatch(setUser({ ...userGlobal, password: newPassword }));
                    await updateUser({ password: newPassword }, userGlobal?.id);
                    setBtnLoading(false);
                    closeModal();
                }
            } catch ({ code }) {
                setBtnLoading(false);
                
                switch(code){
                    case 'auth/weak-password':
                        setNewPasswordError('Password should be at least 6 characters.');
                        break;
                }
            }
        }
    }
    
    return (
        <Box sx={BoxTabs}>
            <TabContext value={value}>
                <Box display='flex' flexDirection='row' >
                    <Box sx={BoxTabList}>
                        <Title>Settings</Title>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" orientation='vertical'
                            sx={{
                                '& button.Mui-selected': { color: theme.colors.primary }
                            }}
                            TabIndicatorProps={{
                                sx: {
                                    backgroundColor: theme.colors.primary
                                }
                            }}
                        >
                            <Tab label={
                                <TabFieldContainer>
                                    <AccountCircleIcon style={IconS} />
                                    <SpanTab>Account</SpanTab>
                                </TabFieldContainer>
                            } value="1" sx={TabField} />

                            <Tab label={
                                <TabFieldContainer>
                                    <EmailIcon style={IconS} />
                                    <SpanTab>Mail</SpanTab>
                                </TabFieldContainer>
                            } value="2" sx={TabField} />

                            <Tab label={
                                <TabFieldContainer>
                                    <PasswordIcon style={IconS} />
                                    <SpanTab>Password</SpanTab>
                                </TabFieldContainer>
                            } value="3" sx={TabField} id='1' />
                        </TabList>
                    </Box>

                    <Box width='500px' height='400px'>
                        <TabView value={1} title='Account Settings' subtitle={'Settings for your personal information'} content={(
                            <div style={{ width: '100%', height: '100%', padding: '40px' }}>
                                <TwoFields>
                                    <TextField
                                        id="change-name"
                                        label="Name"
                                        variant="standard"
                                        name='name'
                                        value={user?.name}
                                        inputProps={{
                                            style: {
                                                fontSize: '17px'
                                            }
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: '15px'
                                            }
                                        }}
                                        onChange={handleChangeUser}
                                        //Error
                                        error={error.name}
                                        helperText={
                                            error.name && (
                                                <span style={{ fontSize: "12px" }}>
                                                    First name is empty!
                                                </span>
                                            )
                                        }
                                        sx={{
                                            position: 'relative',
                                            '& p.MuiFormHelperText-root': {
                                                position: 'absolute',
                                                bottom: '-22px'
                                            }
                                        }}
                                    />

                                    <TextField
                                        id="change-last-name"
                                        label="Last Name"
                                        variant="standard"
                                        name='lastName'
                                        value={user?.lastName}
                                        inputProps={{
                                            style: {
                                                fontSize: '17px'
                                            }
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: '15px'
                                            }
                                        }}
                                        onChange={handleChangeUser}
                                        //Error
                                        error={error.lastName}
                                        helperText={
                                            error.lastName && (
                                                <span style={{ fontSize: "12px" }}>
                                                    Last name is empty!
                                                </span>
                                            )
                                        }

                                        sx={{
                                            position: 'relative',
                                            '& p.MuiFormHelperText-root': {
                                                position: 'absolute',
                                                bottom: '-22px'
                                            }
                                        }}
                                    />
                                </TwoFields>

                                <TwoFields style={{ marginTop: '30px' }}>
                                    <TextField
                                        name="birthday"
                                        label="Birthday"
                                        type="date"
                                        value={user?.birthday}
                                        InputLabelProps={{
                                            shrink: true,
                                            style: { fontSize: '17px' },
                                        }}
                                        InputProps={{
                                            style: { fontSize: '15px' },
                                        }}
                                        variant="standard"
                                        onChange={handleChangeUser}
                                    />

                                    <TextField
                                        id="change-phone"
                                        label="Phone"
                                        variant="standard"
                                        name='phone'
                                        type={'number'}
                                        value={user?.phone}
                                        inputProps={{
                                            style: {
                                                fontSize: '17px'
                                            }
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: '15px'
                                            }
                                        }}
                                        onChange={handleChangeUser}
                                        //Error
                                        error={error.phone}
                                        helperText={
                                            error.phone && (
                                                <span style={{ fontSize: "12px" }}>
                                                    Phone is empty!
                                                </span>
                                            )
                                        }
                                        sx={{
                                            marginTop: '-2px',
                                            position: 'relative',
                                            '& p.MuiFormHelperText-root': {
                                                position: 'absolute',
                                                bottom: '-22px'
                                            }
                                        }}
                                    />
                                </TwoFields>
                                {
                                    btnLoading ?
                                        <LoadingButton
                                            loading
                                            variant="outlined"
                                            size="small"
                                            sx={{ ...ButtonLog, padding: "25px 25px", backgroundColor: theme.colors.primary }}
                                            loadingIndicator={
                                                <CircularProgress size={"20px"} sx={{ color: "#fff" }} />
                                            }
                                        />
                                        :
                                        <Button
                                            variant="contained"
                                            sx={{
                                                ...ButtonLog,
                                                backgroundColor: theme.colors.primary,
                                                '&:hover': {
                                                    backgroundColor: theme.colors.hoverPrimary
                                                }
                                            }}
                                            onClick={handleSubmitView1}
                                            //Error
                                            disabled={error.name || error.lastName || error.phone}
                                        >Update Information</Button>
                                }

                            </div>
                        )} />


                        <TabView value={2} title={'Mail settings'} subtitle={'Change your mail with a confirmation.'} content={(
                            <div style={{
                                width: '100%',
                                height: '96%',
                                padding: '40px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '-22px',
                                }}>
                                    <TextField
                                        id="change-mail"
                                        label="Mail"
                                        variant="standard"
                                        name='mail'
                                        value={mail}
                                        inputProps={{
                                            style: {
                                                fontSize: '17px',
                                                width: '250px'
                                            }
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: '17px'
                                            }
                                        }}
                                        onChange={handleChangeView2}
                                        onFocus={handleChangeView2}
                                        //Error
                                        error={errorView2 ? true : false}
                                        helperText={
                                            errorView2 && (
                                                <span style={{ fontSize: "13px" }}>
                                                    {errorView2}
                                                </span>
                                            )
                                        }
                                        sx={{
                                            position: 'relative',
                                            '& p.MuiFormHelperText-root': {
                                                position: 'absolute',
                                                bottom: '-22px'
                                            },
                                            marginBottom: '30px'
                                        }}
                                    />

                                    <TextField
                                        id="confirm-mail"
                                        label="Confirm mail"
                                        variant="standard"
                                        name='confirmMail'
                                        value={confirmMail}
                                        inputProps={{
                                            style: {
                                                fontSize: '17px',
                                                width: '250px'
                                            }
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: '17px'
                                            }
                                        }}
                                        onChange={handleConfirmMail}
                                        //Error
                                        error={mail !== '' && mail !== confirmMail ? true : false}
                                        helperText={
                                            mail !== '' && mail !== confirmMail && (
                                                <span style={{ fontSize: "13px" }}>
                                                    Mails do not match!
                                                </span>
                                            )
                                        }
                                        sx={{
                                            position: 'relative',
                                            '& p.MuiFormHelperText-root': {
                                                position: 'absolute',
                                                bottom: '-22px'
                                            },
                                            marginBottom: '20px'
                                        }}
                                    />
                                </div>

                                {
                                    btnLoading ?
                                        <LoadingButton
                                            loading
                                            variant="outlined"
                                            size="small"
                                            sx={{ ...ButtonLog, padding: "25px 25px", backgroundColor: theme.colors.primary }}
                                            loadingIndicator={
                                                <CircularProgress size={"20px"} sx={{ color: "#fff" }} />
                                            }
                                        />
                                        :
                                        <Button
                                            variant="contained"
                                            sx={{
                                                ...ButtonLog,
                                                backgroundColor: theme.colors.primary,
                                                '&:hover': {
                                                    backgroundColor: theme.colors.hoverPrimary
                                                }
                                            }}
                                            //Error
                                            disabled={errorView2 ? true : false || mail !== '' && mail !== confirmMail ? true : false}
                                            onClick={handleSubmitView2}
                                        >Update Mail</Button>
                                }
                            </div>
                        )} />

                        <TabView value={3} title='Change password' subtitle='Here you will be able to change youre password' content={(
                            <div style={{ width: '100%', height: '100%', padding: '40px' }}>
                                <TwoFields>
                                    <TextField
                                        id="current-password"
                                        label="Current password"
                                        variant="standard"
                                        name='currentPassword'
                                        value={currentPassword}
                                        type={showPassword ? "text" : "password"}
                                        InputProps={{
                                            style: { fontSize: '17px' },
                                            endAdornment: currentPassword ? (
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
                                            )
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: '17px'
                                            },
                                        }}
                                        //Error
                                        error={currentPasswordError ? true : false}
                                        helperText={(
                                            <span style={{ fontSize: "13px" }}>
                                                {currentPasswordError}
                                            </span>
                                        )
                                        }
                                        sx={{
                                            position: 'relative',
                                            '& p.MuiFormHelperText-root': {
                                                position: 'absolute',
                                                bottom: '-22px'
                                            },
                                            marginBottom: '20px'
                                        }}
                                        onChange={handleChangeCurrentPassword}
                                        onFocus={handleChangeCurrentPassword}
                                    />
                                </TwoFields>

                                <TwoFields style={{ marginBottom: '8px' }}>
                                    <TextField
                                        id="new-password"
                                        label="New password"
                                        variant="standard"
                                        name='newPassword'
                                        value={newPassword}
                                        type={showNewPassword ? "text" : "password"}
                                        InputProps={{
                                            style: { fontSize: '17px' },
                                            endAdornment: newPassword ? (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleClickShow2}>
                                                        {showNewPassword ? (
                                                            <VisibilityOffIcon sx={{ fontSize: "large" }} />
                                                        ) : (
                                                            <VisibilityIcon sx={{ fontSize: "large" }} />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            ) : (
                                                <></>
                                            )
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: '17px'
                                            },
                                        }}
                                        //Error
                                        error={newPasswordError ? true : false}
                                        helperText={(
                                            <span style={{ fontSize: "13px", whiteSpace: 'nowrap' }}>
                                                {newPasswordError}
                                            </span>
                                        )
                                        }
                                        sx={{
                                            position: 'relative',
                                            '& p.MuiFormHelperText-root': {
                                                position: 'absolute',
                                                bottom: '-22px'
                                            }
                                        }}
                                        onChange={handleChangeNewPassword}
                                        onFocus={handleChangeNewPassword}
                                    />

                                    <TextField
                                        id="confirm-new-password"
                                        label="Confirm password"
                                        variant="standard"
                                        name='newPassword'
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        InputProps={{
                                            style: { fontSize: '17px' },
                                            endAdornment: confirmPassword ? (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleClickShow3}>
                                                        {showConfirmPassword ? (
                                                            <VisibilityOffIcon sx={{ fontSize: "large" }} />
                                                        ) : (
                                                            <VisibilityIcon sx={{ fontSize: "large" }} />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            ) : (
                                                <></>
                                            )
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: '17px'
                                            },
                                        }}
                                        //Error
                                        error={newPassword && newPassword !==  confirmPassword? true : false}
                                        helperText={(newPassword && newPassword !==  confirmPassword?
                                            <span style={{ fontSize: "13px", whiteSpace: 'nowrap' }}>
                                                Passwords do not match!
                                            </span> : <></>
                                        )
                                        }
                                        sx={{
                                            position: 'relative',
                                            '& p.MuiFormHelperText-root': {
                                                position: 'absolute',
                                                bottom: '-22px'
                                            }
                                        }}
                                        onChange={handleChangeConfirmPassword}
                                    />
                                </TwoFields>

                                {
                                    btnLoading ?
                                        <LoadingButton
                                            loading
                                            variant="outlined"
                                            size="small"
                                            sx={{ ...ButtonLog, padding: "25px 25px", backgroundColor: theme.colors.primary }}
                                            loadingIndicator={
                                                <CircularProgress size={"20px"} sx={{ color: "#fff" }} />
                                            }
                                        />
                                        :
                                        <Button
                                            variant="contained"
                                            sx={{
                                                ...ButtonLog,
                                                backgroundColor: theme.colors.primary,
                                                '&:hover': {
                                                    backgroundColor: theme.colors.hoverPrimary
                                                }
                                            }}
                                            //Error
                                            disabled={
                                                currentPasswordError? true : false ||
                                                newPasswordError? true: false ||
                                                newPassword && newPassword !== confirmPassword ? true : false
                                            }
                                            onClick={handleSubmitView3}
                                        >Update Mail</Button>
                                }
                            </div>
                        )} />
                    </Box>
                </Box>
            </TabContext>
        </Box>
    );
}