import React, { Component } from 'react';
import {
  withStyles,
  Divider,
  Typography,
  InputBase,
  Button,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = theme => ({
  root: {
    width: 616,
    marginBottom: '2rem',
  },
  avatar: {
    width: 28,
    height: 28,
    backgroundColor: '#212121',
  },
  input: {
    padding: '8px 16px',
    width: 482,
  },
  media: {
    width: '100%',
    height: 614,
    margin: 0,
    borderRadius: '0',
    boxShadow: 'none',
    padding: '1rem',
    overflowY: 'scroll',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class PostBlock extends Component {
  state = {
    checked: false,
  };

  render() {
    const {
      classes,
      nickname,
      comments,
      likes,
      title,
      text,
      image,
    } = this.props;
    const { checked } = this.state;
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              K
            </Avatar>
          }
          action={
            <IconButton
              aria-label="Settings"
              size="small"
              style={{ marginTop: '10px', marginRight: '5px' }}
            >
              <MoreHoriz />
            </IconButton>
          }
          title={nickname}
        />
        <Divider />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Paper className={classes.media}>
            <Typography variant="h4" gutterBottom style={{textAlign: 'center'}}>
              {title}
            </Typography>
            <Typography variant="body1">{text}</Typography>
          </Paper>
        </div>
        <Divider />
        <CardActions disableSpacing style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FavoriteIcon style={{ marginRight: '10px', cursor: 'pointer' }} />
            <Typography
              variant="subtitle2"
              component="h1"
              style={{ userSelect: 'none' }}
            >
              {likes} отметок "Нравится"
            </Typography>
          </div>
        </CardActions>
        {comments ? (
          <CardContent style={{ padding: '0 16px  16px 16px' }}>
            {comments
              ? comments.map(item => (
                <Typography variant="body2">
                  <span style={{ fontWeight: 600, cursor: 'pointer' }}>
                    {item.name}
                  </span>{' '}
                  {item.comment}
                </Typography>
              ))
              : ''}
          </CardContent>
        ) : (
          ''
        )}
        <Divider />
        <InputBase
          className={classes.input}
          placeholder="Добавить коментарий..."
          inputProps={{ 'aria-label': 'Comments' }}
        />
        <Button color="primary">Опубликовать</Button>
      </Card>
    );
  }
}

export default withStyles(styles)(PostBlock);
