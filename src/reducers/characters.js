const initialState = {
    count: 0,
    players: [],
    enemies: [],
};

const characters = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            return {
                ...state,
                players: [...state.players, action.payload]
            }
        case 'ADD_ENEMY':
            return {
                ...state,
                enemies: [...state.enemies, action.payload]
            }
        case 'CLEAR_ENEMIES':
            return {
                ...state,
                enemies: []
            }
        default:
            return state;
    }
};

export default characters;
