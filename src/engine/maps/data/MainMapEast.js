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
import LargeBush from '../../../engine/maps/mixins/LargeBush';
import Tree from '../../../engine/maps/mixins/Tree';
import Grass from '../../../engine/maps/mixins/Grass';
import WarpTrigger from '../mixins/WarpTrigger';

const utility = new Utility();
const tileManager = new TileManager();

const itemLocations = [];
const environmentLocations = utility.concat(
  WarpTrigger({
    left: 0,
    top: 12,
    iterations: 1,
    direction: Constants.MovementDirections.Down,
    warpTo: 'MainMap',
    startPos: { left: 16, top: 12 }
  }),
  House(3, 4),
  House(9, 4),
  Tree(14, 2),
  Tree(13, 6),
  Tree(14, 10),
  LargeBush(13, 0),
  LargeBush(15, 0),
  Grass({
    left: 0,
    top: 0
  }, {
    left: 16,
    top: 16
  })
).concat(
  {
    assetPath: Constants.Assets.Patch,
    left: tileManager.realPos({ left: 0, top: 12 }).left,
    top: tileManager.realPos({ left: 0, top: 12 }).top,
    layer: 0
  },
  {
    assetPath: Constants.Assets.Rock,
    left: tileManager.realPos({ left: 16, top: 6 }).left,
    top: tileManager.realPos({ left: 16, top: 6 }).top,
    layer: 1
  },
  {
    assetPath: Constants.Assets.Rock,
    left: tileManager.realPos({ left: 16, top: 7 }).left,
    top: tileManager.realPos({ left: 16, top: 7 }).top,
    layer: 1
  },
  {
    assetPath: Constants.Assets.Rock,
    left: tileManager.realPos({ left: 16, top: 8 }).left,
    top: tileManager.realPos({ left: 16, top: 8 }).top,
    layer: 1
  },
  {
    assetPath: Constants.Assets.Rock,
    left: tileManager.realPos({ left: 15, top: 8 }).left,
    top: tileManager.realPos({ left: 15, top: 8 }).top,
    layer: 1
  },
  {
    assetPath: Constants.Assets.Rock,
    left: tileManager.realPos({ left: 15, top: 9 }).left,
    top: tileManager.realPos({ left: 15, top: 9 }).top,
    layer: 1
  },
  {
    assetPath: Constants.Assets.Rock,
    left: tileManager.realPos({ left: 16, top: 16 }).left,
    top: tileManager.realPos({ left: 16, top: 16 }).top,
    layer: 1
  },
  {
    assetPath: Constants.Assets.Rock,
    left: tileManager.realPos({ left: 15, top: 16 }).left,
    top: tileManager.realPos({ left: 15, top: 16 }).top,
    layer: 1
  },
  {
    assetPath: Constants.Assets.Rock,
    left: tileManager.realPos({ left: 14, top: 15 }).left,
    top: tileManager.realPos({ left: 14, top: 15 }).top,
    layer: 1
  },
  {
    assetPath: Constants.Assets.Rock,
    left: tileManager.realPos({ left: 14, top: 14 }).left,
    top: tileManager.realPos({ left: 14, top: 14 }).top,
    layer: 1
  },
  {
    assetPath: Constants.Assets.Rock,
    left: tileManager.realPos({ left: 15, top: 15 }).left,
    top: tileManager.realPos({ left: 15, top: 15 }).top,
    layer: 1
  },
  {
    assetPath: Constants.Assets.Rock,
    left: tileManager.realPos({ left: 13, top: 14 }).left,
    top: tileManager.realPos({ left: 13, top: 14 }).top,
    layer: 1
  }
);

const MainMapEastData = {
  playerPosition: {
    left: tileManager.realPos({ left: 0, top: 0 }),
    top: tileManager.realPos({ left: 0, top: 0 })
  },
  monsters: [],
  itemLocations,
  environmentLocations
};

export default MainMapEastData;
