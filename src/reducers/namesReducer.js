export const getNames = names => {
    return {
        type: 'GET_NAMES',
        data: names
    }
}

export const resetNames = () => {
    return {
        type: 'RESET_NAMES'
    }
}

const namesReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_NAMES':
            return action.data
        case 'RESET_NAMES':
            const newState = []
            return newState
        default:
            return state
    }
}

export default namesReducer
