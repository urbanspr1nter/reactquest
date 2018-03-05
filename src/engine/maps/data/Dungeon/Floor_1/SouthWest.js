/**
 * System
 */
import Constants from '../../../../../engine/system/Constants';
import Utility from '../../../../../engine/kernel/Utility';
import TileManager from '../../../../system/TileManager';
import WarpTrigger from '../../../mixins/WarpTrigger';
import Potion from '../../../../actors/items/Potion';

/**
 * Environment
 */
import DungeonFrontWall from '../../../mixins/DungeonFrontWall';
import DungeonFloor from '../../../mixins/DungeonFloor';
import DungeonLargeRock from '../../../mixins/DungeonLargeRock';
import DungeonMediumRock from '../../../mixins/DungeonMediumRock';
import DungeonWall from '../../../mixins/DungeonWall';

import Vampire from '../../../../actors/enemies/Vampire';

const utility = new Utility();
const tileManager = new TileManager();

const itemLocations = [
  Potion(9, 10, 1)
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
    warpTo: 'DungeonF1West',
    startPos: {
      left: 0,
      top: 16
    }
  }),
  WarpTrigger({
    left: 16,
    top: 1,
    iterations: 16,
    direction: Constants.MovementDirections.Down,
    warpTo: 'DungeonF1South',
    startPos: {
      left: 0,
      top: 1
    }
  }),
  DungeonWall({
    left: 0,
    top: 0,
    length: 15,
    vertical: true,
    hasTop: false,
    hasBottom: true
  }),
  DungeonLargeRock(4, 4),
  DungeonLargeRock(6, 10),
  DungeonLargeRock(9, 5),
  DungeonLargeRock(10, 10),
  DungeonMediumRock(5, 11),
  DungeonMediumRock(6, 13),
  DungeonMediumRock(12, 3),
  DungeonMediumRock(13, 14),
  DungeonMediumRock(15, 13)
);

const DungeonF1SouthWestData = {
  playerPosition: {
    left: tileManager.realPos({ left: 0, top: 0 }),
    top: tileManager.realPos({ left: 0, top: 0 })
  },
  monsters: [
    Vampire(8, 8)
  ],
  itemLocations,
  environmentLocations
};

export default DungeonF1SouthWestData;
