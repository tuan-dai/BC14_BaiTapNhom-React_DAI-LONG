import *as ActionType from './constant'
const initialState = {
    loading: false,
    data: null,
    error: null,
}

const ListMoviePhanTrang_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LISTMOVIE_PHANTRANG_REQUEST: {
            state.loading = true
            state.data = null
            state.error = null
            return { ...state }
        }
        case ActionType.LISTMOVIE_PHANTRANG_SUCCESS: {
            state.loading = false
            state.data = action.payload
            state.error = null
            return { ...state }
        }
        case ActionType.LISTMOVIE_PHANTRANG_ERROR: {
            state.loading = false
            state.data = null
            state.error = true
            return { ...state }
        }
        default:
            return { ...state };
    }
}
export default ListMoviePhanTrang_Reducer