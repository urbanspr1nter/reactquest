import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const WarpTrigger = (config) => {
  const defaultConfig = Object.assign({
    left: 0,
    top: 0,
    iterations: 1,
    direction: Constants.MovementDirections.Right,
    warpTo: 'MainMap',
    startPos: {
      left: 0,
      top: 0
    }
  }, config);

  const tileManager = new TileManager();
  const data = [];

  if (defaultConfig.direction === Constants.MovementDirections.Right) {
    for (let i = defaultConfig.left; i < defaultConfig.left + defaultConfig.iterations; i += 1) {
      data.push({
        assetPath: Constants.Assets.Trigger,
        left: tileManager.realPos({ left: i, top: defaultConfig.top }).left,
        top: tileManager.realPos({ left: i, top: defaultConfig.top }).top,
        layer: 0,
        warpTo: defaultConfig.warpTo,
        playerPosition: {
          left: tileManager.realPos({
            left: defaultConfig.startPos.left + (i - defaultConfig.left),
            top: defaultConfig.startPos.top
          }).left,
          top: tileManager.realPos({
            left: defaultConfig.startPos.left + (i - defaultConfig.left),
            top: defaultConfig.startPos.top
          }).top
        }
      });
    }
  } else if (defaultConfig.direction === Constants.MovementDirections.Down) {
    for (let i = defaultConfig.top; i < defaultConfig.top + defaultConfig.iterations; i += 1) {
      data.push({
        assetPath: Constants.Assets.Trigger,
        left: tileManager.realPos({ left: defaultConfig.left, top: i }).left,
        top: tileManager.realPos({ left: defaultConfig.left, top: i }).top,
        layer: 0,
        warpTo: defaultConfig.warpTo,
        playerPosition: {
          left: tileManager.realPos({
            left: defaultConfig.startPos.left,
            top: defaultConfig.startPos.top + (i - defaultConfig.top)
          }).left,
          top: tileManager.realPos({
            left: defaultConfig.startPos.left,
            top: defaultConfig.startPos.top + (i - defaultConfig.top)
          }).top
        }
      });
    }
  }

  return data;
};

export default WarpTrigger;
