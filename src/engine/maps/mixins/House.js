import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const House = (left, top) => {
  const tileManager = new TileManager();

  const data = [
    {
      assetPath: Constants.Assets.House.House01,
      left: tileManager.realPos({ left, top }).left,
      top: tileManager.realPos({ left, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House02,
      left: tileManager.realPos({ left: left + 1, top }).left,
      top: tileManager.realPos({ left: left + 1, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House03,
      left: tileManager.realPos({ left: left + 2, top }).left,
      top: tileManager.realPos({ left: left + 2, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House04,
      left: tileManager.realPos({ left: left + 3, top }).left,
      top: tileManager.realPos({ left: left + 3, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House05,
      left: tileManager.realPos({ left, top: top + 1 }).left,
      top: tileManager.realPos({ left, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House06,
      left: tileManager.realPos({ left: left + 1, top: top + 1 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House07,
      left: tileManager.realPos({ left: left + 2, top: top + 1 }).left,
      top: tileManager.realPos({ left: left + 2, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House08,
      left: tileManager.realPos({ left: left + 3, top: top + 1 }).left,
      top: tileManager.realPos({ left: left + 3, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House09,
      left: tileManager.realPos({ left, top: top + 2 }).left,
      top: tileManager.realPos({ left, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House10,
      left: tileManager.realPos({ left: left + 1, top: top + 2 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House11,
      left: tileManager.realPos({ left: left + 2, top: top + 2 }).left,
      top: tileManager.realPos({ left: left + 2, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House12,
      left: tileManager.realPos({ left: left + 3, top: top + 2 }).left,
      top: tileManager.realPos({ left: left + 3, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House13,
      left: tileManager.realPos({ left, top: top + 3 }).left,
      top: tileManager.realPos({ left, top: top + 3 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House14,
      left: tileManager.realPos({ left: left + 1, top: top + 3 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 3 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House15,
      left: tileManager.realPos({ left: left + 2, top: top + 3 }).left,
      top: tileManager.realPos({ left: left + 2, top: top + 3 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House16,
      left: tileManager.realPos({ left: left + 3, top: top + 3 }).left,
      top: tileManager.realPos({ left: left + 3, top: top + 3 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House17,
      left: tileManager.realPos({ left, top: top + 4 }).left,
      top: tileManager.realPos({ left, top: top + 4 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House18,
      left: tileManager.realPos({ left: left + 1, top: top + 4 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 4 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.House.House19,
      left: tileManager.realPos({ left: left + 2, top: top + 4 }).left,
      top: tileManager.realPos({ left: left + 2, top: top + 4 }).top,
      layer: 0,
      warpTo: 'BuildingInterior'
    },
    {
      assetPath: Constants.Assets.House.House20,
      left: tileManager.realPos({ left: left + 3, top: top + 4 }).left,
      top: tileManager.realPos({ left: left + 3, top: top + 4 }).top,
      layer: 1
    },
  ];

  return data;
};

export default House;
