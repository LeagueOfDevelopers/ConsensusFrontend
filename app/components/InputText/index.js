import React, { Component } from 'react';
import { withStyles, InputBase } from '@material-ui/core';
import { Field } from 'redux-form';

const styles = () => ({
  input: {
    padding: '8px 16px',
    width: '100%',
    background: '#fafafa',
    marginTop: '8px',
    marginBottom: '8px',
    borderRadius: '5px',
    border: '#efefef 1px solid',
    height: '36px',
  },
});

const renderTextField = ({ input, placeholder, classes, type }) => (
  <InputBase
    className={classes.input}
    placeholder={placeholder}
    type={type || 'text'}
    inputProps={{
      style: { fontSize: '16px' },
    }}
    {...input}
    onChange={value => input.onChange(value)}
  />
);

class InputText extends Component {
  render() {
    const { classes, placeholder, name, type } = this.props;
    return (
      <Field
        type={type}
        name={name}
        classes={classes}
        placeholder={placeholder}
        component={renderTextField}
      />
    );
  }
}
export default withStyles(styles)(InputText);
