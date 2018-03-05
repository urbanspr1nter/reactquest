import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const DungeonWallEnd = (left, top) => {
  const tileManager = new TileManager();

  const data = [
    {
      assetPath: Constants.Assets.Dungeon.WallEnd.WallEnd01,
      left: tileManager.realPos({ left, top }).left,
      top: tileManager.realPos({ left, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.WallEnd.WallEnd02,
      left: tileManager.realPos({ left: left + 1, top }).left,
      top: tileManager.realPos({ left: left + 1, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.WallEnd.WallEnd03,
      left: tileManager.realPos({ left: left + 2, top }).left,
      top: tileManager.realPos({ left: left + 2, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.WallEnd.WallEnd04,
      left: tileManager.realPos({ left, top: top + 1 }).left,
      top: tileManager.realPos({ left, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.WallEnd.WallEnd05,
      left: tileManager.realPos({ left: left + 1, top: top + 1 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.WallEnd.WallEnd06,
      left: tileManager.realPos({ left: left + 2, top: top + 1 }).left,
      top: tileManager.realPos({ left: left + 2, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.WallEnd.WallEnd07,
      left: tileManager.realPos({ left, top: top + 2 }).left,
      top: tileManager.realPos({ left, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.WallEnd.WallEnd08,
      left: tileManager.realPos({ left: left + 1, top: top + 2 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.WallEnd.WallEnd09,
      left: tileManager.realPos({ left: left + 2, top: top + 2 }).left,
      top: tileManager.realPos({ left: left + 2, top: top + 2 }).top,
      layer: 1
    }
  ];

  return data;
};

export default DungeonWallEnd;
