import *as ActionType from './constant'
const initialState = {
    loading: false,
    data: null,
    keyword: '',
    error: null,
}

const ListMovie_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LISTMOVIE_REQUEST: {
            state.loading = true
            state.data = null
            state.error = null
            return { ...state }
        }
        case ActionType.LISTMOVIE_SUCCESS: {
            state.loading = false
            state.data = action.payload
            state.error = null
            return { ...state }
        }
        case ActionType.LISTMOVIE_ERROR: {
            state.loading = false
            state.data = null
            state.error = true
            return { ...state }
        }
        case ActionType.SEARCH_MOVIE: {
            state.keyword = action.payload
            return { ...state }
        }
        case ActionType.DELETE_MOVIE: {
            state.loading = false
            state.data = action.payload
            state.error = null
            return { ...state }
        }
        default:
            return { ...state };
    }
}
export default ListMovie_Reducer