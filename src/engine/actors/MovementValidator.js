import Constants from '../system/Constants';

export default class MovementValidator {
  computeNextMonsterPosition(monsters, environmentLocations, playerPosition) {
    if (playerPosition === null) {
      return monsters;
    }

    monsters.forEach((m) => {
      const monsterPlayerLeftDelta = Math.abs(m.left - playerPosition.left);
      const monsterPlayerTopDelta = Math.abs(m.top - playerPosition.top);

      if (monsterPlayerLeftDelta <= 144 && monsterPlayerTopDelta <= 144) {
        if (monsterPlayerLeftDelta >= Constants.EnemyProximity) {
          if (Math.abs(m.left + (Constants.TileSize - playerPosition.left))
            <= monsterPlayerLeftDelta
            && this.canObjectMove({
              left: m.left,
              top: m.top
            }, Constants.MovementDirections.Right, environmentLocations, monsters)) {
            m.left += Constants.TileSize;
          } else if (Math.abs(m.left - Constants.TileSize - playerPosition.left)
            <= monsterPlayerLeftDelta
            && this.canObjectMove({
              left: m.left,
              top: m.top
            }, Constants.MovementDirections.Left, environmentLocations, monsters)) {
            m.left -= Constants.TileSize;
          }
        }
        if (monsterPlayerTopDelta >= Constants.EnemyProximity) {
          if (Math.abs(m.top + (Constants.TileSize - playerPosition.top))
            <= monsterPlayerTopDelta
            && this.canObjectMove({
              left: m.left,
              top: m.top
            }, Constants.MovementDirections.Down, environmentLocations, monsters)) {
            m.top += Constants.TileSize;
          } else if (Math.abs(m.top - Constants.TileSize - playerPosition.top)
            <= monsterPlayerTopDelta
            && this.canObjectMove({
              left: m.left,
              top: m.top
            }, Constants.MovementDirections.Up, environmentLocations, monsters)) {
            m.top -= Constants.TileSize;
          }
        }
      }
    });

    return monsters;
  }

  canObjectMove(playerPosition, direction, environmentLocations, monsters = []) {
    const tileSize = Constants.TileSize;

    let canMove = true;

    environmentLocations.forEach((loc) => {
      const envTop = loc.top;
      const envLeft = loc.left;
      const { layer } = loc;

      if (direction === Constants.MovementDirections.Up) {
        if (layer > 0 && playerPosition.top - tileSize === envTop
          && playerPosition.left === envLeft) {
          canMove = false;
        }
      } else if (direction === Constants.MovementDirections.Down) {
        if (layer > 0 && playerPosition.top + tileSize === envTop
          && playerPosition.left === envLeft) {
          canMove = false;
        }
      } else if (direction === Constants.MovementDirections.Left) {
        if (layer > 0 && playerPosition.left - tileSize === envLeft
          && playerPosition.top === envTop) {
          canMove = false;
        }
      } else if (direction === Constants.MovementDirections.Right) {
        if (layer > 0 && playerPosition.left + tileSize === envLeft
          && playerPosition.top === envTop) {
          canMove = false;
        }
      }
    });

    monsters.forEach((m) => {
      const envTop = m.top;
      const envLeft = m.left;
      const { layer } = m;

      if (direction === Constants.MovementDirections.Up) {
        if (layer > 0 && playerPosition.top - tileSize === envTop
          && playerPosition.left === envLeft) {
          canMove = false;
        }
      } else if (direction === Constants.MovementDirections.Down) {
        if (layer > 0 && playerPosition.top + tileSize === envTop
          && playerPosition.left === envLeft) {
          canMove = false;
        }
      } else if (direction === Constants.MovementDirections.Left) {
        if (layer > 0 && playerPosition.left - tileSize === envLeft
          && playerPosition.top === envTop) {
          canMove = false;
        }
      } else if (direction === Constants.MovementDirections.Right) {
        if (layer > 0 && playerPosition.left + tileSize === envLeft
          && playerPosition.top === envTop) {
          canMove = false;
        }
      }
    });

    return canMove;
  }
}
