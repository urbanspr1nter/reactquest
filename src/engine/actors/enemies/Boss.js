import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const tileManager = new TileManager();

const Boss = (left, top) => ({
  assetPath: Constants.Assets.Enemies.Boss,
  left: tileManager.realPos({ left, top }).left,
  top: tileManager.realPos({ left, top }).top,
  name: 'Boss Man',
  layer: 1,
  attackRate: 1.5,
  hit: 10,
  hp: 20,
  maxHp: 20,
  xp: 20
});

export default Boss;
