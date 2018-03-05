import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * System stuff
 */
import Constants from './engine/system/Constants';
import Utility from './engine/kernel/Utility';
import Logger from './engine/kernel/Logger';
import TileManager from './engine/system/TileManager';
import Grass from './engine/maps/mixins/Grass';
import WarpTrigger from './engine/maps/mixins/WarpTrigger';
import PlayerAttributeHandler from './engine/actors/PlayerAttributeHandler';
import MainMapData from './engine/maps/data/MainMap';
import MainMapWestData from './engine/maps/data/MainMapWest';
import MainMapEastData from './engine/maps/data/MainMapEast';
import Frost from './engine/actors/enemies/Frost';

/**
 * Game stuff
 */
import Container from './engine/system/Container';
import DungeonF0CenterData from './engine/maps/data/Dungeon/Floor_0/Center';
import DungeonF1CenterData from './engine/maps/data/Dungeon/Floor_1/Center';
import DungeonF1NorthData from './engine/maps/data/Dungeon/Floor_1/North';
import DungeonF1SouthData from './engine/maps/data/Dungeon/Floor_1/South';
import DungeonF1WestData from './engine/maps/data/Dungeon/Floor_1/West';
import DungeonF1EastData from './engine/maps/data/Dungeon/Floor_1/East';
import DungeonF1NorthWestData from './engine/maps/data/Dungeon/Floor_1/NorthWest';
import DungeonF1NorthEastData from './engine/maps/data/Dungeon/Floor_1/NorthEast';
import DungeonF1SouthWestData from './engine/maps/data/Dungeon/Floor_1/SouthWest';
import DungeonF1SouthEastData from './engine/maps/data/Dungeon/Floor_1/SouthEast';
import Configuration from './engine/system/Configuration';

const attrHandler = new PlayerAttributeHandler();
const myLogger = new Logger([]);
const tileManager = new TileManager();
const utility = new Utility();

const mapDb = new Map();

let playerState = null;
if (Configuration.Debug) {
  playerState = Configuration.PlayerState;
}
else {
  const playerAttributes = {
    strength: 1,
    defense: 1,
    speed: 1,
    intelligence: 1
  };

  playerState = new Map();
  playerState.set('name', 'Roger');
  playerState.set('attributes', playerAttributes);
  playerState.set('level', 1);
  playerState.set('hp', 12);
  playerState.set('maxHp', 12);
  playerState.set('mp', 3);
  playerState.set('maxMp', 3);
  playerState.set('gold', 0);
  playerState.set('xp', 0);
  playerState.set('inventory', {
    potions: 0
  });
}

mapDb.set('LoseScreen', {
  playerPosition: {},
  itemLocations: [],
  environmentLocations: [],
  monsters: []
});
mapDb.set('WinScreen', {
  playerPosition: {},
  itemLocations: [],
  environmentLocations: [],
  monsters: []
});

mapDb.set('MainMapNorth', {
  playerPosition: {
    left: tileManager.realPos({ left: 8, top: 0 }).left,
    top: tileManager.realPos({ left: 8, top: 0 }).top
  },
  itemLocations: [],
  environmentLocations: utility.concat(
    WarpTrigger({
      left: 0,
      top: 16,
      iterations: 17,
      direction: Constants.MovementDirections.Right,
      warpTo: 'MainMap',
      startPos: { left: 0, top: 0 }
    }),
    Grass({
      left: 0,
      top: 0
    }, {
      left: 16,
      top: 16
    })
  ),
  monsters: []
});

mapDb.set('MainMapSouth', {
  playerPosition: {
    left: tileManager.realPos({ left: 8, top: 0 }).left,
    top: tileManager.realPos({ left: 8, top: 0 }).top
  },
  itemLocations: [],
  environmentLocations: WarpTrigger({
    left: 0,
    top: 0,
    iterations: 17,
    direction: Constants.MovementDirections.Right,
    warpTo: 'MainMap',
    startPos: { left: 0, top: 16 }
  }).concat([
    {
      assetPath: Constants.Assets.Patch,
      left: tileManager.realPos({ left: 8, top: 0 }).left,
      top: tileManager.realPos({ left: 8, top: 0 }).top,
      layer: 0,
      warpTo: 'MainMap',
      playerPosition: {
        left: tileManager.realPos({ left: 8, top: 16 }).left,
        top: tileManager.realPos({ left: 8, top: 16 }).top
      }
    }
  ]),
  monsters: [
    Frost(8, 8)
  ]
});

mapDb.set('MainMapEast', MainMapEastData);
mapDb.set('MainMapWest', MainMapWestData);
mapDb.set('MainMap', MainMapData);
mapDb.set('DungeonF0Center', DungeonF0CenterData);
mapDb.set('DungeonF1Center', DungeonF1CenterData);
mapDb.set('DungeonF1North', DungeonF1NorthData);
mapDb.set('DungeonF1South', DungeonF1SouthData);
mapDb.set('DungeonF1West', DungeonF1WestData);
mapDb.set('DungeonF1East', DungeonF1EastData);
mapDb.set('DungeonF1NorthWest', DungeonF1NorthWestData);
mapDb.set('DungeonF1NorthEast', DungeonF1NorthEastData);
mapDb.set('DungeonF1SouthWest', DungeonF1SouthWestData);
mapDb.set('DungeonF1SouthEast', DungeonF1SouthEastData);

const buildingInteriorItems = [];
buildingInteriorItems.push({
  top: 0,
  left: 240,
  assetPath: './assets/pokeball.png',
  type: 'a PokeBall!',
  name: 'pokeball',
  valid: true,
  handler: (e, component) => {
    $('#flash-overlay').fadeToggle(100).fadeToggle(100).fadeToggle(100).fadeToggle(100);
    const newPlayerState = new Map(component.state.playerState);
    attrHandler.levelUp(newPlayerState);
    component.setState({
      logger: component.state.logger.info('PICKED UP A POKEBALL. Leveled up!'),
      playerState: newPlayerState
    }, () => {
      $('#pokeball').remove();
    });
  }
});
mapDb.set('BuildingInterior', {
  playerPosition: {
    top: 0,
    left: 96
  },
  monsters: [],
  itemLocations: buildingInteriorItems,
  environmentLocations: [
    {
      assetPath: '../assets/fence.png',
      left: 0,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/fence.png',
      left: 48,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/fence.png',
      left: 96,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/fence.png',
      left: 144,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/fence.png',
      left: 192,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/fence.png',
      left: 240,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/fence.png',
      left: 288,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/fence.png',
      left: 336,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/fence.png',
      left: 384,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/fence.png',
      left: 432,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/fence.png',
      left: 480,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/fence.png',
      left: 528,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/fence.png',
      left: 576,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/fence.png',
      left: 624,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/fence.png',
      left: 672,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/fence.png',
      left: 720,
      top: 96,
      layer: 1
    },
    {
      assetPath: '../assets/pokeball.png',
      left: 240,
      top: 672,
      layer: 0,
      warpTo: 'MainMap'
    },
  ]
});

ReactDOM.render(
  <Container mapDb={mapDb} playerState={playerState} logger={myLogger} />,
  document.getElementById('container-mount')
);
