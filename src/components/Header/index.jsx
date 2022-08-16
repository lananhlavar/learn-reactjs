import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import { Link, NavLink } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Register from '../../features/Auth/components/Register';

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon  sx={{ mr: 2 }} />

          <Typography  variant="h6" component="div"  sx={{ flexGrow: 1 }}>
            <Link  to="/">Lan Anh Shop</Link>
          </Typography>
          <NavLink to="/todos">

          <Button sx={{color: '#fff', textDecoration: 'none'}}>Todos </Button>
          </NavLink>

          <NavLink to="/albums">

          <Button sx={{color: '#fff', textDecoration: 'none'}}>Albums</Button>
          </NavLink>
          
          <Button color="inherit" onClick={handleClickOpen}>Register</Button>
        </Toolbar>
      </AppBar>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogContent>

          <DialogContentText>
            <Register/>
          </DialogContentText>

        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>

      </Dialog>
    </Box>
  );
}
