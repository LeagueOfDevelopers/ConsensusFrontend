import React, { Component } from 'react';
import { withStyles, Dialog, CardMedia, Paper } from '@material-ui/core';

const styles = () => ({
  media: {
    width: 600,
    height: 600,
  },
  paper: {
    height: 600,
    width: 335,
  },
});

class DialogImage extends Component {
  render() {
    const { classes, closed, handleClose, image } = this.props;

    return (
      <Dialog open={closed} onClose={handleClose} style={{ zIndex: 100000 }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <CardMedia image={image} className={classes.media} />
          <Paper className={classes.paper} />
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(DialogImage);
