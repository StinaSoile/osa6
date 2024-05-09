const reducer = (state = '', action) => {
    //   console.log('state now: ', state)
    //   console.log('action', action)>

    switch (action.type) {
        case 'FILTERED': {
            return action.payload.text
        }
        default:
            return state
    }
}

export const filter = (text) => {
    return {
        type: 'FILTERED',
        payload: { text }
    }
}

export default reducer
