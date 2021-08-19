export const getData = data => {
    return async dispatch => {
        dispatch({
            type: 'GET_DATA',
            data: data
        })
    }
}

export const resetData = () => {
    return async dispatch => {
        dispatch({
            type: 'RESET_DATA'
        })
    }
}

const dataReducer = (state = [], action) => {
    console.log('ACTION.DATA: ', action.data)
    switch (action.type) {
        case 'GET_DATA':
            return [...state, action.data]
        case 'RESET_DATA':
            state = []
            return state
        default:
            return state
    }
}

export default dataReducer
