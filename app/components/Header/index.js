import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchInput from 'components/SearchInput';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    'box-shadow': 'none',
    background: '#fff',
    height: '5rem',
    borderBottom: '#e6e6e6 1px solid',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    color: '#000',
    textDecoration: 'none',
  },
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar
            style={{
              height: '5rem',
              width: '980px',
              display: 'flex',
              justifyContent: 'space-between',
              padding: 0,
            }}
          >
            <NavLink to="/" className={classes.logo}>
              <Typography variant="h5" color="inherit">
                Consensus
              </Typography>
            </NavLink>
            <SearchInput />
            <NavLink to="/account" style={{ color: '#000' }}>
              <AccountCircle fontSize="large" />
            </NavLink>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
