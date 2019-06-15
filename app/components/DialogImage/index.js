import React, { Component } from 'react';
import {
  withStyles,
  Dialog,
  CardMedia,
  Paper,
  CardHeader,
  Avatar,
  Divider,
  IconButton,
  InputBase,
  Button,
  Typography,
} from '@material-ui/core';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import ava from 'containers/AccountPage/images/3.jpg';

const styles = () => ({
  media: {
    width: 600,
    height: 600,
  },
  paper: {
    height: 600,
    width: 335,
  },
  input: {
    padding: '8px 16px',
    width: 202,
    fontSize: 14,
  },
  button: {
    fontSize: 14,
  },
});

class DialogImage extends Component {
  render() {
    const { classes, closed, handleClose, image, nickname,comments } = this.props;

    return (
      <Dialog open={closed} onClose={handleClose} style={{ zIndex: 100000 }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <CardMedia image={image} className={classes.media} />
          <Paper className={classes.paper}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="Recipe"
                  className={classes.avatar}
                  src={ava}
                />
              }
              action={
                <IconButton
                  aria-label="Settings"
                  size="small"
                  style={{ marginTop: '14px', marginRight: '5px' }}
                >
                  <MoreHoriz />
                </IconButton>
              }
              title={nickname}
            />
            <Divider />

            {comments
              ? comments.map(item => (
                <Typography variant="body2" style={{margin: '8px 16px'}}>
                  <span style={{ fontWeight: 600, cursor: 'pointer' }}>
                    {item.name}
                  </span>{' '}
                  {item.comment}
                </Typography>
              ))
              : ''}
              {comments ? <Divider /> : ""}

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <InputBase
                className={classes.input}
                placeholder="Добавить коментарий..."
                inputProps={{ 'aria-label': 'Comments' }}
              />
              <Button color="primary" className={classes.button}>
                Опубликовать
              </Button>
            </div>
          </Paper>
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(DialogImage);
