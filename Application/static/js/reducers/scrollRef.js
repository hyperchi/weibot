const scrollRef = (state = {ref: null}, action) => {
    switch (action.type) {
        case 'SET_REF':
            return {
                repairRef: action.repairRef || state.repairRef,
                carousalRef: action.carousalRef || state.carousalRef,
            }
        default:
        return state
    }
}

export default scrollRef