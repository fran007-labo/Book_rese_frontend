import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FirebaseAuth, MenuButton } from '../Index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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