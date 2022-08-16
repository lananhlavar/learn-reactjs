import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import { Link, NavLink } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Register from '../../features/Auth/components/Register';
import { Close } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

import Login from './../../features/Auth/components/Login/index';
import { useDispatch, useSelector } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { logout } from 'features/Auth/userSlice';

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};
export default function Header() {
  const dispatch = useDispatch()
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleLogoutClick = () => {
    const action = logout()
    dispatch(action)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon sx={{ mr: 2 }} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
              Lan Anh Shop
            </Link>
          </Typography>
          <NavLink to="/todos" style={{ color: 'white', textDecoration: 'none' }}>
            <Button sx={{color: '#fff'}} >Todos </Button>
          </NavLink>

          <NavLink to="/albums" style={{ color: 'white', textDecoration: 'none' }}>
            <Button sx={{ color: '#fff'}}>Albums</Button>
          </NavLink>
          {!isLoggedIn && (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          )}

          {isLoggedIn && (
            <IconButton color="inherit" onClick={handleUserClick}>
              <AccountCircleIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Menu keepMounted  anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <IconButton
          sx={{ position: 'absolute', right: 2, paddingTop: 1, paddingRight: 1, color: 'grey' }}
          onClick={handleClose}
        >
          <Close />
        </IconButton> 
        <DialogContent sx={{ marginTop: 4 }}>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />

              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  ALready have an account .Login here
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />

              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Don't have an account .Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
