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
import Logout from '@mui/icons-material/Logout';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import { useNavigate } from 'react-router-dom';

export default function AccountMenu({ avatar, fullName }: { avatar: string, fullName: string }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handleLogOut(){
    await signOut(auth);
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="large"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }} src={avatar} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            width: '300px',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
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
        <MenuItem sx={{ fontSize: '19px', marginLeft: '2px' }} onClick={()=> navigate('/profile')}>
          <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', textTransform: 'capitalize' }}>
            <Avatar src={avatar}/>
            <span style={{ marginLeft: '10px' }}>{ fullName }</span>
          </div>
        </MenuItem>

        <Divider />

        <MenuItem sx={{ fontSize: '17px', marginLeft: '5px'}}>
          <ListItemIcon>
            <ShoppingBasketIcon fontSize="medium" />
          </ListItemIcon>
          Order Buys
        </MenuItem>

        <MenuItem sx={{ fontSize: '17px', marginLeft: '5px'}}>
          <ListItemIcon>
            <Settings fontSize="medium"/>
          </ListItemIcon>
          Settings
        </MenuItem>

        <MenuItem sx={{ fontSize: '17px', marginLeft: '5px'}} onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="medium" color='primary'/>
          </ListItemIcon>
          Logout
        </MenuItem>

      </Menu>
    </>
  );
}