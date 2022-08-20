import React from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FirebaseAuth, MenuButton } from '../Index';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuButton />
          </div>
          <Typography variant="h6" className={classes.title}>
            <Box textAlign="left">Sample</Box>
          </Typography>
          <FirebaseAuth /> 
        </Toolbar>
      </AppBar>
    </div>
  );
}