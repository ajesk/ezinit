import EnemyList from "../enemy/EnemyList";

export const zipParticipants = (players, enemies) => {
    const participants = [];
    participants.push(...enemies.map((enemy) => {
        return {
            ...enemy,
            initiative: parseInt(enemy.initiative)
        }
    }));

    participants.push(...players.map(player => {
        player.initiative = parseInt(player.roll) + parseInt(player.initMod);
        return player
    }));

    participants.sort((a, b) => {
        if (a.initiative > b.initiative) return -1;
        if (a.initiative < b.initiative) return 1;

        // players take precedence
        if (a.type === 'player' && b.type === 'enemy') return -1;
        if (b.type === 'enemy' && b.type === 'player') return 1;

        return 0;
    });

    return participants;
};

export const addRolls = (players = [], rolls) => {
    return players.map((player, i) => {
        const playerWithRoll = {...player};
        playerWithRoll.roll = rolls[i];
        return playerWithRoll;
    });
}