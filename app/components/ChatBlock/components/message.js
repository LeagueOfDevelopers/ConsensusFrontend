import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MessageWrapper = styled.li`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  min-height: 48px;
`;

const Nickname = styled(NavLink)`
  color: #474d90;
  text-decoration: none;
  font-weight: 300;
  font-size: 24px;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 300;
`;

/* eslint-disable */

export default class Message extends Component { 
  constructor(props){
    super(props);
    this.state = {
      url: props.url || '/'
    }
  }
  render() {
    return (
      <MessageWrapper>
        <Nickname to={this.state.url}>
          {this.props.nickname}
        </Nickname>
          <Text>{this.props.text}</Text> 
      </MessageWrapper>
    );
  }
}

Message.propTypes = {
  texts: PropTypes.object,
  nickname: PropTypes.string,
  url: PropTypes.string,
};
