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
import Frost from '../../../../actors/enemies/Frost';

const utility = new Utility();
const tileManager = new TileManager();

const itemLocations = [
  Gold(10, 12, 135)
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
    iterations: 16,
    direction: Constants.MovementDirections.Right,
    warpTo: 'DungeonF1NorthWest',
    startPos: {
      left: 0,
      top: 16
    }
  }),
  WarpTrigger({
    left: 0,
    top: 16,
    iterations: 16,
    direction: Constants.MovementDirections.Right,
    warpTo: 'DungeonF1SouthWest',
    startPos: {
      left: 0,
      top: 0
    }
  }),
  WarpTrigger({
    left: 16,
    top: 1,
    iterations: 16,
    direction: Constants.MovementDirections.Down,
    warpTo: 'DungeonF1Center',
    startPos: {
      left: 0,
      top: 1
    }
  }),
  DungeonWall({
    left: 0,
    top: 0,
    length: 16,
    vertical: true,
    hasTop: false,
    hasBottom: false
  }),
  DungeonLargeRock(4, 4),
  DungeonLargeRock(6, 10),
  DungeonLargeRock(9, 5),
  DungeonMediumRock(5, 11),
  DungeonMediumRock(6, 13),
  DungeonMediumRock(9, 9),
  DungeonMediumRock(12, 3),
  DungeonMediumRock(13, 14)
);

const DungeonF1WestData = {
  playerPosition: {
    left: tileManager.realPos({ left: 0, top: 0 }),
    top: tileManager.realPos({ left: 0, top: 0 })
  },
  monsters: [
    Frost(6, 6),
    Frost(8, 6)
  ],
  itemLocations,
  environmentLocations
};

export default DungeonF1WestData;
