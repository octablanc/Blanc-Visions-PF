import { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CakeIcon from '@mui/icons-material/Cake';
import Logout from '@mui/icons-material/Logout';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import { useNavigate } from 'react-router-dom';
import { AvatarPic, Field, Fields, FullName, Profilecontainer } from './styled-components/AccountMenu.styled';
import { useAppSelector } from '../../../redux/app/hooks';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export default function AccountMenu() {
  const user = useAppSelector(({userState})=> userState.user);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handleLogOut() {
    await signOut(auth);
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="large"
            sx={{ ml: 2, position: 'relative'}}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 45, height: 45, position: 'absolute' }} src={`${user?.imageProfile}`} />
            <ExpandCircleDownIcon style={{  
              width: '18px', 
              height: '18px', 
              background: 'white', 
              borderRadius: '50%', 
              position: 'absolute', 
              bottom: '-12px', 
              right: '-12px',
              cursor: 'pointer' 
            }}/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            width: '300px',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 3,
            ml: 1,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* <MenuItem sx={{ fontSize: '19px', marginLeft: '2px' }} onClick={()=> navigate('/profile')}>
          <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', textTransform: 'capitalize' }}>
            <Avatar src={avatar}/>
            <span style={{ marginLeft: '10px' }}>{ fullName }</span>
          </div>
        </MenuItem> */}

        <Profilecontainer>
          <div style={{ position: 'relative' }}>
            <Avatar src={`${user?.imageProfile}`} style={AvatarPic}/>
            <CameraAltIcon style={{ 
              position: 'absolute', 
              width: '30px', 
              height: '30px', 
              backgroundColor: 'white',
              color: 'grey', 
              borderRadius: '50%',
              bottom: '8px', 
              right: '8px', 
              padding: '5px',
              boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" ,
              cursor: 'pointer'
            }}/>
          </div>
          <FullName>{`${user?.name} ${user?.lastName}`}</FullName>


          <Fields>
            <div>
              <Field>
                <EmailIcon fontSize='large' sx={{ color: '#837575' }}/>
                <span style={{ marginLeft: '5px', fontSize: 'medium' }}>{ user?.mail }</span>
              </Field>

              <Field>
                <CakeIcon fontSize='large' sx={{ color: '#837575' }}/>
                <span style={{ marginLeft: '5px', fontSize: 'medium' }}>{ `${user?.birthday}` }</span>
              </Field>

              <Field>
                <LocalPhoneIcon fontSize='large' sx={{ color: '#837575' }}/>
                <span style={{ marginLeft: '5px', fontSize: 'medium', color: '#1976D2' }}>{ `${user?.phone}` }</span>
              </Field>
            </div>
          </Fields>
        </Profilecontainer>


        <Divider style={{ backgroundColor: '#E5E5E5' }} />

        <MenuItem sx={{ fontSize: '17px', marginLeft: '5px' }} onClick={handleClose}>
          <ListItemIcon>
            <ShoppingBasketIcon fontSize="medium" />
          </ListItemIcon>
          Order Buys
        </MenuItem>

        <MenuItem sx={{ fontSize: '17px', marginLeft: '5px' }} onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="medium" />
          </ListItemIcon>
          Settings
        </MenuItem>

        <MenuItem sx={{ fontSize: '17px', marginLeft: '5px' }} onClick={()=> {
          handleLogOut()
          handleClose()
        }}>
          <ListItemIcon>
            <Logout fontSize="medium" color='primary' />
          </ListItemIcon>
          Logout
        </MenuItem>

      </Menu>
    </>
  );
}