import House from '../mixins/House';
import Tree from '../mixins/Tree';
import LargeBush from '../mixins/LargeBush';
import Well from '../mixins/Well';
import WarpTrigger from '../mixins/WarpTrigger';
import Gold from '../../actors/items/Gold';
import Constants from '../../system/Constants';
import Utility from '../../kernel/Utility';
import TileManager from '../../system/TileManager';

const utility = new Utility();
const tileManager = new TileManager();

const itemLocations = [
  Gold(4, 4, 100)
];

const environmentLocations = utility.concat(
  WarpTrigger({
    left: 0,
    top: 16,
    iterations: 17,
    direction: Constants.MovementDirections.Right,
    warpTo: 'MainMapSouth',
    startPos: { left: 0, top: 0 }
  }),
  WarpTrigger({
    left: 0,
    top: 0,
    iterations: 17,
    direction: Constants.MovementDirections.Right,
    warpTo: 'MainMapNorth',
    startPos: { left: 0, top: 16 }
  }),
  WarpTrigger({
    left: 16,
    top: 12,
    iterations: 1,
    direction: Constants.MovementDirections.Right,
    warpTo: 'MainMapEast',
    startPos: { left: 0, top: 12 }
  }),
  WarpTrigger({
    left: 0,
    top: 4,
    iterations: 1,
    direction: Constants.MovementDirections.Right,
    warpTo: 'MainMapWest',
    startPos: { left: 16, top: 4 }
  }),
  Tree(0, 0),
  Tree(0, 5),
  Tree(0, 9),
  Tree(0, 13),
  Tree(14, 8),
  Tree(14, 4),
  Tree(14, 0),
  Well(8, 10),
  LargeBush(15, 13),
  LargeBush(15, 15),
  House(3, 9),
  [
    {
      assetPath: Constants.Assets.Bush,
      left: tileManager.realPos({ left: 3, top: 14 }).left,
      top: tileManager.realPos({ left: 3, top: 14 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Bush,
      left: tileManager.realPos({ left: 4, top: 14 }).left,
      top: tileManager.realPos({ left: 4, top: 14 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Patch,
      left: tileManager.realPos({ left: 15, top: 12 }).left,
      top: tileManager.realPos({ left: 15, top: 12 }).top,
      layer: 0
    },
    {
      assetPath: Constants.Assets.Patch,
      left: tileManager.realPos({ left: 16, top: 12 }).left,
      top: tileManager.realPos({ left: 16, top: 12 }).top,
      layer: 0
    },
    {
      assetPath: Constants.Assets.Patch,
      left: tileManager.realPos({ left: 3, top: 4 }).left,
      top: tileManager.realPos({ left: 3, top: 4 }).top,
      layer: 0
    },
    {
      assetPath: Constants.Assets.Patch,
      left: tileManager.realPos({ left: 2, top: 4 }).left,
      top: tileManager.realPos({ left: 2, top: 4 }).top,
      layer: 0
    },
    {
      assetPath: Constants.Assets.Patch,
      left: tileManager.realPos({ left: 1, top: 4 }).left,
      top: tileManager.realPos({ left: 1, top: 4 }).top,
      layer: 0
    },
    {
      assetPath: Constants.Assets.Patch,
      left: tileManager.realPos({ left: 0, top: 4 }).left,
      top: tileManager.realPos({ left: 0, top: 4 }).top,
      layer: 0
    },
    {
      assetPath: Constants.Assets.Patch,
      left: tileManager.realPos({ left: 5, top: 14 }).left,
      top: tileManager.realPos({ left: 5, top: 14 }).top,
      layer: 0
    },
    {
      assetPath: Constants.Assets.Patch,
      left: tileManager.realPos({ left: 6, top: 14 }).left,
      top: tileManager.realPos({ left: 6, top: 14 }).top,
      layer: 0
    },
    {
      assetPath: Constants.Assets.Patch,
      left: tileManager.realPos({ left: 7, top: 14 }).left,
      top: tileManager.realPos({ left: 7, top: 14 }).top,
      layer: 0
    },
    {
      assetPath: Constants.Assets.Patch,
      left: tileManager.realPos({ left: 7, top: 15 }).left,
      top: tileManager.realPos({ left: 7, top: 15 }).top,
      layer: 0
    },
    {
      assetPath: Constants.Assets.Patch,
      left: tileManager.realPos({ left: 8, top: 15 }).left,
      top: tileManager.realPos({ left: 8, top: 15 }).top,
      layer: 0
    },
    {
      assetPath: Constants.Assets.Patch,
      left: tileManager.realPos({ left: 8, top: 16 }).left,
      top: tileManager.realPos({ left: 8, top: 16 }).top,
      layer: 0,
      warpTo: 'MainMapSouth',
      playerPosition: {
        left: tileManager.realPos({ left: 8, top: 0 }).left,
        top: tileManager.realPos({ left: 8, top: 0 }).top
      }
    },
    {
      assetPath: Constants.Assets.Rock,
      left: 240,
      top: 336,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Rock,
      left: 288,
      top: 288,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Rock,
      left: 336,
      top: 336,
      layer: 1
    },
  ]
);

const MainMapData = {
  playerPosition: {
    top: 336,
    left: 96
  },
  monsters: [],
  itemLocations,
  environmentLocations
};

export default MainMapData;
