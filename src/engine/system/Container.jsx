import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import Configuration from './Configuration';
import Constants from './Constants';
import PlayerAttributeHandler from '../actors/PlayerAttributeHandler';
import MovementValidator from '../actors/MovementValidator';
import TileManager from '../system/TileManager';
import Hud from './Hud';
import ConsoleView from './console/ConsoleView';
import MapFactory from './MapFactory';

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.movementValidator = new MovementValidator();
    this.tileManager = new TileManager();
    this.attrHandler = new PlayerAttributeHandler();
    this.monsterBattlePollHandle = null;

    this.state = {
      playerState: this.props.playerState,
      playerPosition: null,
      mapDb: this.props.mapDb,
      itemLocations: null,
      monsters: null,
      environmentLocations: null,
      logger: this.props.logger,
      currentMap: null,
      currentMapKey: null
    };

    this.potionHandler = this.potionHandler.bind(this);
    this.firstAidHandler = this.firstAidHandler.bind(this);
  }

  componentDidMount() {
    this.initializeMap(Configuration.StartMap, {
      left: this.tileManager.realPos({ left: 8, top: 13 }).left,
      top: this.tileManager.realPos({ left: 8, top: 13 }).top
    });
    this.hudArrowHandler();

    this.monsterBattlePollHandle = setInterval(() => {
      this.isNearMonster();
    }, 800);
  }

  getWarpTrigger(playerPosition) {
    for (const location of this.state.environmentLocations) {
      if (typeof location.warpTo !== 'undefined'
        && playerPosition.left === location.left && playerPosition.top === location.top) {
        return location;
      }
    }

    return null;
  }

  initializeMap(mapName, customPosition = null) {
    const newPlayerPosition = customPosition !== null
      ? customPosition : this.state.mapDb.get(mapName).playerPosition;

    const newItemLocations = this.state.mapDb.get(mapName).itemLocations;
    const newEnvironmentLocations = this.state.mapDb.get(mapName).environmentLocations;
    let newMonsters = this.state.mapDb.get(mapName).monsters;

    newMonsters = this.movementValidator.computeNextMonsterPosition(
      newMonsters,
      newEnvironmentLocations,
      this.state.playerPosition
    );
    this.state.mapDb.get(mapName).monsters = newMonsters;

    const result = MapFactory(
      mapName,
      newMonsters,
      newItemLocations,
      newEnvironmentLocations,
      newPlayerPosition
    );

    const prevMapKey = this.state.currentMapKey;
    this.attachKeyHandlers();
    this.setState({
      currentMap: result,
      currentMapKey: mapName,
      playerPosition: newPlayerPosition,
      monsters: newMonsters,
      itemLocations: newItemLocations,
      environmentLocations: newEnvironmentLocations
    }, () => {
      if (this.state.currentMapKey !== prevMapKey) {
        // this.log(`The map: ${this.state.currentMapKey}.`);
      }
      this.battleHandler();
      this.isOnTopOfItem();
    });
  }

  warpTo(warpTrigger = null) {
    if (warpTrigger == null) {
      const playerLeft = this.state.playerPosition.left;
      const playerTop = this.state.playerPosition.top;

      this.state.environmentLocations.forEach((el) => {
        if (playerLeft === el.left && playerTop === el.top
          && typeof el.warpTo !== 'undefined') {
          const warpPosition = typeof el.playerPosition !== 'undefined'
            ? el.playerPosition : this.state.playerPosition;

          this.initializeMap(el.warpTo, warpPosition);
        }
      });
    } else if (warpTrigger !== null) {
      this.initializeMap(warpTrigger.warpTo, warpTrigger.playerPosition);
    }
  }

  canObjectMove(playerPosition, direction, monsters = []) {
    return this.movementValidator.canObjectMove(
      playerPosition,
      direction,
      this.state.environmentLocations,
      monsters
    );
  }

  log(message, level = Constants.Logger.Levels.Info) {
    this.setState({
      logger: level === Constants.Logger.Levels.Debug
        ? this.state.logger.debug(message) : this.state.logger.info(message)
    });
  }

  firstAidHandler() {
    if (this.state.playerState.get('mp') > 0) {
      this.attrHandler.heal(2, this.state.playerState);
      this.state.playerState.set('mp', this.state.playerState.get('mp') - 1);

      this.setState({
        playerState: this.state.playerState
      }, () => {
        this.log('Healed 2 HP.');
      });
    } else {
      this.log('You are out of mana!');
    }
  }

  potionHandler() {
    if (this.state.playerState.get('inventory').potions > 0) {
      this.attrHandler.heal(3, this.state.playerState);
      this.state.playerState.get('inventory').potions -= 1;

      this.setState({
        playerState: this.state.playerState
      }, () => {
        this.log('Healed 3 HP.');
      });
    } else {
      this.log('You are out of potions!');
    }
  }

  hudArrowHandler() {
    $('button.arrow').on('click', () => {
      $('.level-map').addClass('selecting');
    });
  }

  /**
   If the clicked tile is too far away from the monster, then we do not attack.
   This prevents the player from blindly attacking when the enemy is within proximity.
   */
  outsideSelectionError(monster, targetLeft, targetTop) {
    const selectionDeltaLeft = Math.abs(monster.left - targetLeft);
    const selectionDeltaTop = Math.abs(monster.top - targetTop);
    return (selectionDeltaLeft > Constants.TileError && selectionDeltaTop > Constants.TileError);
  }

  battleHandler() {
    let attackedMonster = null;

    $('.level-map').off('click');
    $('.level-map').on('click', (e) => {
      const realTargetLeft = e.target.offsetLeft - e.currentTarget.offsetLeft;
      const realTargetTop = e.target.offsetTop - e.currentTarget.offsetTop;
      const playerLeft = this.state.playerPosition.left;
      const playerTop = this.state.playerPosition.top;

      this.state.mapDb.get(this.state.currentMapKey).monsters.forEach((m) => {
        if (Math.abs(m.left - realTargetLeft) <= Constants.EnemyProximity
          && Math.abs(m.top - realTargetTop) <= Constants.EnemyProximity) {
          if (Math.abs(playerLeft - m.left) <= Constants.EnemyProximity
            && Math.abs(playerTop - m.top) <= Constants.EnemyProximity) {
            if (this.outsideSelectionError(m, realTargetLeft, realTargetTop)) {
              return;
            }

            this.flashScreen('teal');
            attackedMonster = m;

            this.attrHandler.dealDamage(this.state.playerState, attackedMonster);
            this.log(`${m.name}: ${m.hp} / ${m.maxHp}`);

            if (m.hp <= 0) {
              // Remove the attacked monster
              const occurrence = this.state.mapDb.get(this.state.currentMapKey)
                .monsters.indexOf(attackedMonster);
              this.state.mapDb.get(this.state.currentMapKey).monsters.splice(occurrence, 1);

              const logMessage = { message: '' };
              this.setState({
                monsters: this.state.mapDb.get(this.state.currentMapKey).monsters,
                playerState: this.attrHandler.setXp(
                  this.state.playerState,
                  attackedMonster,
                  logMessage
                )
              }, () => {
                if (logMessage.message !== '') {
                  this.flashScreen('gold');
                  this.log(logMessage.message);
                }
                this.initializeMap(this.state.currentMapKey, this.state.playerPosition);
              });
            }
          }
        }
      });

      $('.level-map').removeClass('selecting');
    });

    return attackedMonster;
  }

  attachKeyHandlers() {
    const tileSize = Constants.TileSize;
    const topFloor = 0;
    const topCeiling = Constants.MapHeightPixels - Constants.TileSize;
    const leftFloor = 0;
    const leftCeiling = Constants.MapWidthPixels - Constants.TileSize;

    $(window).off('keydown').on('keydown', (e) => {
      const playerPosition = Object.assign({}, this.state.playerPosition);

      switch (e.keyCode) {
        case Constants.KeyBindings.Action:
          this.warpTo();
          break;
        case Constants.KeyBindings.UpArrow:
          if (this.canObjectMove(
            playerPosition,
            Constants.MovementDirections.Up,
            this.state.monsters
          ) && this.state.playerPosition.top > topFloor) {
            playerPosition.top -= tileSize;

            this.initializeMap(this.state.currentMapKey, playerPosition);
          }
          break;
        case Constants.KeyBindings.DownArrow:
          if (this.canObjectMove(
            playerPosition,
            Constants.MovementDirections.Down,
            this.state.monsters
          ) && this.state.playerPosition.top < topCeiling) {
            playerPosition.top += tileSize;

            this.initializeMap(this.state.currentMapKey, playerPosition);
          }
          break;
        case Constants.KeyBindings.LeftArrow:
          if (this.canObjectMove(
            playerPosition,
            Constants.MovementDirections.Left,
            this.state.monsters
          ) && this.state.playerPosition.left > leftFloor) {
            playerPosition.left -= tileSize;

            this.initializeMap(this.state.currentMapKey, playerPosition);
          }
          break;
        case Constants.KeyBindings.RightArrow:
          if (this.canObjectMove(
            playerPosition,
            Constants.MovementDirections.Right,
            this.state.monsters
          ) && this.state.playerPosition.left < leftCeiling) {
            playerPosition.left += tileSize;

            this.initializeMap(this.state.currentMapKey, playerPosition);
          }
          break;
        default:
          break;
      }

      this.warpTo();
      this.log(
        `> Player Position: X:[${this.state.playerPosition.left}], Y:[${this.state.playerPosition.top}]`,
        Constants.Logger.Levels.Debug
      );
    });
  }

  isNearMonster() {
    if (this.state.monsters === null) {
      return null;
    }

    let attackedMonster = null;
    this.state.monsters.forEach((loc) => {
      if ((Math.abs(loc.top - this.state.playerPosition.top) <= 2 * Constants.TileSize
          && Math.abs(loc.left - this.state.playerPosition.left) <= Constants.TileSize)
        || (Math.abs(loc.top - this.state.playerPosition.top) <= Constants.TileSize
          && Math.abs(loc.left - this.state.playerPosition.left) <= 2 * Constants.TileSize)) {
        attackedMonster = loc;
        let attackRoll = Math.floor(Math.random() * 10) + 1;
        attackRoll *= loc.attackRate;
        if (loc.top === this.state.playerPosition.top
          && loc.left === this.state.playerPosition.left) {
          attackRoll = 10;
        }
        if (attackRoll >= 5) {
          this.setState({
            playerState: this.attrHandler.damage(loc.hit, this.state.playerState)
          }, () => {
            this.flashScreen('red');
            this.log(`You have been attacked by ${loc.name}!`);

            if (this.attrHandler.isPlayerDead(this.state.playerState)) {
              this.initializeMap('LoseScreen');
            }
          });
        }
      }
    });
    return attackedMonster;
  }

  isOnTopOfItem() {
    this.attachKeyHandlers();
    this.state.itemLocations.forEach((loc) => {
      if (Math.abs(loc.top - this.state.playerPosition.top) === 0
        && Math.abs(loc.left - this.state.playerPosition.left) === 0) {
        if (loc.valid) {
          $(window).on('keydown', (e) => {
            if (e.keyCode === Constants.KeyBindings.Action) {
              loc.handler(e, this);
              loc.valid = false;
            }
            this.attachKeyHandlers();
          });

          return true;
        }
      }
      return false;
    });
    return false;
  }

  flashScreen(color) {
    $('#flash-overlay').css({ 'background-color': `${color}` })
      .fadeToggle(50)
      .fadeToggle(50)
      .fadeToggle(50)
      .fadeToggle(50);
  }

  render() {
    return (
      <div>
        <div className={'grid'}>
          <div className={'col-8'}>
            {this.state.currentMap}
            <div className={'npc-dialog-container'}>
              NPC: I am an NPC dialog. I will appear when you talk to me!
            </div>
          </div>
          <div className={'col-4'}>
            <div className={'grid'} style={{ marginLeft: '96px' }}>
              <div className={'col-12'}>
                <div id={'hud-mount'}>
                  <Hud
                    playerState={this.state.playerState}
                    firstAidHandler={this.firstAidHandler}
                    hudArrowHandler={this.hudArrowHandler}
                    potionHandler={this.potionHandler}
                  />
                </div>
              </div>
            </div>
            <div className={'grid'} style={{ marginLeft: '96px' }}>
              <div id={'console-mount'}>
                <ConsoleView logger={this.state.logger} />
              </div>
            </div>
            <div className={'grid'} style={{ marginLeft: '96px' }}>
              <div id={'gameplay'}>
                <strong>GAME KEYS (KEYBOARD)</strong>
                <p>Move: Arrows (<strong>U, D, L, R</strong>)</p>
                <p>Action: <strong>G</strong></p>
                <p>Attack: Left Mouse Button (near enemy)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  playerState: PropTypes.any,
  mapDb: PropTypes.any,
  logger: PropTypes.any
};
