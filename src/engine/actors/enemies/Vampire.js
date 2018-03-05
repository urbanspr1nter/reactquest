import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const tileManager = new TileManager();

const Vampire = (left, top) => ({
  assetPath: Constants.Assets.Enemies.Vampire,
  left: tileManager.realPos({ left, top }).left,
  top: tileManager.realPos({ left, top }).top,
  name: 'Vampire',
  layer: 1,
  attackRate: 0.7,
  hit: 4,
  hp: 5,
  maxHp: 5,
  xp: 3,
});

export default Vampire;
