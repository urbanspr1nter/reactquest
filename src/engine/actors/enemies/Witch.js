import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const tileManager = new TileManager();

const Witch = (left, top) => ({
  assetPath: Constants.Assets.Enemies.Witch,
  left: tileManager.realPos({ left, top }).left,
  top: tileManager.realPos({ left, top }).top,
  name: 'Witch',
  layer: 1,
  attackRate: 1.1,
  hit: 8,
  hp: 13,
  maxHp: 13,
  xp: 17
});

export default Witch;
