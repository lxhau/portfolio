import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, Container, CssBaseline, IconButton, Toolbar } from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito'
  },
  appbar: {
    background: `none`,
  },
  appBarTitle: {
    flexGrow: '1',
  },
  appBarWrapper: {
    width: '80%',
    margin: '0 auto'
  },
  icon: {
    color: '#FFF',
    fontSize: '2rem'
  },
  colorText: {
    color: '#fed81b'
  },
  title: {
    color: '#FFF',
    fontSize: '3.5rem'
  },
  container: {
    textAlign: 'center'
  },
  goDown: {
    color: '#FFF',
    fontSize: '4rem'
  }
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false)

  useEffect(() =>{
    setChecked(true)
  })
  return (
    <div className={classes.root}>
      {/* Toolbar */}
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
          <h1 className={classes.appBarTitle}>
            My<span className={classes.colorText}>Portfolio.</span></h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Title */}
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>

        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to
            <br />My<span className={classes.colorText}>Portfolio.</span>
          </h1>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown}/>
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
};