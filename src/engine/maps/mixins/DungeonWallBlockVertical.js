import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const DungeonWallBlockVertical = (left, top) => {
  const tileManager = new TileManager();

  const data = [
    {
      assetPath: Constants.Assets.Dungeon.WallTop.WallTop02,
      left: tileManager.realPos({ left, top }).left,
      top: tileManager.realPos({ left, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.WallTop.WallTop05,
      left: tileManager.realPos({ left, top: top + 1 }).left,
      top: tileManager.realPos({ left, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.WallEnd.WallEnd02,
      left: tileManager.realPos({ left, top: top + 2 }).left,
      top: tileManager.realPos({ left, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.WallEnd.WallEnd04,
      left: tileManager.realPos({ left, top: top + 3 }).left,
      top: tileManager.realPos({ left, top: top + 3 }).top,
      layer: 1
    },
  ];

  return data;
};

export default DungeonWallBlockVertical;
