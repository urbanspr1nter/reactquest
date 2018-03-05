/**
 * System
 */
import Constants from '../../../engine/system/Constants';
import Utility from '../../../engine/kernel/Utility';
import TileManager from '../../system/TileManager';

/**
 * Game Resources
 */
import House from '../../../engine/maps/mixins/House';
import House2 from '../../../engine/maps/mixins/House2';
import Tree from '../../../engine/maps/mixins/Tree';
import Grass from '../../../engine/maps/mixins/Grass';
import WarpTrigger from '../mixins/WarpTrigger';

const utility = new Utility();
const tileManager = new TileManager();

const itemLocations = [];
const environmentLocations = utility.concat(
  WarpTrigger({
    left: 16,
    top: 4,
    iterations: 1,
    direction: Constants.MovementDirections.Right,
    warpTo: 'MainMap',
    startPos: { left: 0, top: 4 }
  }),
  House2(4, 8),
  House(9, 8),
  Tree(0, 0),
  Tree(0, 4),
  Tree(0, 8),
  Tree(0, 12),
  Grass({
    left: 0,
    top: 0
  }, {
    left: 16,
    top: 16
  })
).concat(
  {
    assetPath: Constants.Assets.Rock,
    left: tileManager.realPos({ left: 0, top: 16 }).left,
    top: tileManager.realPos({ left: 0, top: 16 }).top,
    layer: 1
  },
  {
    assetPath: Constants.Assets.Rock,
    left: tileManager.realPos({ left: 1, top: 16 }).left,
    top: tileManager.realPos({ left: 1, top: 16 }).top,
    layer: 1
  },
  {
    assetPath: Constants.Assets.Rock,
    left: tileManager.realPos({ left: 2, top: 15 }).left,
    top: tileManager.realPos({ left: 2, top: 15 }).top,
    layer: 1
  }
);

const MainMapWestData = {
  playerPosition: {
    left: tileManager.realPos({ left: 0, top: 0 }),
    top: tileManager.realPos({ left: 0, top: 0 })
  },
  monsters: [],
  itemLocations,
  environmentLocations
};

export default MainMapWestData;
