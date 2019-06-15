import React, { Component } from 'react';
import { Divider, Grid, CardMedia, withStyles } from '@material-ui/core';
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
  { image: placeholder2 },
  { image: placeholder },
  { image: placeholder2 },
  { image: placeholder },
];

class AccountPage extends Component {
  render() {
    const { classes } = this.props;
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
              <CardMedia
                className={classes.media}
                image={item.image}
                title=""
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AccountPage);
