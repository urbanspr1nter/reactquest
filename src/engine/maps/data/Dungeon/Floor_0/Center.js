/**
 * System
 */
import Constants from '../../../../../engine/system/Constants';
import Utility from '../../../../../engine/kernel/Utility';
import TileManager from '../../../../system/TileManager';

/**
 * Game Resources
 */
import DungeonFloor from '../../../mixins/DungeonFloor';
import DungeonWallVines from '../../../mixins/DungeonWallVines';
import DungeonWallEndRight from '../../../mixins/DungeonWallEndRight';
import DungeonWallBlockVertical from '../../../mixins/DungeonWallBlockVertical';
import DungeonLargeRock from '../../../mixins/DungeonLargeRock';
import Frost from '../../../../actors/enemies/Frost';
import Vampire from '../../../../actors/enemies/Vampire';
import BackWallFactory from '../../../factory/dungeon/BackWall';
import DungeonWall from '../../../mixins/DungeonWall';
import Potion from '../../../../actors/items/Potion';

const utility = new Utility();
const tileManager = new TileManager();

const itemLocations = [
  Potion(10, 13, 1)
];
const environmentLocations = utility.concat(
  DungeonFloor({
    startPos: {
      left: 0,
      top: 0
    },
    endPos: {
      left: 16,
      top: 16
    }
  }),
  DungeonWallVines(11, 1),
  DungeonWallEndRight(2, 6),
  DungeonWallBlockVertical(1, 6),
  DungeonWallBlockVertical(0, 6),
  DungeonWallEndRight(2, 11),
  DungeonWallBlockVertical(1, 11),
  DungeonWallBlockVertical(0, 11),
  DungeonLargeRock(0, 4),
  DungeonLargeRock(4, 15),
  DungeonLargeRock(6, 14),
  DungeonLargeRock(8, 8),
  DungeonLargeRock(9, 6),
  BackWallFactory(0, 0, 16),
  [
    {
      assetPath: Constants.Assets.Dungeon.Entrance.Entrance01,
      left: tileManager.realPos({ left: 9, top: 15 }).left,
      top: tileManager.realPos({ left: 9, top: 15 }).top,
      layer: 0
    },
    {
      assetPath: Constants.Assets.Dungeon.Entrance.Entrance02,
      left: tileManager.realPos({ left: 10, top: 15 }).left,
      top: tileManager.realPos({ left: 10, top: 15 }).top,
      layer: 0
    },
    {
      assetPath: Constants.Assets.Dungeon.Entrance.Entrance01,
      left: tileManager.realPos({ left: 9, top: 16 }).left,
      top: tileManager.realPos({ left: 9, top: 16 }).top,
      layer: 0,
    },
    {
      assetPath: Constants.Assets.Dungeon.Entrance.Entrance02,
      left: tileManager.realPos({ left: 10, top: 16 }).left,
      top: tileManager.realPos({ left: 10, top: 16 }).top,
      layer: 0,
    },
    {
      assetPath: Constants.Assets.Dungeon.Shrub,
      left: tileManager.realPos({ left: 3, top: 8 }).left,
      top: tileManager.realPos({ left: 3, top: 8 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.Shrub,
      left: tileManager.realPos({ left: 2, top: 10 }).left,
      top: tileManager.realPos({ left: 2, top: 10 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.Rock.Rock01,
      left: tileManager.realPos({ left: 4, top: 8 }).left,
      top: tileManager.realPos({ left: 4, top: 8 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.Rock.Rock02,
      left: tileManager.realPos({ left: 4, top: 9 }).left,
      top: tileManager.realPos({ left: 4, top: 9 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.Rock.Rock01,
      left: tileManager.realPos({ left: 4, top: 6 }).left,
      top: tileManager.realPos({ left: 4, top: 6 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.Rock.Rock02,
      left: tileManager.realPos({ left: 4, top: 7 }).left,
      top: tileManager.realPos({ left: 4, top: 7 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.Rock.Rock01,
      left: tileManager.realPos({ left: 6, top: 8 }).left,
      top: tileManager.realPos({ left: 6, top: 8 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.Rock.Rock02,
      left: tileManager.realPos({ left: 6, top: 9 }).left,
      top: tileManager.realPos({ left: 6, top: 9 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.Rock.Rock01,
      left: tileManager.realPos({ left: 6, top: 6 }).left,
      top: tileManager.realPos({ left: 6, top: 6 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.Rock.Rock02,
      left: tileManager.realPos({ left: 6, top: 7 }).left,
      top: tileManager.realPos({ left: 6, top: 7 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.Stairs.StairsDownRight,
      left: tileManager.realPos({ left: 5, top: 8 }).left,
      top: tileManager.realPos({ left: 5, top: 8 }).top,
      layer: 0,
      warpTo: 'DungeonF1Center',
      playerPosition: {
        left: tileManager.realPos({ left: 7, top: 8 }).left,
        top: tileManager.realPos({ left: 7, top: 8 }).top
      }
    },
  ],
  DungeonWall({
    left: 14,
    top: 0,
    length: 15
  })
);

const DungeonF0CenterData = {
  playerPosition: {
    left: tileManager.realPos({ left: 0, top: 0 }),
    top: tileManager.realPos({ left: 0, top: 0 })
  },
  monsters: [
    Frost(3, 10),
    Vampire(5, 9),
    Frost(7, 10),
  ],
  itemLocations,
  environmentLocations
};

export default DungeonF0CenterData;
