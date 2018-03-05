import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const DungeonWallEndRight = (left, top) => {
  const tileManager = new TileManager();

  const data = [
    {
      assetPath: Constants.Assets.Dungeon.WallTop.WallTop03,
      left: tileManager.realPos({ left, top }).left,
      top: tileManager.realPos({ left, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.WallTop.WallTop06,
      left: tileManager.realPos({ left, top: top + 1 }).left,
      top: tileManager.realPos({ left, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.WallEnd.WallEnd03,
      left: tileManager.realPos({ left, top: top + 2 }).left,
      top: tileManager.realPos({ left, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.WallEnd.WallEnd06,
      left: tileManager.realPos({ left, top: top + 3 }).left,
      top: tileManager.realPos({ left, top: top + 3 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.WallEnd.WallEnd09,
      left: tileManager.realPos({ left, top: top + 3 }).left,
      top: tileManager.realPos({ left, top: top + 3 }).top,
      layer: 1
    }
  ];

  return data;
};

export default DungeonWallEndRight;
