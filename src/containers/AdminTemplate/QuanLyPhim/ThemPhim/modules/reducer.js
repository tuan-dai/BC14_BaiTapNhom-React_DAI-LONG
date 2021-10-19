import *as ActionType from './constant'
const initialState = {
    loading: false,
    data: null,
    error: null,
    thongtinphim: {}
}

const AddFilm_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADDFILM_REQUEST: {
            state.loading = true
            state.data = null
            state.error = null
            return { ...state }
        }
        case ActionType.ADDFILM_SUCCESS: {
            state.loading = false
            state.data = action.payload
            state.error = null
            return { ...state }
        }
        case ActionType.LAYTHONGTINFILM_SUCCESS: {
            state.loading = false
            state.thongtinphim = action.payload
            state.error = null
            return { ...state }
        }
        case ActionType.ADDFILM_ERROR: {
            state.loading = false
            state.data = null
            state.error = action.payload
            return { ...state }
        }

        default:
            return { ...state };
    }
}
export default AddFilm_Reducer