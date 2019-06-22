import React, { Component } from 'react';
import {
  Grid,
  CardMedia,
  withStyles,
  CardActionArea,
  Typography,
} from '@material-ui/core';
import { withRouter } from 'react-router';
import Favorite from '@material-ui/icons/Favorite';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchUser } from 'containers/AccountPage/actions';
import DialogImage from 'components/DialogImage';
import { createStructuredSelector } from 'reselect';
import Tab from './components/Tab';
import placeholder from './images/1.jpg';
import placeholder2 from './images/13.jpg';
import { makeUserSelector } from './selectors';

const styles = () => ({
  media: {
    width: 293,
    height: 293,
  },
});

const images = [
  {
    img: placeholder,
    nickname: 'Колористика и цветоведение',
    likes: 8,
    comments: [
      {
        name: 'Faith',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
      {
        name: 'Faith',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
    ],
  },
  {
    img: placeholder2,
    nickname: 'Колористика и цветоведение',
    likes: 12930,
  },
];

class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
      closed: false,
      image: '',
      nickname: '',
      comments: [],
    };
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser.start(this.props.location.pathname.split(/\//)[2]);
  }

  handleClose(image, nickname, comments) {
    this.setState({ closed: !this.state.closed });
    this.setState({ image, nickname, comments });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.fetchUser.start(this.props.location.pathname.split(/\//)[2]);
    }
  }

  render() {
    const { classes, user } = this.props;
    const { hovered, closed, image, nickname, comments } = this.state;

    return (
      <Grid container direction="column">
        {user !== null ? (
          <div>
            <Grid item>
              <Tab
                // ava={ava}
                handleDialog={this.handleDialog}
                name={user.name}
                publication={user.postIds.length}
                nickname={user.nickname}
              />
            </Grid>
            <Grid container spacing={6}>
              {images.map(item => (
                <Grid item>
                  <CardActionArea
                    onClick={() =>
                      this.handleClose(item.img, item.nickname, item.comments)
                    }
                    onMouseEnter={() => this.setState({ hovered: true })}
                    onMouseLeave={() => this.setState({ hovered: false })}
                  >
                    <Fade in={hovered}>
                      <div
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: '10000',
                        }}
                      >
                        <Typography
                          variant="h6"
                          style={{
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <Favorite
                            style={{ color: '#fff', marginRight: '5px' }}
                          />{' '}
                          {item.likes}
                        </Typography>
                      </div>
                    </Fade>
                    <CardMedia className={classes.media} image={item.img} />
                  </CardActionArea>
                </Grid>
              ))}
            </Grid>
            <DialogImage
              closed={closed}
              handleClose={this.handleClose}
              image={image}
              nickname={nickname}
              comments={comments}
            />
          </div>
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          >
            <CircularProgress />
          </div>
        )}
      </Grid>
    );
  }
}

const styled = withStyles(styles)(AccountPage);

const mapStateToProps = () =>
  createStructuredSelector({
    user: makeUserSelector(),
  });

export default connect(
  mapStateToProps,
  dispatch => ({ fetchUser: fetchUser.bindTo(dispatch) }),
)(withRouter(styled));
