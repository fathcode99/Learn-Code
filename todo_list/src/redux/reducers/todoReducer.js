let INITIAL_STATE = {
    activities : [],
    value : []
}

const todo = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'GET_DATA' :
            return {
                ...state,
                activities:action.payload
            }
        case 'GET_DATAB' :
            return {
                ...state,
                value:action.payload
            }
        case 'ADD_VALUE' :
            return {
                ...state,
                value:state.value + 1
            }
        case 'MIN_VALUE' :
            return {
                ...state,
                value:state.value -1
            }
        default:
            return state
    }
}

export default todo