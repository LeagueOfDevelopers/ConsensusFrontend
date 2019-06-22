import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import jwt from 'jsonwebtoken';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Popper from '@material-ui/core/Popper';
import ava from 'containers/AccountPage/images/3.jpg';
import {
  Avatar,
  Button,
  MenuItem,
  MenuList,
  Grow,
  ClickAwayListener,
  Paper,
} from '@material-ui/core';

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
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    const fromToken = jwt.decode(localStorage.token, { complete: true });

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
              zIndex: 1000,
            }}
          >
            <NavLink to="/" className={classes.logo}>
              <Typography variant="h5" color="inherit">
                Consensus
              </Typography>
            </NavLink>
            {localStorage.token ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <NavLink
                  to={`/account/${fromToken.payload._id}`}
                  style={{
                    color: '#000',
                    textDecoration: 'none',
                    marginRight: '1rem',
                  }}
                >
                  <Avatar style={{ backgroundColor: '#212121' }}>
                    {fromToken.payload.name[0]}
                  </Avatar>
                </NavLink>
                <IconButton
                  buttonRef={node => {
                    this.anchorEl = node;
                  }}
                  aria-owns={open ? 'menu-list-grow' : null}
                  aria-haspopup="true"
                  onClick={this.handleToggle}
                >
                  <MenuIcon color="primary" />
                </IconButton>
              </div>
            ) : (
              <div>
                <Button
                  variant="outlined"
                  onClick={() => this.props.history.push('/login')}
                  style={{ marginRight: '1rem' }}
                >
                  Вход и регистрация
                </Button>
                <IconButton
                  buttonRef={node => {
                    this.anchorEl = node;
                  }}
                  aria-owns={open ? 'menu-list-grow' : null}
                  aria-haspopup="true"
                  onClick={this.handleToggle}
                >
                  <MenuIcon color="primary" />
                </IconButton>
              </div>
            )}

            <Popper open={open} anchorEl={this.anchorEl} transition>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={this.handleClose}>
                      <MenuList>
                        <MenuItem style={{ padding: '0' }}>
                          <NavLink
                            to="/account/5d05d5d5ee5aaf259cbc4e16"
                            style={{
                              color: '#000',
                              textDecoration: 'none',
                              width: '100%',
                              height: '100%',
                              padding: '8px 16px',
                            }}
                          >
                            Дизайн
                          </NavLink>
                        </MenuItem>
                        <MenuItem style={{ padding: '0' }}>
                          <NavLink
                            to="/account/5d05d65a39e79f25a4a17519"
                            style={{
                              color: '#000',
                              textDecoration: 'none',
                              width: '100%',
                              height: '100%',
                              padding: '8px 16px',
                            }}
                          >
                            Брендбук
                          </NavLink>
                        </MenuItem>
                        <MenuItem style={{ padding: '0' }}>
                          <NavLink
                            to="/account/5d05d5aeee5aaf259cbc4e15"
                            style={{
                              color: '#000',
                              textDecoration: 'none',
                              width: '100%',
                              height: '100%',
                              padding: '8px 16px',
                            }}
                          >
                            Айдентика
                          </NavLink>
                        </MenuItem>
                        <MenuItem style={{ padding: '0' }}>
                          <NavLink
                            to="/account/5d05d62939e79f25a4a17518"
                            style={{
                              color: '#000',
                              textDecoration: 'none',
                              width: '100%',
                              height: '100%',
                              padding: '8px 16px',
                            }}
                          >
                            Логотипирование
                          </NavLink>
                        </MenuItem>
                        <MenuItem style={{ padding: '0' }}>
                          <NavLink
                            to="/account/5d09259240e14e4472ffd906"
                            style={{
                              color: '#000',
                              textDecoration: 'none',
                              width: '100%',
                              height: '100%',
                              padding: '8px 16px',
                            }}
                          >
                            Колористика и цветоведение
                          </NavLink>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const Head = withRouter(Header);

export default withStyles(styles)(Head);
