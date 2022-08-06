export const getData = (data) => {
    return {
        type : 'GET_DATA',
        payload : data
    }
}

export const getDatab = (data) => {
    return {
        type : 'GET_DATAB',
        payload : parseInt(data)
    }
}

export const addValue = () => {
    return {
        type :'ADD_VALUE',
    }
}
export const minValue = () => {
    return {
        type :'MIN_VALUE',
    }
}