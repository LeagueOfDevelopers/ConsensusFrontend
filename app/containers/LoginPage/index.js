import React, { Component } from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import config from 'utils/config';
import { fetchLogin } from 'containers/RegisterPage/actions';
import { Paper, withStyles, Typography, Grid, Button } from '@material-ui/core';
import InputText from 'components/InputText';
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
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const data = {
      email: this.props.email,
      password: this.props.password,
    };

    this.props.fetchLogin.start(data);
  }

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
            <InputText placeholder="Электронный адрес" name="email" />
            <InputText placeholder="Пароль" name="password" type="password" />
          </Grid>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={this.onSubmit}
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

const mapStateToProps = state => {
  const selector = formValueSelector('signIn', states => states.form);
  const email = selector(state, 'email');
  const password = selector(state, 'password');
  return { email, password };
};

const Login = reduxForm({
  form: 'signIn',
  getFormState: state => state.form,
})(LoginPage);

const LoginRedux = connect(
  mapStateToProps,
  dispatch => ({ fetchLogin: fetchLogin.bindTo(dispatch) }),
)(Login);

export default withStyles(styles)(LoginRedux);
