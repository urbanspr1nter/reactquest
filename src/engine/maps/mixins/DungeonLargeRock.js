import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const DungeonLargeRock = (left, top) => {
  const tileManager = new TileManager();

  const data = [
    {
      assetPath: Constants.Assets.Dungeon.LargeRock.LargeRock01,
      left: tileManager.realPos({ left, top }).left,
      top: tileManager.realPos({ left, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.LargeRock.LargeRock02,
      left: tileManager.realPos({ left: left + 1, top }).left,
      top: tileManager.realPos({ left: left + 1, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.LargeRock.LargeRock03,
      left: tileManager.realPos({ left, top: top + 1 }).left,
      top: tileManager.realPos({ left, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.LargeRock.LargeRock04,
      left: tileManager.realPos({ left: left + 1, top: top + 1 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 1 }).top,
      layer: 1
    },
  ];

  return data;
};

export default DungeonLargeRock;
