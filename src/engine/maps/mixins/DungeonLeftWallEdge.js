import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const DungeonLeftWallEdge = (left, top, iterations) => {
  const tileManager = new TileManager();
  const data = [];

  for (let i = top; i < top + iterations; i += 1) {
    data.push({
      assetPath: Constants.Assets.Dungeon.WallEdge.Left,
      left: tileManager.realPos({ left, top: i }).left,
      top: tileManager.realPos({ left, top: i }).top,
      layer: 1
    });
  }

  return data;
};

export default DungeonLeftWallEdge;
