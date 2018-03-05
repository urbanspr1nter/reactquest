import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const tileManager = new TileManager();

const Ogre = (left, top) => ({
  assetPath: Constants.Assets.Enemies.Ogre,
  left: tileManager.realPos({ left, top }).left,
  top: tileManager.realPos({ left, top }).top,
  Name: 'Ogre',
  layer: 1,
  attackRate: 0.8,
  hit: 5,
  hp: 7,
  maxHp: 7,
  xp: 5
});

export default Ogre;
