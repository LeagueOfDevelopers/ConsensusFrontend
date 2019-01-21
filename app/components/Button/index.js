import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ButtonWrapper } from './styles';

const Button = ({
  isTransparent,
  type,
  onClick,
  text,
  isRed,
  w,
  h,
  right,
  isNotValid,
  style,
}) => (
  <ButtonWrapper
    isTransparent={isTransparent}
    type={type}
    onClick={onClick}
    isRed={isRed}
    h={h}
    w={w}
    right={right}
    style={({ width: w }, style)}
    isValid={isNotValid}
  >
    <span style={{ display: 'inline-block' }}>{text}</span>
  </ButtonWrapper>
);

Button.propTypes = {
  isTransparent: PropTypes.bool,
  isRed: PropTypes.bool,
  isNotValid: PropTypes.bool,
  w: PropTypes.string,
  h: PropTypes.string,
  style: PropTypes.string,
  right: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default withRouter(Button);
