import $ from 'jquery';
import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const Gold = (left, top, value) => {
  const tileManager = new TileManager();

  return {
    top: tileManager.realPos({ left, top }).top,
    left: tileManager.realPos({ left, top }).left,
    assetPath: Constants.Assets.Gold,
    type: `${value} gold!`,
    name: `${left}-${top}-${value}-gold`,
    valid: true,
    handler: (e, component) => {
      const newPlayerState = new Map(component.state.playerState);
      newPlayerState.set('gold', newPlayerState.get('gold') + value);

      component.setState({
        logger: component.state.logger.info(`Picked up ${value} gold.`),
        playerState: newPlayerState
      }, () => {
        $(`#${left}-${top}-${value}-gold`).remove();
      });
    }
  };
};

export default Gold;
