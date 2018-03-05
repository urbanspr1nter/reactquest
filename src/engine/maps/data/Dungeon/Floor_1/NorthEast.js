/**
 * System
 */
import Constants from '../../../../../engine/system/Constants';
import Utility from '../../../../../engine/kernel/Utility';
import TileManager from '../../../../system/TileManager';
import WarpTrigger from '../../../mixins/WarpTrigger';
import BackWallFactory from '../../../factory/dungeon/BackWall';
import Gold from '../../../../actors/items/Gold';
import Potion from '../../../../actors/items/Potion';

/**
 * Environment
 */
import DungeonFloor from '../../../mixins/DungeonFloor';
import DungeonMediumRock from '../../../mixins/DungeonMediumRock';
import DungeonWall from '../../../mixins/DungeonWall';

/**
 * Monsters
 */
import Frost from '../../../../actors/enemies/Frost';


const utility = new Utility();
const tileManager = new TileManager();

const itemLocations = [
  Gold(4, 7, 100),
  Gold(8, 11, 100),
  Potion(6, 11, 1)
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
    warpTo: 'DungeonF1North',
    startPos: {
      left: 16,
      top: 0
    }
  }),
  WarpTrigger({
    left: 0,
    top: 16,
    iterations: 16,
    direction: Constants.MovementDirections.Right,
    warpTo: 'DungeonF1East',
    startPos: {
      left: 0,
      top: 0
    }
  }),
  DungeonWall({
    left: 14,
    top: 0,
    length: 16,
    vertical: true,
    hasTop: true,
    hasBottom: false
  }),
  DungeonMediumRock(1, 10),
  DungeonMediumRock(12, 13),
  DungeonMediumRock(13, 5),
  [
    {
      assetPath: Constants.Assets.Dungeon.Shrub,
      left: tileManager.realPos({ left: 11, top: 9 }).left,
      top: tileManager.realPos({ left: 11, top: 9 }).top,
      layer: 1
    }
  ]
);


const DungeonF1NorthEastData = {
  playerPosition: {
    left: tileManager.realPos({ left: 0, top: 0 }),
    top: tileManager.realPos({ left: 0, top: 0 })
  },
  monsters: [
    Frost(4, 10),
    Frost(7, 12),
    Frost(2, 4)
  ],
  itemLocations,
  environmentLocations
};

export default DungeonF1NorthEastData;
