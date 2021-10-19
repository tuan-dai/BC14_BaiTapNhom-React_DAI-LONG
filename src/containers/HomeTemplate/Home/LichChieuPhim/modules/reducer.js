import *as ActionType from './constant'
const initialState = {
    cumrap: [],
}

const Rap_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_CUMRAP: {
            state.cumrap = action.payload
            return { ...state }
        }
        default:
            return { ...state };
    }
}
export default Rap_Reducer