const MallReducer = (state, action) => {
    const {type, payload} = action
    console.log(type, payload)
    switch (type){
        case 'SET_ITEMS':
            return { 
                ...state,
                shop_items: payload.shop_items,
            }

        default: return state
    }
}
export default MallReducer