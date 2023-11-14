export const startCombat = (participants) => {
    return {
        type: 'START',
        payload: participants
    }
}

export const progressCombat = () => {
    return {
        type: 'PROGRESS',
    }
}

export const undo = () => {
    return {
        type: 'UNDO'
    }
}

export const disable = (index) => {
    return {
        type: 'DISABLE',
        payload: index
    }
}

