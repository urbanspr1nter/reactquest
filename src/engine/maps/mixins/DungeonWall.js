import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';
import Utility from '../../kernel/Utility';
import DungeonWallEnd from '../../maps/mixins/DungeonWallEnd';

const DungeonWall = (config) => {
  const tileManager = new TileManager();
  const utility = new Utility();

  const defaultConfig = Object.assign({
    left: 0,
    top: 0,
    length: 1,
    vertical: true,
    hasTop: true,
    hasBottom: true
  }, config);


  let data = [];

  if (defaultConfig.hasTop) {
    data.push(
      {
        assetPath: Constants.Assets.Dungeon.WallTop.WallTop01,
        left: tileManager.realPos({ left: defaultConfig.left, top: defaultConfig.top }).left,
        top: tileManager.realPos({ left: defaultConfig.left, top: defaultConfig.top }).top,
        layer: 1
      },
      {
        assetPath: Constants.Assets.Dungeon.WallTop.WallTop02,
        left: tileManager.realPos({ left: defaultConfig.left + 1, top: defaultConfig.top }).left,
        top: tileManager.realPos({ left: defaultConfig.left + 1, top: defaultConfig.top }).top,
        layer: 1
      },
      {
        assetPath: Constants.Assets.Dungeon.WallTop.WallTop03,
        left: tileManager.realPos({ left: defaultConfig.left + 2, top: defaultConfig.top }).left,
        top: tileManager.realPos({ left: defaultConfig.left + 2, top: defaultConfig.top }).top,
        layer: 1
      }
    );
  }

  let i = (defaultConfig.hasTop === true) ? 1 : 0;
  for (; i < defaultConfig.length - 1; i += 1) {
    data.push(
      {
        assetPath: Constants.Assets.Dungeon.WallTop.WallTop04,
        left: tileManager.realPos({ left: defaultConfig.left, top: i }).left,
        top: tileManager.realPos({ left: defaultConfig.left, top: i }).top,
        layer: 1
      },
      {
        assetPath: Constants.Assets.Dungeon.WallTop.WallTop05,
        left: tileManager.realPos({ left: defaultConfig.left + 1, top: i }).left,
        top: tileManager.realPos({ left: defaultConfig.left + 1, top: i }).top,
        layer: 1
      },
      {
        assetPath: Constants.Assets.Dungeon.WallTop.WallTop06,
        left: tileManager.realPos({ left: defaultConfig.left + 2, top: i }).left,
        top: tileManager.realPos({ left: defaultConfig.left + 2, top: i }).top,
        layer: 1
      }
    );
  }

  if (defaultConfig.hasBottom) {
    data = utility.concat(
      data,
      DungeonWallEnd(defaultConfig.left, defaultConfig.top + (defaultConfig.length - 2))
    );
  } else {
    data.push(
      {
        assetPath: Constants.Assets.Dungeon.WallTop.WallTop04,
        left: tileManager.realPos({
          left: defaultConfig.left,
          top: defaultConfig.top + (defaultConfig.length - 1)
        }).left,
        top: tileManager.realPos({
          left: defaultConfig.left,
          top: defaultConfig.top + (defaultConfig.length - 1)
        }).top,
        layer: 1
      },
      {
        assetPath: Constants.Assets.Dungeon.WallTop.WallTop05,
        left: tileManager.realPos({
          left: defaultConfig.left + 1,
          top: defaultConfig.top + (defaultConfig.length - 1)
        }).left,
        top: tileManager.realPos({
          left: defaultConfig.left + 1,
          top: defaultConfig.top + (defaultConfig.length - 1)
        }).top,
        layer: 1
      },
      {
        assetPath: Constants.Assets.Dungeon.WallTop.WallTop06,
        left: tileManager.realPos({
          left: defaultConfig.left + 2,
          top: defaultConfig.top + (defaultConfig.length - 1)
        }).left,
        top: tileManager.realPos({
          left: defaultConfig.left + 2,
          top: defaultConfig.top + (defaultConfig.length - 1)
        }).top,
        layer: 1
      }
    );
    data.push(
      {
        assetPath: Constants.Assets.Dungeon.WallTop.WallTop04,
        left: tileManager.realPos({
          left: defaultConfig.left,
          top: defaultConfig.top + defaultConfig.length
        }).left,
        top: tileManager.realPos({
          left: defaultConfig.left,
          top: defaultConfig.top + defaultConfig.length
        }).top,
        layer: 1
      },
      {
        assetPath: Constants.Assets.Dungeon.WallTop.WallTop05,
        left: tileManager.realPos({
          left: defaultConfig.left + 1,
          top: defaultConfig.top + defaultConfig.length
        }).left,
        top: tileManager.realPos({
          left: defaultConfig.left + 1,
          top: defaultConfig.top + defaultConfig.length
        }).top,
        layer: 1
      },
      {
        assetPath: Constants.Assets.Dungeon.WallTop.WallTop06,
        left: tileManager.realPos({
          left: defaultConfig.left + 2,
          top: defaultConfig.top + defaultConfig.length
        }).left,
        top: tileManager.realPos({
          left: defaultConfig.left + 2,
          top: defaultConfig.top + defaultConfig.length
        }).top,
        layer: 1
      }
    );
  }

  return data;
};

export default DungeonWall;
