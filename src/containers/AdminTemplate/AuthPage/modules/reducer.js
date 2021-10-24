import *as ActionType from './constant'

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const AuthPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.AUTH_PAGE_REQUEST: {
            state.loading = true
            state.data = null
            state.error = null
            return { ...state }
        }
        case ActionType.AUTH_PAGE_SUCCESS: {
            state.loading = false
            state.data = action.payload
            state.error = null
            return { ...state }
        }
        case ActionType.AUTH_PAGE_ERROR: {
            state.loading = false
            state.data = null
            state.error = action.payload
            return { ...state }
        }
        case ActionType.AUTH_CLEAR_DATA: {
            state.loading = false
            state.data = null
            state.error = null
            return { ...state }
        }
        default:
            return { ...state };
    }
}
export default AuthPageReducer