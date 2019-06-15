import React, { Component } from 'react';
import {
  Paper,
  withStyles,
  Typography,
  InputBase,
  Grid,
  Button,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const styles = () => ({
  root: {
    width: 616,
    padding: '2rem',
    marginBottom: '2rem',
  },
  logo: {
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: '36px',
  },
  input: {
    padding: '8px 16px',
    width: '100%',
    background: '#fafafa',
    marginTop: '8px',
    marginBottom: '8px',
    borderRadius: '5px',
    border: '#efefef 1px solid',
    height: '36px',
  },
});

class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ marginBottom: '2rem' }}
      >
        <Paper className={classes.root}>
          <Typography
            variant="h3"
            className={classes.logo}
            style={{ marginBottom: '4rem' }}
          >
            Consensus
          </Typography>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ marginBottom: '2rem' }}
          >
            <InputBase
              className={classes.input}
              placeholder="Электронный адрес"
              inputProps={{
                'aria-label': 'e-mail',
                style: { fontSize: '16px' },
              }}
            />
            <InputBase
              className={classes.input}
              placeholder="Пароль"
              inputProps={{
                'aria-label': 'password',
                style: { fontSize: '16px' },
              }}
            />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Войти
          </Button>
        </Paper>
        <Paper
          className={classes.root}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="display2" style={{ textAlign: 'center' }}>
            Еще нет аккаунта?{' '}
            <NavLink
              to="/register"
              style={{
                color: '#3e54af',
                border: 'none',
                outline: 'none',
                padding: '0',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              Зарегистрируйтесь
            </NavLink>
          </Typography>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(LoginPage);
