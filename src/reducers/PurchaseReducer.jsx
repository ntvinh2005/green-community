const PurchaseReducer = (state, action) => {
    const {type, payload} = action
    console.log(type, payload)
    switch (type){
        case 'SET_REQUESTS':
            return { 
                ...state,
                requests: payload.requests,
            }

        default: return state
    }
}
export default PurchaseReducer