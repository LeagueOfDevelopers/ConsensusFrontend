import React, { Component } from 'react';
import { withStyles, InputBase } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';

const styles = () => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 200,
    height: 30,
    background: '#fafafa',
    'box-shadow': 'none',
    border: '#dbdbdb 1px solid',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

class SearchInput extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Поиск"
          inputProps={{ 'aria-label': 'Search' }}
        />
        <SearchIcon style={{ color: '#a2a2a2' }} />
      </Paper>
    );
  }
}

export default withStyles(styles)(SearchInput);
