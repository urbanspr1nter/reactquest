import React from 'react';

/**
 * MAP IMPORTS
 */
import MainMap from '../maps/MainMap';
import MainMapNorth from '../maps/MainMapNorth';
import MainMapSouth from '../maps/MainMapSouth';
import BuildingInterior from '../maps/BuildingInterior';
import WinScreen from '../maps/WinScreen';
import LoseScreen from '../maps/LoseScreen';
import MainMapWest from '../maps/MainMapWest';
import MainMapEast from '../maps/MainMapEast';
import DungeonF0Center from '../maps/Dungeon/Floor_0/Center';
import DungeonF1Center from '../maps/Dungeon/Floor_1/Center';
import DungeonF1North from '../maps/Dungeon/Floor_1/North';
import DungeonF1South from '../maps/Dungeon/Floor_1/South';
import DungeonF1West from '../maps/Dungeon/Floor_1/West';
import DungeonF1East from '../maps/Dungeon/Floor_1/East';
import DungeonF1NorthWest from '../maps/Dungeon/Floor_1/NorthWest';
import DungeonF1SouthWest from '../maps/Dungeon/Floor_1/SouthWest';
import DungeonF1NorthEast from '../maps/Dungeon/Floor_1/NorthEast';
import DungeonF1SouthEast from '../maps/Dungeon/Floor_1/SouthEast';

const MapFactory = (
  mapName,
  newMonsters,
  newItemLocations,
  newEnvironmentLocations,
  newPlayerPosition
) => {
  let result = null;

  if (mapName === 'MainMap') {
    result = <MainMap id={'main-map'} playerPosition={newPlayerPosition} itemLocations={newItemLocations} monsters={newMonsters} environmentLocations={newEnvironmentLocations} />;
  } else if (mapName === 'MainMapNorth') {
    result = <MainMapNorth id={'main-map'} playerPosition={newPlayerPosition} monsters={newMonsters} itemLocations={newItemLocations} environmentLocations={newEnvironmentLocations} />;
  } else if (mapName === 'MainMapSouth') {
    result = <MainMapSouth id={'main-map'} playerPosition={newPlayerPosition} monsters={newMonsters} itemLocations={newItemLocations} environmentLocations={newEnvironmentLocations} />;
  } else if (mapName === 'MainMapEast') {
    result = <MainMapEast id={'main-map'} playerPosition={newPlayerPosition} monsters={newMonsters} itemLocations={newItemLocations} environmentLocations={newEnvironmentLocations} />;
  } else if (mapName === 'MainMapWest') {
    result = <MainMapWest id={'main-map'} playerPosition={newPlayerPosition} monsters={newMonsters} itemLocations={newItemLocations} environmentLocations={newEnvironmentLocations} />;
  } else if (mapName === 'DungeonF0Center') {
    result = <DungeonF0Center id={'dungeon-map'} playerPosition={newPlayerPosition} monsters={newMonsters} itemLocations={newItemLocations} environmentLocations={newEnvironmentLocations} />;
  } else if (mapName === 'DungeonF1Center') {
    result = <DungeonF1Center id={'dungeon-map'} playerPosition={newPlayerPosition} monsters={newMonsters} itemLocations={newItemLocations} environmentLocations={newEnvironmentLocations} />;
  } else if (mapName === 'DungeonF1North') {
    result = <DungeonF1North id={'dungeon-map'} playerPosition={newPlayerPosition} monsters={newMonsters} itemLocations={newItemLocations} environmentLocations={newEnvironmentLocations} />;
  } else if (mapName === 'DungeonF1South') {
    result = <DungeonF1South id={'dungeon-map'} playerPosition={newPlayerPosition} monsters={newMonsters} itemLocations={newItemLocations} environmentLocations={newEnvironmentLocations} />;
  } else if (mapName === 'DungeonF1East') {
    result = <DungeonF1East id={'dungeon-map'} playerPosition={newPlayerPosition} monsters={newMonsters} itemLocations={newItemLocations} environmentLocations={newEnvironmentLocations} />;
  } else if (mapName === 'DungeonF1West') {
    result = <DungeonF1West id={'dungeon-map'} playerPosition={newPlayerPosition} monsters={newMonsters} itemLocations={newItemLocations} environmentLocations={newEnvironmentLocations} />;
  } else if (mapName === 'DungeonF1NorthWest') {
    result = <DungeonF1NorthWest id={'dungeon-map'} playerPosition={newPlayerPosition} monsters={newMonsters} itemLocations={newItemLocations} environmentLocations={newEnvironmentLocations} />;
  } else if (mapName === 'DungeonF1NorthEast') {
    result = <DungeonF1NorthEast id={'dungeon-map'} playerPosition={newPlayerPosition} monsters={newMonsters} itemLocations={newItemLocations} environmentLocations={newEnvironmentLocations} />;
  } else if (mapName === 'DungeonF1SouthWest') {
    result = <DungeonF1SouthWest id={'dungeon-map'} playerPosition={newPlayerPosition} monsters={newMonsters} itemLocations={newItemLocations} environmentLocations={newEnvironmentLocations} />;
  } else if (mapName === 'DungeonF1SouthEast') {
    result = <DungeonF1SouthEast id={'dungeon-map'} playerPosition={newPlayerPosition} monsters={newMonsters} itemLocations={newItemLocations} environmentLocations={newEnvironmentLocations} />;
  } else if (mapName === 'LoseScreen') {
    result = <LoseScreen id={'lose-screen'} />;
  } else if (mapName === 'WinScreen') {
    result = <WinScreen id={'win-screen'} />;
  } else {
    result = <BuildingInterior id={'building-interior'} playerPosition={newPlayerPosition} itemLocations={newItemLocations} monsters={newMonsters} environmentLocations={newEnvironmentLocations} />;
  }

  return result;
};

export default MapFactory;
