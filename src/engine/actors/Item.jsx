import React from 'react';
import { PropTypes } from 'prop-types';

export default class Item extends React.Component {
  render() {
    return (
      <div className={`${this.props.className} item-sprite-container`}>
        <img
          alt={''}
          src={this.props.assetPath}
          style={
          {
            marginTop: this.props.top,
            marginLeft: this.props.left,
            position: 'absolute'
          }
        }
        />
      </div>
    );
  }
}

Item.propTypes = {
  assetPath: PropTypes.any,
  top: PropTypes.any,
  left: PropTypes.any,
  className: PropTypes.any
};
