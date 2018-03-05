export default class PlayerAttributeHandler {
  dealDamage(playerState, monster) {
    monster.hp -= Math.round(playerState.get('attributes').strength * 0.67);

    return monster;
  }

  setXp(playerState, monster, logOutput) {
    const newXp = playerState.get('xp') + monster.xp;

    if (newXp >= playerState.get('level') * 10) {
      this.levelUp(playerState);
      logOutput.message = 'You have leveled up!';
    }
    playerState.set('xp', newXp);

    return playerState;
  }

  levelUp(playerState) {
    const newAttributes = Object.assign({}, playerState.get('attributes'));
    const level = playerState.get('level') + 1;

    playerState.set('level', level);
    if (level % 2 === 0) {
      newAttributes.strength += 1;
      newAttributes.defense += 1;
    } else {
      newAttributes.speed += 1;
      newAttributes.defense += 1;
    }

    playerState.set('maxHp', playerState.get('maxHp') + 5);
    playerState.set('attributes', newAttributes);

    return playerState;
  }

  heal(hp, playerState) {
    const currentHp = playerState.get('hp');
    const currentMaxHp = playerState.get('maxHp');

    if (currentHp + hp <= currentMaxHp) {
      playerState.set('hp', currentHp + hp);
    } else {
      playerState.set('hp', currentMaxHp);
    }

    return playerState;
  }

  damage(hp, playerState) {
    const currentHp = playerState.get('hp');

    if (currentHp - hp >= 1) {
      playerState.set('hp', currentHp - hp);
    } else {
      playerState.set('hp', 0);
    }

    return playerState;
  }

  addToInventory(itemKey, qty, playerState) {
    playerState.get('inventory')[itemKey] += qty;

    return playerState;
  }

  isPlayerDead(playerState) {
    return playerState.get('hp') === 0;
  }
}
