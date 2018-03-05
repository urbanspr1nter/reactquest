import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const tileManager = new TileManager();

const Frost = (left, top) => ({
  assetPath: Constants.Assets.Enemies.Frost,
  left: tileManager.realPos({ left, top }).left,
  top: tileManager.realPos({ left, top }).top,
  name: 'Frost',
  layer: 1,
  attackRate: 0.5,
  hit: 3,
  hp: 3,
  maxHp: 3,
  xp: 3,
});

export default Frost;
