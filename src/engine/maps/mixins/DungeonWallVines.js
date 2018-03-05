import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const DungeonWallVines = (left, top) => {
  const tileManager = new TileManager();

  const data = [
    {
      assetPath: Constants.Assets.Dungeon.Vines.Vines01,
      left: tileManager.realPos({ left, top }).left,
      top: tileManager.realPos({ left, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.Vines.Vines02,
      left: tileManager.realPos({ left, top: top + 1 }).left,
      top: tileManager.realPos({ left, top: top + 1 }).top,
      layer: 1
    },
  ];

  return data;
};

export default DungeonWallVines;
