/**
 * System
 */
import Constants from '../../../../../engine/system/Constants';
import Utility from '../../../../../engine/kernel/Utility';
import TileManager from '../../../../system/TileManager';
import Gold from '../../../../actors/items/Gold';
import Potion from '../../../../actors/items/Potion';

import WarpTrigger from '../../../mixins/WarpTrigger';
import DungeonFloor from '../../../mixins/DungeonFloor';
import DungeonMediumRock from '../../../mixins/DungeonMediumRock';

import Frost from '../../../../actors/enemies/Frost';
import Vampire from '../../../../actors/enemies/Vampire';
import DungeonLargeRock from '../../../mixins/DungeonLargeRock';

const utility = new Utility();
const tileManager = new TileManager();

const itemLocations = [
  Gold(6, 5, 175),
  Potion(6, 13, 1)
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
    warpTo: 'DungeonF1North',
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
    warpTo: 'DungeonF1South',
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
    warpTo: 'DungeonF1West',
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
    warpTo: 'DungeonF1East',
    startPos: {
      left: 0,
      top: 1
    }
  }),
  [
    {
      assetPath: Constants.Assets.Dungeon.Stairs.StairsUpRight,
      left: tileManager.realPos({ left: 8, top: 8 }).left,
      top: tileManager.realPos({ left: 8, top: 8 }).top,
      layer: 0,
      warpTo: 'DungeonF0Center',
      playerPosition: {
        left: tileManager.realPos({ left: 5, top: 7 }).left,
        top: tileManager.realPos({ left: 5, top: 7 }).top
      }
    },
    {
      assetPath: Constants.Assets.Dungeon.Shrub,
      left: tileManager.realPos({ left: 2, top: 2 }).left,
      top: tileManager.realPos({ left: 2, top: 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Dungeon.Shrub,
      left: tileManager.realPos({ left: 11, top: 9 }).left,
      top: tileManager.realPos({ left: 11, top: 9 }).top,
      layer: 1
    },
  ],
  DungeonMediumRock(8, 5),
  DungeonMediumRock(9, 7),
  DungeonMediumRock(8, 9),
  DungeonMediumRock(0, 5),
  DungeonLargeRock(2, 8),
  DungeonLargeRock(10, 4),
  DungeonLargeRock(13, 12)
);

const DungeonF1CenterData = {
  playerPosition: {
    left: tileManager.realPos({ left: 0, top: 0 }),
    top: tileManager.realPos({ left: 0, top: 0 })
  },
  monsters: [
    Frost(4, 10),
    Frost(10, 10),
    Vampire(7, 5),
  ],
  itemLocations,
  environmentLocations
};

export default DungeonF1CenterData;
