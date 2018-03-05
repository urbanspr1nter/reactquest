/**
 * System
 */
import Constants from '../../../../../engine/system/Constants';
import Utility from '../../../../../engine/kernel/Utility';
import TileManager from '../../../../system/TileManager';
import WarpTrigger from '../../../mixins/WarpTrigger';
import BackWallFactory from '../../../factory/dungeon/BackWall';
import Gold from '../../../../actors/items/Gold';


/**
 * Environment
 */
import DungeonFloor from '../../../mixins/DungeonFloor';
import DungeonLargeRock from '../../../mixins/DungeonLargeRock';
import DungeonMediumRock from '../../../mixins/DungeonMediumRock';

const utility = new Utility();
const tileManager = new TileManager();

const itemLocations = [
  Gold(5, 3, 75)
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
  BackWallFactory(0, 0, 16),
  WarpTrigger({
    left: 0,
    top: 0,
    iterations: 17,
    direction: Constants.MovementDirections.Down,
    warpTo: 'DungeonF1NorthWest',
    startPos: {
      left: 16,
      top: 0
    }
  }),
  WarpTrigger({
    left: 16,
    top: 0,
    iterations: 17,
    direction: Constants.MovementDirections.Down,
    warpTo: 'DungeonF1NorthEast',
    startPos: {
      left: 0,
      top: 0
    }
  }),
  WarpTrigger({
    left: 1,
    top: 16,
    iterations: 16,
    direction: Constants.MovementDirections.Right,
    warpTo: 'DungeonF1Center',
    startPos: {
      left: 0,
      top: 0
    }
  }),
  DungeonLargeRock(3, 5),
  DungeonLargeRock(5, 10),
  DungeonLargeRock(7, 9),
  DungeonLargeRock(3, 10),
  DungeonMediumRock(10, 9),
  DungeonMediumRock(9, 8),
  DungeonMediumRock(1, 13),
  DungeonMediumRock(11, 10),
  DungeonMediumRock(13, 13)
);

const DungeonF1NorthData = {
  playerPosition: {
    left: tileManager.realPos({ left: 0, top: 0 }),
    top: tileManager.realPos({ left: 0, top: 0 })
  },
  monsters: [],
  itemLocations,
  environmentLocations
};

export default DungeonF1NorthData;
