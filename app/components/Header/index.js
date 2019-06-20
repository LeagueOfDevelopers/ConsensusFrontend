import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchInput from 'components/SearchInput';
import { withStyles } from '@material-ui/core/styles';

import ava from 'containers/AccountPage/images/3.jpg';
import { Avatar, Button } from '@material-ui/core';

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
    width: 193,
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
            {localStorage.name ? (
              <NavLink
                to={`/account/${localStorage.id}`}
                style={{ color: '#000', textDecoration: 'none' }}
              >
                <Avatar style={{ backgroundColor: '#212121' }}>
                  {localStorage.name[0]}
                </Avatar>
              </NavLink>
            ) : (
              <Button
                variant="outlined"
                onClick={() => this.props.history.push('/login')}
              >
                Вход и регистрация
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const Head = withRouter(Header);

export default withStyles(styles)(Head);
