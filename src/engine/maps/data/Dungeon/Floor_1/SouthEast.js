/**
 * System
 */
import Constants from '../../../../../engine/system/Constants';
import Utility from '../../../../../engine/kernel/Utility';
import TileManager from '../../../../system/TileManager';
import WarpTrigger from '../../../mixins/WarpTrigger';
import Gold from '../../../../actors/items/Gold';
import Potion from '../../../../actors/items/Potion';

/**
 * Environment
 */
import DungeonFrontWall from '../../../mixins/DungeonFrontWall';
import DungeonFloor from '../../../mixins/DungeonFloor';
import DungeonLargeRock from '../../../mixins/DungeonLargeRock';
import DungeonMediumRock from '../../../mixins/DungeonMediumRock';
import DungeonWall from '../../../mixins/DungeonWall';

import Frost from '../../../../actors/enemies/Frost';
import Vampire from '../../../../actors/enemies/Vampire';

const utility = new Utility();
const tileManager = new TileManager();

const itemLocations = [
  Gold(4, 8, 64),
  Gold(3, 14, 27),
  Potion(8, 10, 1)
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
    iterations: 17,
    direction: Constants.MovementDirections.Right,
    warpTo: 'DungeonF1East',
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
    warpTo: 'DungeonF1South',
    startPos: {
      left: 16,
      top: 1
    }
  }),
  DungeonWall({
    left: 14,
    top: 0,
    length: 15,
    vertical: true,
    hasTop: false,
    hasBottom: true
  }),
  DungeonLargeRock(12, 4),
  DungeonLargeRock(6, 10),
  DungeonLargeRock(3, 0),
  DungeonLargeRock(11, 8),
  DungeonMediumRock(5, 11),
  DungeonMediumRock(9, 13),
  DungeonMediumRock(9, 3),
  DungeonMediumRock(13, 14),
  DungeonMediumRock(0, 13),
  [
    {
      assetPath: Constants.Assets.Dungeon.Stairs.StairsDownLeft,
      left: tileManager.realPos({ left: 7, top: 9 }).left,
      top: tileManager.realPos({ left: 7, top: 9 }).top,
      layer: 0,
      warpTo: 'DungeonF1Center',
      playerPosition: {
        left: tileManager.realPos({ left: 7, top: 8 }).left,
        top: tileManager.realPos({ left: 7, top: 8 }).top
      }
    },
  ]
);

const DungeonF1SouthEastData = {
  playerPosition: {
    left: tileManager.realPos({ left: 0, top: 0 }),
    top: tileManager.realPos({ left: 0, top: 0 })
  },
  monsters: [
    Frost(10, 5),
    Vampire(5, 9),
  ],
  itemLocations,
  environmentLocations
};

export default DungeonF1SouthEastData;
