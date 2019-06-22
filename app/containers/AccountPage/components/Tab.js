import React, { Component } from 'react';
import {
  withStyles,
  Avatar,
  Grid,
  Typography,
  Button,
  IconButton,
  Dialog,
  Divider,
  TextField,
  Paper,
} from '@material-ui/core';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import Settings from '@material-ui/icons/Settings';
import { fetchLogout } from 'containers/RegisterPage/actions';

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
    backgroundColor: '#212121',
  },
  profile: {
    display: 'box',
  },
});

class Tab extends Component {
  state = {
    dialoged: false,
    addNew: false,
    edited: false,
  };

  render() {
    const { classes, ava, name, publication, nickname } = this.props;
    const fromToken = jwt.decode(localStorage.token, { complete: true })
      .payload;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={6} sm={3}>
          <Avatar className={classes.avatar}>{nickname[0]}</Avatar>
        </Grid>
        <Grid xs={7} item>
          <div
            style={{
              display: 'flex',
              height: '40px',
              alignItems: 'center',
              marginBottom: '0.5rem',
            }}
          >
            <Typography variant="h5" style={{ marginRight: '1rem' }}>
              {nickname}
            </Typography>
            {fromToken.name === name ? (
              <div>
                <Button
                  variant="outlined"
                  className={classes.button}
                  style={{ marginRight: '1rem' }}
                  onClick={() =>
                    this.setState({
                      edited: !this.state.edited,
                    })
                  }
                >
                  Редактировать профиль
                </Button>
                <IconButton
                  onClick={() =>
                    this.setState({ dialoged: !this.state.dialoged })
                  }
                >
                  <Settings style={{ color: '#000' }} />
                </IconButton>
              </div>
            ) : (
              ''
            )}
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
                публикаци{publication === 0 ? 'й' : 'я'}
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
              {name}
            </Typography>
          </div>
        </Grid>
        <Dialog
          onClose={() => this.setState({ dialoged: !this.state.dialoged })}
          open={this.state.dialoged}
        >
          <Button
            variant="outlined"
            style={{
              width: '400px',
              height: '48px',
              border: 'none',
              borderRadius: '0',
              fontWeight: 400,
            }}
            onClick={() =>
              this.setState({
                addNew: !this.state.addNew,
                dialoged: !this.state.dialoged,
              })
            }
          >
            Добавить публикацию
          </Button>
          <Divider />
          <Button
            variant="outlined"
            style={{
              width: '400px',
              height: '48px',
              border: 'none',
              borderRadius: '0',
              fontWeight: 400,
            }}
            onClick={() => this.props.fetchLogout.start()}
          >
            Выйти
          </Button>
          <Divider />
          <Button
            variant="outlined"
            style={{
              width: '400px',
              height: '48px',
              border: 'none',
              borderRadius: '0',
              fontWeight: 400,
            }}
            onClick={() => this.setState({ dialoged: !this.state.dialoged })}
          >
            Отмена
          </Button>
        </Dialog>

        <Dialog
          onClose={() =>
            this.setState({
              addNew: !this.state.addNew,
              dialoged: !this.state.dialoged,
            })
          }
          open={this.state.addNew}
        >
          <input
            accept="image/*"
            className={classes.input}
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="raised"
              component="span"
              style={{
                width: '400px',
                height: '48px',
                border: 'none',
                borderRadius: '0',
                fontWeight: 400,
              }}
            >
              Загрузить с компьютера
            </Button>
          </label>
          <Divider />
          <Button
            variant="outlined"
            style={{
              width: '400px',
              height: '48px',
              border: 'none',
              borderRadius: '0',
              fontWeight: 400,
            }}
            onClick={() =>
              this.setState({
                addNew: !this.state.addNew,
                dialoged: !this.state.dialoged,
              })
            }
          >
            Отмена
          </Button>
        </Dialog>
        <Dialog
          open={this.state.edited}
          onClose={() =>
            this.setState({
              edited: !this.state.edited,
            })
          }
        >
          <Paper
            style={{
              width: '500px',
              height: '600px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h4" style={{ textAlign: 'center' }}>
              Редактирование профиля
            </Typography>
            <Divider />
            <TextField
              id="outlined-name"
              label="Электронный адрес"
              variant="outlined"
              defaultValue={localStorage.email}
              style={{ width: '100%' }}
            />
            <TextField
              id="outlined-name"
              label="Имя Фамилия"
              variant="outlined"
              defaultValue={localStorage.name}
              style={{ width: '100%' }}
            />
            <TextField
              id="outlined-name"
              label="Имя пользователя"
              variant="outlined"
              defaultValue={localStorage.nickname}
              style={{ width: '100%' }}
            />
            <TextField
              type="password"
              id="outlined-name"
              label="Новый пароль"
              variant="outlined"
              style={{ width: '100%' }}
            />
            <TextField
              type="password"
              id="outlined-name"
              label="Повторите пароль"
              variant="outlined"
              style={{ width: '100%' }}
            />
            <Divider />
            <Button
              variant="outlined"
              style={{
                width: '100%',
                height: '48px',
              }}
            >
              Изменить
            </Button>
            <Button
              variant="outlined"
              style={{
                width: '100%',
                height: '48px',
              }}
              onClick={() =>
                this.setState({
                  edited: !this.state.edited,
                })
              }
            >
              Отмена
            </Button>
          </Paper>
        </Dialog>
      </Grid>
    );
  }
}

const styled = withStyles(styles)(Tab);

export default connect(
  () => ({}),
  dispatch => ({ fetchLogout: fetchLogout.bindTo(dispatch) }),
)(styled);
