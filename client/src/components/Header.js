import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';
import TimelineIcon from '@mui/icons-material/Timeline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position='static'>
      <Container maxWidth='sm'>
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          <Button>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
              <Typography sx={{ color: 'white', display: 'flex' }}>
                <TimelineIcon sx={{ mr: 1 }} /> Metrics
              </Typography>
            </NavLink>
          </Button>
          <Box sx={{ flex: 1 }}></Box>
          <Button>
            <NavLink to='/settings' className={({ isActive }) => (isActive ? 'active' : '')}>
              <SettingsIcon sx={{ color: 'white', display: 'block' }} />
            </NavLink>
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Header;
