import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const LargeBush = (left, top) => {
  const tileManager = new TileManager();

  const data = [
    {
      assetPath: Constants.Assets.LargeBush.LargeBush01,
      left: tileManager.realPos({ left, top }).left,
      top: tileManager.realPos({ left, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.LargeBush.LargeBush02,
      left: tileManager.realPos({ left: left + 1, top }).left,
      top: tileManager.realPos({ left: left + 1, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.LargeBush.LargeBush03,
      left: tileManager.realPos({ left, top: top + 1 }).left,
      top: tileManager.realPos({ left, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.LargeBush.LargeBush04,
      left: tileManager.realPos({ left: left + 1, top: top + 1 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 1 }).top,
      layer: 1
    }
  ];

  return data;
};

export default LargeBush;
