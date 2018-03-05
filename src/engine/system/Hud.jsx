import React from 'react';
import PropTypes from 'prop-types';

export default class Hud extends React.Component {
  render() {
    return (
      <div id={'hud'}>
        <div
          id={'hud-overlay'}
          style={{
          display: 'none',
          position: 'absolute',
          backgroundColor: '#ff0000',
          width: '816px',
          height: '70px'
        }}
        >
          &nbsp;
        </div>
        <div className={'grid'}>
          <div className={'col-3'}>
            NAME
          </div>
          <div className={'col-3'}>
            {this.props.playerState.get('name')}
          </div>
        </div>
        <div className={'grid'}>
          <div className={'col-3'}>
            LEVEL
          </div>
          <div className={'col-3'}>
            {this.props.playerState.get('level')}
          </div>
          <div className={'col-3'}>
            XP
          </div>
          <div className={'col-3'}>
            {this.props.playerState.get('xp')}
          </div>
        </div>
        <hr />
        <div className={'grid'}>
          <div className={'col-3'}>
            HP
          </div>
          <div className={'col-4'}>
            {this.props.playerState.get('hp')}
            /
            {this.props.playerState.get('maxHp')}
          </div>
        </div>
        <div className={'grid'}>
          <div className={'col-3'}>
            MP
          </div>
          <div className={'col-4'}>
            {this.props.playerState.get('mp')}
            /
            {this.props.playerState.get('maxMp')}
          </div>
        </div>
        <hr />
        <div className={'grid'}>
          <div className={'col-3'}>
            STR:
          </div>
          <div className={'col-3'}>
            {this.props.playerState.get('attributes').strength}
          </div>
          <div className={'col-3'}>
            DEF:
          </div>
          <div className={'col-3'}>
            {this.props.playerState.get('attributes').defense}
          </div>
        </div>
        <div className={'grid'}>
          <div className={'col-3'}>
            SPD:
          </div>
          <div className={'col-3'}>
            {this.props.playerState.get('attributes').speed}
          </div>
          <div className={'col-3'}>
            INT:
          </div>
          <div className={'col-3'}>
            {this.props.playerState.get('attributes').intelligence}
          </div>
        </div>
        <hr />
        <div className={'grid'}>
          <div className={'col-4'}>
            GOLD
          </div>
          <div className={'col-4'} id={'gold-mount'}>
            {this.props.playerState.get('gold')}
          </div>
        </div>
        <div className={'grid'}>
          <div className={'col-4'}>
            SKILLS
          </div>
          <div className={'col-4'}>
            ITEMS
          </div>
        </div>
        <div className={'grid'}>
          <div className={'col-4'}>
            <button className={'arrow'} type={'button'} onClick={this.props.hudArrowHandler} />
            <button className={'first-aid'} type={'button'} onClick={this.props.firstAidHandler} />
          </div>
          <div className={'col-5'}>
            <button className={'potion'} type={'button'} onClick={this.props.potionHandler} />
            x {this.props.playerState.get('inventory').potions}
          </div>
        </div>
      </div>
    );
  }
}

Hud.propTypes = {
  playerState: PropTypes.any,
  hudArrowHandler: PropTypes.any,
  firstAidHandler: PropTypes.any,
  potionHandler: PropTypes.any,
};
