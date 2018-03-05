import React from 'react';
import { PropTypes } from 'prop-types';

export default class WinScreen extends React.Component {
  render() {
    return (
      <div className={'level-map'} id={this.props.id}>
        <div className={'player'}>
          <h1>YOU WIN! :)</h1>
        </div>
      </div>
    );
  }
}

WinScreen.propTypes = {
  id: PropTypes.any
};
