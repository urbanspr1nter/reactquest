import React from 'react';
import { PropTypes } from 'prop-types';
import Constants from '../system/Constants';
import Player from '../actors/Player';
import Item from '../actors/Item';

export default class BuildingInterior extends React.Component {
  render() {
    let i = 0;
    let j = 0;
    return (
      <div className={'level-map'} id={this.props.id}>
        <div className={'player'}>
          <Player
            assetPath={Constants.Assets.Hero}
            left={this.props.playerPosition.left}
            top={this.props.playerPosition.top}
          />
        </div>
        {this.props.itemLocations.map((e) => {
          i += 1;
          if (!e.valid) {
            return (<div key={i} className={'item'} />);
          }
          return (
            <div key={i} className={'item'} id={e.name}>
              <Item
                assetPath={e.assetPath}
                left={e.left}
                top={e.top}
              />
            </div>
          );
        })}
        {this.props.environmentLocations.map((e) => {
          j += 1;
          return (
            <div key={j}>
              <Item
                assetPath={e.assetPath}
                left={e.left}
                top={e.top}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

BuildingInterior.propTypes = {
  id: PropTypes.isRequired,
  playerPosition: PropTypes.isRequired,
  itemLocations: PropTypes.isRequired,
  environmentLocations: PropTypes.isRequired
};
