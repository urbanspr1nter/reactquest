export default class TileManager {
  realPos(tile = { left: 0, top: 0 }) {
    const pos = {
      left: Math.round(tile.left * 48),
      top: Math.round(tile.top * 48),
    };

    return pos;
  }

  tilePos(pos = { left: 0, top: 0 }) {
    const tile = {
      left: Math.round(pos.left / 48),
      top: Math.round(pos.top / 48),
    };

    return tile;
  }
}
