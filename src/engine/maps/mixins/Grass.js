import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const Grass = (config) => {
  const defaultConfig = Object.assign({
    startPos: {
      left: 0,
      top: 0
    },
    endPos: {
      left: 0,
      top: 0
    }
  }, config);

  const tileManager = new TileManager();
  const data = [];

  for (let i = defaultConfig.startPos.left; i <= defaultConfig.endPos.left; i += 1) {
    for (let j = defaultConfig.startPos.top; j <= defaultConfig.endPos.top; j += 1) {
      data.push({
        assetPath: Constants.Assets.Grass,
        left: tileManager.realPos({ left: i, top: j }).left,
        top: tileManager.realPos({ left: i, top: j }).top,
        layer: 0
      });
    }
  }

  return data;
};

export default Grass;
