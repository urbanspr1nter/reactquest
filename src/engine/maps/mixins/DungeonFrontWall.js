import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const DungeonFrontWall = (left, top, iterations) => {
  const tileManager = new TileManager();

  const data = [];

  for (let i = 0; i < iterations; i += 1) {
    data.push({
      assetPath: Constants.Assets.Dungeon.WallTop.WallTop02,
      left: tileManager.realPos({ left: left + i, top }).left,
      top: tileManager.realPos({ left: left + i, top }).top,
      layer: 1
    });
  }

  return data;
};

export default DungeonFrontWall;
