const playerAttributes = {
  strength: 10,
  defense: 10,
  speed: 10,
  intelligence: 10
};

const playerState = new Map();
playerState.set('name', 'Roger');
playerState.set('attributes', playerAttributes);
playerState.set('level', 1);
playerState.set('hp', 100);
playerState.set('maxHp', 100);
playerState.set('mp', 10);
playerState.set('maxMp', 10);
playerState.set('gold', 100);
playerState.set('xp', 0);
playerState.set('inventory', {
  potions: 0
});


const Configuration = {
  Debug: false,
  StartMap: 'DungeonF0Center',
  PlayerState: playerState
};

export default Configuration;
