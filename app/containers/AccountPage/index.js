import React, { Component } from 'react';
import {
  withStyles,
  Avatar,
  Grid,
  Typography,
  Button,
  Divider,
} from '@material-ui/core';
import ava from './images/3.jpg';

const styles = () => ({
  root: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
  },
  profile: {
    display: 'box',
  },
});

class AccountPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={6} sm={3}>
          <Avatar src={ava} className={classes.avatar} />
        </Grid>
        <Grid xs={6} item>
          <div
            style={{
              display: 'flex',
              height: '40px',
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            <Typography variant="h5" style={{ marginRight: '1rem' }}>
              Notan Evchiform
            </Typography>
            <Button variant="outlined" className={classes.button}>
              Редактировать профиль
            </Button>
          </div>
          <div>
            <Typography
              variant="h6"
              style={{
                marginRight: '10px',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              1{' '}
              <Typography variant="subtitle1" style={{ marginLeft: '5px' }}>
                публикация
              </Typography>
            </Typography>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AccountPage);
