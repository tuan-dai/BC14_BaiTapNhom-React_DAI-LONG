import *as ActionType from './constant'
const initialState = {
    loading: false,
    data: null,
    error: null,
}

const DetailMovie_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_DETAILMOVIE_REQUEST: {
            state.loading = true
            state.data = null
            state.error = null
            return { ...state }
        }
        case ActionType.GET_DETAILMOVIE_SUCCESS: {
            state.loading = false
            state.data = action.payload
            state.error = null
            return { ...state }
        }
        case ActionType.GET_DETAILMOVIE_ERROR: {
            state.loading = false
            state.data = null
            state.error = true
            return { ...state }
        }
        default:
            return { ...state };
    }
}
export default DetailMovie_Reducer