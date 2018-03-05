import $ from 'jquery';
import React from 'react';
import { PropTypes } from 'prop-types';
import Constants from '../system/Constants';

export default class LoseScreen extends React.Component {
  componentDidMount() {
    $('#lose-screen').fadeToggle(3000);
  }

  render() {
    return (
      <div className={'level-map'} id={this.props.id}>
        <div className={'player'}>
          <img
            alt={''}
            src={Constants.Assets.Screens.GameOver}
            style={
              {
                width: '816px',
                height: '816px'
              }
           }
          />
        </div>
      </div>
    );
  }
}

LoseScreen.propTypes = {
  id: PropTypes.isRequired
};
