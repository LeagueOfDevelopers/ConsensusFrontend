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
import CardMedia from '@material-ui/core/CardMedia';
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
  },
  input: {
    padding: '8px 16px',
    width: 482,
  },
  media: {
    width: '100%',
    height: 614,
    margin: 0,
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
  render() {
    const { classes, nickname, comments, likes, ava, image } = this.props;
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar} src={ava} />
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
        <CardMedia className={classes.media} image={image} title="" />
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
