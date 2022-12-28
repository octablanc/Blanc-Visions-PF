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

export default function Tabs({ closeModal } : { closeModal: Function; }) {
    const [value, setValue] = useState('1');
    const getUser = useAppSelector(({ userState }) => () => {
        return {
            name: userState.user?.name,
            lastName: userState.user?.lastName,
            birthday: userState.user?.birthday,
            phone: userState.user?.phone,
            mail: userState.user?.mail,
            password: userState.user?.password
        }
    })
    const userGlobal = useAppSelector(({ userState })=> userState.user);
    const [user, setUserState] = useState(getUser());
    const [changes, setChanges] = useState(false);
    const dispatch = useAppDispatch();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        setUserState(getUser());
    }

    const [error, setError] = useState({
        name: false,
        lastName: false,
        phone: false
    });

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

    async function handleSubmit(){
        if(changes){
            try {
                await updateUser(user, userGlobal?.id);
                dispatch(setUser({ ...userGlobal, ...user }));
                closeModal();
            } catch ({ message }) {
                window.alert(message);
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

                    <Box width='500px' height='400px' sx={{
                        position: 'relative',
                        '& p.MuiFormHelperText-root': {
                            position: 'absolute',
                            bottom: '-22px'
                        }
                    }}>
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
                                        sx={{ marginTop: '-3px' }}
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
                                    />
                                </TwoFields>

                                <Button
                                    variant="contained"
                                    sx={{
                                        ...ButtonLog,
                                        backgroundColor: theme.colors.primary,
                                        '&:hover': {
                                            backgroundColor: theme.colors.hoverPrimary
                                        }
                                    }}
                                    onClick={handleSubmit}
                                    //Error
                                    disabled={ error.name || error.lastName || error.phone }
                                >Update Information</Button>
                            </div>
                        )} />
                        <TabView value={2} title={'Mail settings'} subtitle={'Change your mail with a confirmation.'} content={(<span>Password</span>)} />
                        <TabPanel value="3">Item Three</TabPanel>
                    </Box>
                </Box>
            </TabContext>
        </Box>
    );
}