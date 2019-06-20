import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import authProviderSaga from 'containers/RegisterPage/sagas';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from 'components/Header';
import GlobalStyle from '../../global-styles';
import RegisterPage from '../RegisterPage';
import LoginPage from '../LoginPage';
import AccountPage from '../AccountPage';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiDialog: {
      paper: {
        maxWidth: '100% !important',
      },
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '60px',
            paddingBottom: '60px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '980px',
            }}
          >
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/account/:id" component={AccountPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
        <GlobalStyle />
      </MuiThemeProvider>
    );
  }
}

const withSaga = authProviderSaga.map(saga =>
  injectSaga({ key: saga.name, saga }),
);

const AppI = compose(
  withSaga[0],
  withSaga[1],
)(App);

export default withRouter(AppI);
