import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import config from 'utils/config';
import { Paper, withStyles, Typography, Grid, Button } from '@material-ui/core';
import InputText from 'components/InputText';
import { fetchRegistration } from 'containers/RegisterPage/actions';

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

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const data = {
      name: this.props.name,
      nickname: this.props.nickname,
      email: this.props.email,
      password: this.props.password,
    };

    this.props.fetchRegistration.start(data);
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
            <InputText placeholder="Имя и фамилия" name="name" />
            <InputText placeholder="Имя пользователя" name="nickname" />
            <InputText placeholder="Пароль" name="password" type="password" />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.onSubmit}
          >
            Регистрация
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
            Есть аккаунт?{' '}
            <NavLink
              to="/login"
              style={{
                color: '#3e54af',
                border: 'none',
                outline: 'none',
                padding: '0',
                textDecoration: 'none',
              }}
            >
              Войти
            </NavLink>
          </Typography>
        </Paper>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  const selector = formValueSelector('register', states => states.form);
  const name = selector(state, 'name');
  const nickname = selector(state, 'nickname');
  const email = selector(state, 'email');
  const password = selector(state, 'password');
  return { name, nickname, email, password };
};

const Register = reduxForm({
  form: 'register',
  getFormState: state => state.form,
})(RegisterPage);

const RegisterRedux = connect(
  mapStateToProps,
  dispatch => ({ fetchRegistration: fetchRegistration.bindTo(dispatch) }),
)(Register);

export default withStyles(styles)(RegisterRedux);
