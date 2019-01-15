import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpvSession from 'openvidu-react';
import Slider from './components/slider';
import { PlayerBlockWrapper } from './styles';

class PlayerBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  render() {
    const { width } = this.props;
    const { show } = this.state;
    return (
      <PlayerBlockWrapper
        onMouseEnter={() => this.setState({ show: true })}
        onMouseLeave={() => this.setState({ show: false })}
      >
        {/* <OpvSession
          id="opv-session"
          sessionName={localStorage.id_session}
          user="deviantkun"
          openviduServerUrl="wss://openvidu.lod-misis.ru?sessionId=fwvg2zvunrz1ljt0&token=qssdzftam8s42yiu&role=PUBLISHER"
          joinSession={() => ({})}
          leaveSession={() => ({})}
          error={() => ({})}
        /> */}
        <Slider
          width={width}
          isPlaying
          talking="Pynya"
          round="1"
          time="12:30"
          show={show}
        />
      </PlayerBlockWrapper>
    );
  }
}

PlayerBlock.propTypes = {
  width: PropTypes.string,
};

export default PlayerBlock;
