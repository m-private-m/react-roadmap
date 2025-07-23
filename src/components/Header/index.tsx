import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            XXX
          </Typography>
          <Button color="inherit">About</Button>
            <Button color="inherit">Portfolio</Button>
              <Button color="inherit">Social</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}