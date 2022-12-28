import React, { useState, useEffect } from 'react';
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
import { useAppSelector } from '../../../redux/app/hooks';
import { Button } from '@mui/material';

export default function Tabs() {
    const [value, setValue] = useState('1');
    const [user, setUser] = useState({ ...useAppSelector(({ userState }) => userState.user) });

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    function handleChangeUser(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }

    return (
        <Box sx={BoxTabs}>
            <TabContext value={value}>
                <Box display='flex' flexDirection='row' >
                    <Box sx={BoxTabList}>
                        <Title>Settings</Title>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" orientation='vertical' 
                            sx={{
                                '& button.Mui-selected': { color: '#ee9b00' }
                            }}
                            TabIndicatorProps={{
                                sx: {
                                    backgroundColor: '#ffa801'
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
                                    />
                                </TwoFields>

                                <Button
                                    variant="contained"
                                    sx={{ 
                                        ...ButtonLog, 
                                        backgroundColor: '#ffa801',
                                        '&:hover': {
                                            backgroundColor: '#d88c00'
                                        }
                                    }}
                                    
                                    onClick={()=> console.log(user)}
                                >Update Information</Button>
                            </div>
                        )} />
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                    </Box>
                </Box>
            </TabContext>
        </Box>
    );
}