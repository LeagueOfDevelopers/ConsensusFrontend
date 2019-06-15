import React, { Component } from 'react';
import {
  Grid,
  CardMedia,
  withStyles,
  CardActionArea,
  Typography,
} from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import Fade from '@material-ui/core/Fade';
import DialogImage from 'components/DialogImage';
import Tab from './components/Tab';
import ava from './images/3.jpg';
import placeholder from './images/1.jpg';
import placeholder2 from './images/2.jpg';

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
    ],
  },
  {
    img: placeholder2,
    nickname: 'Колористика и цветоведение',
    likes: 3,
  },
];

class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
      closed: false,
      image: '',
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(image) {
    this.setState({ closed: !this.state.closed });
    this.setState({ image });
  }

  render() {
    const { classes } = this.props;
    const { hovered, closed, image } = this.state;
    return (
      <Grid container direction="column">
        <Grid item>
          <Tab
            ava={ava}
            name="Notan Evchiform"
            publication={1}
            nickname="teenWitch"
          />
        </Grid>
        <Grid container spacing={6}>
          {images.map(item => (
            <Grid item>
              <CardActionArea
                onClick={() => this.handleClose(item.img)}
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
                      <Favorite style={{ color: '#fff', marginRight: '5px' }} />{' '}
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
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(AccountPage);
