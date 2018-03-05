import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const tileManager = new TileManager();

const Griffon = (left, top) => ({
  assetPath: Constants.Assets.Enemies.Griffon,
  left: tileManager.realPos({ left, top }).left,
  top: tileManager.realPos({ left, top }).top,
  name: 'Griffon',
  layer: 1,
  attackRate: 1.0,
  hit: 7,
  hp: 10,
  maxHp: 10,
  xp: 15
});

export default Griffon;
