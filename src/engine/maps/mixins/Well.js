import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const Well = (left, top) => {
  const tileManager = new TileManager();

  const data = [
    {
      assetPath: Constants.Assets.Well.Well01,
      left: tileManager.realPos({ left, top }).left,
      top: tileManager.realPos({ left, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Well.Well02,
      left: tileManager.realPos({ left: left + 1, top }).left,
      top: tileManager.realPos({ left: left + 1, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Well.Well03,
      left: tileManager.realPos({ left, top: top + 1 }).left,
      top: tileManager.realPos({ left, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Well.Well04,
      left: tileManager.realPos({ left: left + 1, top: top + 1 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Well.Well05,
      left: tileManager.realPos({ left, top: top + 2 }).left,
      top: tileManager.realPos({ left, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Well.Well06,
      left: tileManager.realPos({ left: left + 1, top: top + 2 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 2 }).top,
      layer: 1
    }
  ];

  return data;
};

export default Well;
