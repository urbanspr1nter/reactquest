import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const DungeonBackWall = (left, top) => {
  const tileManager = new TileManager();

  const data = [
    {
      assetPath: Constants.Assets.Dungeon.BackWall.BackWall01,
      left: tileManager.realPos({ left, top }).left,
      top: tileManager.realPos({ left, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.BackWall.BackWall02,
      left: tileManager.realPos({ left: left + 1, top }).left,
      top: tileManager.realPos({ left: left + 1, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.BackWall.BackWall03,
      left: tileManager.realPos({ left: left + 2, top }).left,
      top: tileManager.realPos({ left: left + 2, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.BackWall.BackWall04,
      left: tileManager.realPos({ left, top: top + 1 }).left,
      top: tileManager.realPos({ left, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.BackWall.BackWall05,
      left: tileManager.realPos({ left: left + 1, top: top + 1 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.BackWall.BackWall06,
      left: tileManager.realPos({ left: left + 2, top: top + 1 }).left,
      top: tileManager.realPos({ left: left + 2, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.BackWall.BackWall07,
      left: tileManager.realPos({ left, top: top + 2 }).left,
      top: tileManager.realPos({ left, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.BackWall.BackWall08,
      left: tileManager.realPos({ left: left + 1, top: top + 2 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.BackWall.BackWall09,
      left: tileManager.realPos({ left: left + 2, top: top + 2 }).left,
      top: tileManager.realPos({ left: left + 2, top: top + 2 }).top,
      layer: 1
    }
  ];

  return data;
};

export default DungeonBackWall;
