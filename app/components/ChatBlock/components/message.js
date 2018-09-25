import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1vh 0 1vh 0;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const Nickname = styled(Link)`
  color: #474d90;
  text-decoration: none;
  font-weight: 300;
  font-size: 24px;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 300;
`;

export default class Message extends Component {
  render() {
    return (
      <MessageWrapper>
        <Nickname to={this.props.texts.url}>
          {this.props.texts.nickname}
        </Nickname>
        {this.props.texts.text.map((item, key) => (
          <Text key={`key${key}`}>{item}</Text>
        ))}
      </MessageWrapper>
    );
  }
}

Message.propTypes = {
  texts: PropTypes.object,
  nickname: PropTypes.string,
  url: PropTypes.string,
};
