import React from 'react';
import PropTypes from 'prop-types';
import Constants from '../../../system/Constants';
import Player from '../../../actors/Player';
import Item from '../../../actors/Item';

export default class DungeonF1South extends React.Component {
  render() {
    let i = 0;
    let j = 0;
    let k = 0;
    return (
      <div className={'level-map'} id={this.props.id}>
        <div className={'player'}>
          <Player
            assetPath={Constants.Assets.Hero}
            left={this.props.playerPosition.left}
            top={this.props.playerPosition.top}
          />
        </div>
        {this.props.environmentLocations.map((e) => {
          i += 1;
          return (
            <div key={i}>
              <Item
                assetPath={e.assetPath}
                left={e.left}
                top={e.top}
              />
            </div>
          );
        })}
        {this.props.itemLocations.map((e) => {
          j += 1;
          if (!e.valid) {
            return (<div key={j} className={'item'} />);
          }
          return (
            <div key={j} className={'item'} id={e.name}>
              <Item
                assetPath={e.assetPath}
                left={e.left}
                top={e.top}
              />
            </div>
          );
        })}
        {this.props.monsters.map((e) => {
          k += 1;
          return (
            <div key={k}>
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

DungeonF1South.propTypes = {
  id: PropTypes.any,
  playerPosition: PropTypes.any,
  environmentLocations: PropTypes.any,
  itemLocations: PropTypes.any,
  monsters: PropTypes.any
};
