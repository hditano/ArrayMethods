export const startDungeon = (player, opponent) => {
    let [firstOpponent, ...moreOpponents] = opponent;
    startBattle(player, firstOpponent);
}

export const startBattle = (player, enemy) => {
    if(player.hitpoints > enemy.hitpoints) {
        console.log(`${player.name} Hitpoints left: ${player.hitpoints} Won Against ${enemy.name} with a leftover of ${enemy.hitpoints}`);
    }
}