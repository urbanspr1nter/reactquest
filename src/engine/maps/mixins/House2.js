import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const House2 = (left, top) => {
  const tileManager = new TileManager();

  const data = [
    {
      assetPath: Constants.Assets.House2.House01,
      left: tileManager.realPos({ left, top }).left,
      top: tileManager.realPos({ left, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House2.House02,
      left: tileManager.realPos({ left: left + 1, top }).left,
      top: tileManager.realPos({ left: left + 1, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House2.House03,
      left: tileManager.realPos({ left: left + 2, top }).left,
      top: tileManager.realPos({ left: left + 2, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House2.House04,
      left: tileManager.realPos({ left: left + 3, top }).left,
      top: tileManager.realPos({ left: left + 3, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House2.House05,
      left: tileManager.realPos({ left, top: top + 1 }).left,
      top: tileManager.realPos({ left, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House2.House06,
      left: tileManager.realPos({ left: left + 1, top: top + 1 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House2.House07,
      left: tileManager.realPos({ left: left + 2, top: top + 1 }).left,
      top: tileManager.realPos({ left: left + 2, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House2.House08,
      left: tileManager.realPos({ left: left + 3, top: top + 1 }).left,
      top: tileManager.realPos({ left: left + 3, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House2.House09,
      left: tileManager.realPos({ left, top: top + 2 }).left,
      top: tileManager.realPos({ left, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House2.House10,
      left: tileManager.realPos({ left: left + 1, top: top + 2 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House2.House11,
      left: tileManager.realPos({ left: left + 2, top: top + 2 }).left,
      top: tileManager.realPos({ left: left + 2, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House2.House12,
      left: tileManager.realPos({ left: left + 3, top: top + 2 }).left,
      top: tileManager.realPos({ left: left + 3, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House2.House13,
      left: tileManager.realPos({ left, top: top + 3 }).left,
      top: tileManager.realPos({ left, top: top + 3 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House2.House14,
      left: tileManager.realPos({ left: left + 1, top: top + 3 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 3 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House2.House15,
      left: tileManager.realPos({ left: left + 2, top: top + 3 }).left,
      top: tileManager.realPos({ left: left + 2, top: top + 3 }).top,
      layer: 0,
      warpTo: 'BuildingInterior'
    },
    {
      assetPath: Constants.Assets.House2.House16,
      left: tileManager.realPos({ left: left + 3, top: top + 3 }).left,
      top: tileManager.realPos({ left: left + 3, top: top + 3 }).top,
      layer: 1
    }
  ];

  return data;
};

export default House2;
