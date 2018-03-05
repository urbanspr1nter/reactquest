/**
 * System
 */
import Constants from '../../../../../engine/system/Constants';
import Utility from '../../../../../engine/kernel/Utility';
import TileManager from '../../../../system/TileManager';
import WarpTrigger from '../../../mixins/WarpTrigger';
import BackWallFactory from '../../../factory/dungeon/BackWall';
import Gold from '../../../../actors/items/Gold';

import Vampire from '../../../../actors/enemies/Vampire';

/**
 * Environment
 */
import DungeonFloor from '../../../mixins/DungeonFloor';
import DungeonLargeRock from '../../../mixins/DungeonLargeRock';
import DungeonMediumRock from '../../../mixins/DungeonMediumRock';
import DungeonWall from '../../../mixins/DungeonWall';

const utility = new Utility();
const tileManager = new TileManager();

const itemLocations = [
  Gold(5, 6, 50)
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
    top: 16,
    iterations: 16,
    direction: Constants.MovementDirections.Right,
    warpTo: 'DungeonF1West',
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
    warpTo: 'DungeonF1North',
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
    hasTop: true,
    hasBottom: false
  }),
  DungeonMediumRock(4, 4),
  DungeonMediumRock(4, 10),
  DungeonMediumRock(8, 9),
  DungeonMediumRock(8, 11),
  DungeonLargeRock(13, 5),
  DungeonLargeRock(11, 5),
  DungeonMediumRock(10, 13),
  [
    {
      assetPath: Constants.Assets.Dungeon.Shrub,
      left: tileManager.realPos({ left: 11, top: 9 }).left,
      top: tileManager.realPos({ left: 11, top: 9 }).top,
      layer: 1
    }
  ]
);

const DungeonF1NorthWestData = {
  playerPosition: {
    left: tileManager.realPos({ left: 0, top: 0 }),
    top: tileManager.realPos({ left: 0, top: 0 })
  },
  monsters: [
    Vampire(7, 9)
  ],
  itemLocations,
  environmentLocations
};

export default DungeonF1NorthWestData;
