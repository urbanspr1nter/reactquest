/**
 * System
 */
import Constants from '../../../../../engine/system/Constants';
import Utility from '../../../../../engine/kernel/Utility';
import TileManager from '../../../../system/TileManager';
import WarpTrigger from '../../../mixins/WarpTrigger';
import Gold from '../../../../actors/items/Gold';

/**
 * Environment
 */
import DungeonFloor from '../../../mixins/DungeonFloor';
import DungeonLargeRock from '../../../mixins/DungeonLargeRock';
import DungeonMediumRock from '../../../mixins/DungeonMediumRock';
import DungeonWall from '../../../mixins/DungeonWall';

/**
 * Monsters
 */
import Vampire from '../../../../actors/enemies/Vampire';

const utility = new Utility();
const tileManager = new TileManager();

const itemLocations = [
  Gold(11, 12, 88)
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
  WarpTrigger({
    left: 0,
    top: 0,
    iterations: 17,
    direction: Constants.MovementDirections.Right,
    warpTo: 'DungeonF1NorthEast',
    startPos: {
      left: 0,
      top: 16
    }
  }),
  WarpTrigger({
    left: 0,
    top: 16,
    iterations: 17,
    direction: Constants.MovementDirections.Right,
    warpTo: 'DungeonF1SouthEast',
    startPos: {
      left: 0,
      top: 0
    }
  }),
  WarpTrigger({
    left: 0,
    top: 1,
    iterations: 16,
    direction: Constants.MovementDirections.Down,
    warpTo: 'DungeonF1Center',
    startPos: {
      left: 16,
      top: 1
    }
  }),
  DungeonWall({
    left: 14,
    top: 0,
    length: 16,
    vertical: true,
    hasTop: false,
    hasBottom: false
  }),
  DungeonMediumRock(2, 7),
  DungeonMediumRock(1, 11),
  DungeonMediumRock(1, 13),
  DungeonMediumRock(3, 9),
  DungeonLargeRock(5, 2),
  DungeonLargeRock(8, 9),
  DungeonLargeRock(11, 2),
  DungeonLargeRock(11, 5),
  [
    {
      assetPath: Constants.Assets.Dungeon.Shrub,
      left: tileManager.realPos({ left: 11, top: 9 }).left,
      top: tileManager.realPos({ left: 11, top: 9 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.Shrub,
      left: tileManager.realPos({ left: 3, top: 4 }).left,
      top: tileManager.realPos({ left: 3, top: 4 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.Shrub,
      left: tileManager.realPos({ left: 4, top: 13 }).left,
      top: tileManager.realPos({ left: 4, top: 13 }).top,
      layer: 1
    }
  ]
);


const DungeonF1EastData = {
  playerPosition: {
    left: tileManager.realPos({ left: 0, top: 0 }),
    top: tileManager.realPos({ left: 0, top: 0 })
  },
  monsters: [
    Vampire(6, 10)
  ],
  itemLocations,
  environmentLocations
};

export default DungeonF1EastData;
