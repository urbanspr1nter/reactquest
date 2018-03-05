import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const tileManager = new TileManager();

const Naga = (left, top) => ({
  assetPath: Constants.Assets.Enemies.Naga,
  left: tileManager.realPos({ left, top }).left,
  top: tileManager.realPos({ left, top }).top,
  name: 'Naga',
  layer: 1,
  attackRate: 0.9,
  hit: 6,
  hp: 8,
  maxHp: 8,
  xp: 10
});

export default Naga;
