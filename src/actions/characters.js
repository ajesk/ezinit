export const addPlayer = (player) => {
    return {
        type: 'ADD_PLAYER',
        payload: player
    }
}

export const addEnemy = (enemy) => {
    return {
        type: 'ADD_ENEMY',
        payload: enemy
    }
}

export const clearEnemies = () => {
    return {
        type: 'CLEAR_ENEMIES'
    }
}