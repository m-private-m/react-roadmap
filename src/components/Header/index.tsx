import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type Item={
 label:string,
    onClick:()=>void
}
type Props={
  title:string,
   items:Item[]
}

export default function Header({
  title,
items
}:Props) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {items.map((item)=>
            <Button color="inherit" onClick={item.onClick()}>{item.label}</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}