import $ from 'jquery';
import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';
import PlayerAttributeHandler from '../../actors/PlayerAttributeHandler';

const Potion = (left, top, value) => {
  const tileManager = new TileManager();

  return {
    top: tileManager.realPos({ left, top }).top,
    left: tileManager.realPos({ left, top }).left,
    assetPath: Constants.Assets.Potion,
    type: `${value} potion!`,
    name: `${left}-${top}-${value}-potion`,
    valid: true,
    handler: (e, component) => {
      const playerAttributeHandler = new PlayerAttributeHandler();
      const newPlayerState = playerAttributeHandler.addToInventory('potions', value, component.state.playerState);

      component.setState({
        logger: component.state.logger.info(`Picked up ${value} potion.`),
        playerState: newPlayerState
      }, () => {
        $(`#${left}-${top}-${value}-potion`).remove();
      });
    }
  };
};

export default Potion;
