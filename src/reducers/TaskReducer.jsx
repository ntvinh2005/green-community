const TaskReducer = (state, action) => {
    const {type, payload} = action
    console.log(1, type, payload)
    switch (type){
        case 'SET_QUESTS':
            return { 
                ...state,
                quests: payload.quests,
            }

        default: return state
    }
}
export default TaskReducer