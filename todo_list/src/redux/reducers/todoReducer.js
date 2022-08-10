let INITIAL_STATE = {
    activities : []
}

const todo = (state = INITIAL_STATE, act) => {
    switch(act.type) {
        case 'GET_DATA' :
            return {
                ...state,
                activities:act.payload
            }
        default:
            return state
    }
}

export default todo