import Constants from '../../system/Constants';
import TileManager from '../../system/TileManager';

const Tree = (left, top) => {
  const tileManager = new TileManager();

  const data = [
    {
      assetPath: Constants.Assets.Tree.Tree00,
      left: tileManager.realPos({ left, top }).left,
      top: tileManager.realPos({ left, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Tree.Tree01,
      left: tileManager.realPos({ left: left + 1, top }).left,
      top: tileManager.realPos({ left: left + 1, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Tree.Tree02,
      left: tileManager.realPos({ left: left + 2, top }).left,
      top: tileManager.realPos({ left: left + 2, top }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Tree.Tree03,
      left: tileManager.realPos({ left, top: top + 1 }).left,
      top: tileManager.realPos({ left, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Tree.Tree04,
      left: tileManager.realPos({ left: left + 1, top: top + 1 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Tree.Tree05,
      left: tileManager.realPos({ left: left + 2, top: top + 1 }).left,
      top: tileManager.realPos({ left: left + 2, top: top + 1 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Tree.Tree06,
      left: tileManager.realPos({ left, top: top + 2 }).left,
      top: tileManager.realPos({ left, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Tree.Tree07,
      left: tileManager.realPos({ left: left + 1, top: top + 2 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Tree.Tree08,
      left: tileManager.realPos({ left: left + 2, top: top + 2 }).left,
      top: tileManager.realPos({ left: left + 2, top: top + 2 }).top,
      layer: 1
    },
    {
      assetPath: Constants.Assets.Tree.Tree09,
      left: tileManager.realPos({ left: left + 1, top: top + 3 }).left,
      top: tileManager.realPos({ left: left + 1, top: top + 3 }).top,
      layer: 1
    }
  ];

  return data;
};

export default Tree;
