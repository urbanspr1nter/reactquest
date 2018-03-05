import React from 'react';
import { PropTypes } from 'prop-types';

export default class Player extends React.Component {
  render() {
    return (
      <div
        className={'player-sprite-container'}
        style={
        {
          marginTop: `${this.props.top}px`,
          marginLeft: `${this.props.left}px`,
          position: 'absolute'
        }
      }
      >
        <img alt={''} src={this.props.assetPath} />
      </div>
    );
  }
}

Player.propTypes = {
  assetPath: PropTypes.any,
  top: PropTypes.any,
  left: PropTypes.any
};
