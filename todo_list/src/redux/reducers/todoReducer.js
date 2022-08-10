let INITIAL_STATE = {
    activities: [
        {
            id: 1,
            name: "Makan"
        },
        {
            id: 2,
            name: "Minum"
        },
        {
            id: 3,
            name: "Minum"
        }
    ]
}

const todo = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                activities: action.payload
            }
        default:
            return state
    }
}

export default todo