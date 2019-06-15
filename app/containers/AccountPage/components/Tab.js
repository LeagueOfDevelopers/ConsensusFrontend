import React, { Component } from 'react';
import {
  withStyles,
  Avatar,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';

const styles = () => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '60px',
  },
  avatar: {
    width: 150,
    height: 150,
  },
  profile: {
    display: 'box',
  },
});

class Tab extends Component {
  render() {
    const { classes, ava, name, publication, nickname } = this.props;
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
              marginBottom: '0.5rem',
            }}
          >
            <Typography variant="h5" style={{ marginRight: '1rem' }}>
              {name}
            </Typography>
            <Button variant="outlined" className={classes.button}>
              Редактировать профиль
            </Button>
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <Typography
              variant="h6"
              style={{
                marginRight: '10px',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              {publication}
              <Typography variant="subtitle1" style={{ marginLeft: '5px' }}>
                публикация
              </Typography>
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              height: '40px',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="subtitle1"
              style={{
                marginRight: '10px',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              {nickname}
            </Typography>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Tab);
