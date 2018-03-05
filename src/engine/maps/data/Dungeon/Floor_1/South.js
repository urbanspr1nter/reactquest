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
import DungeonFrontWall from '../../../mixins/DungeonFrontWall';
import DungeonFloor from '../../../mixins/DungeonFloor';
import DungeonLargeRock from '../../../mixins/DungeonLargeRock';
import DungeonMediumRock from '../../../mixins/DungeonMediumRock';

const utility = new Utility();
const tileManager = new TileManager();

const itemLocations = [
  Gold(3, 8, 120)
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
  DungeonFrontWall(0, 16, 17),
  WarpTrigger({
    left: 0,
    top: 0,
    iterations: 16,
    direction: Constants.MovementDirections.Right,
    warpTo: 'DungeonF1Center',
    startPos: {
      left: 0,
      top: 16
    }
  }),
  WarpTrigger({
    left: 0,
    top: 1,
    iterations: 16,
    direction: Constants.MovementDirections.Down,
    warpTo: 'DungeonF1SouthWest',
    startPos: {
      left: 16,
      top: 1
    }
  }),
  WarpTrigger({
    left: 16,
    top: 1,
    iterations: 16,
    direction: Constants.MovementDirections.Down,
    warpTo: 'DungeonF1SouthEast',
    startPos: {
      left: 0,
      top: 1
    }
  }),
  DungeonLargeRock(4, 4),
  DungeonLargeRock(6, 10),
  DungeonLargeRock(7, 5),
  DungeonLargeRock(3, 0),
  DungeonLargeRock(11, 8),
  DungeonMediumRock(5, 11),
  DungeonMediumRock(9, 13),
  DungeonMediumRock(12, 3),
  DungeonMediumRock(13, 14),
  DungeonMediumRock(15, 13)
);

const DungeonF1SouthData = {
  playerPosition: {
    left: tileManager.realPos({ left: 0, top: 0 }),
    top: tileManager.realPos({ left: 0, top: 0 })
  },
  monsters: [],
  itemLocations,
  environmentLocations
};

export default DungeonF1SouthData;
