const initialState = {
    characters: [],
    turn: 1
};

const disableCharacter = (characters, index) => {
    const updateList = [...characters];
    updateList[index].disabled = true;

    return updateList;
}

const reviveCharacter = (characters, index) => {
    const updateList = [...characters];
    updateList[index].disabled = false;

    return updateList;
}

const combat = (state = initialState, action) => {
    switch (action.type) {
        case 'START':
            return {
                ...initialState,
                characters: action.payload,
            }
        case 'PROGRESS':
            return {
                ...state,
                turn: (state.turn + 1) % state.characters.length
            };
        case 'UNDO':
            return {
                ...state,
                turn: (state.turn === 0 ? state.characters.length : state.turn) - 1
            };
        case 'DISABLE':
            return {
                ...state,
                characters: disableCharacter(state.characters, action.payload)
            }
        case 'REVIVE':
            return {
                ...state,
                characters: reviveCharacter(state.characters, action.payload)
            }
        default:
            return state;
    }
};

export default combat;
