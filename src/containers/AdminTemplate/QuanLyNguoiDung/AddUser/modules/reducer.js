import * as ActionType from "./constants";
const initialState = {
    loading: false,
    data: null,
    error: null,
    userInfor: null,
};
const AddUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_USER_REQUEST:{
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }
            
        case ActionType.ADD_USER_SUCCESS:{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }
            
        case ActionType.ADD_USER_FAILED: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }
           
        case ActionType.GET_USER: {
            state.loading = false;
            state.userInfor = action.payload;
            state.error = null;
<<<<<<< HEAD
            return { ...state };
        case ActionType.EDIT_USER:
=======
            return {...state}
        }
            
        case ActionType.EDIT_USER: {
>>>>>>> cb53865a19db0d6c538f5bf1aa9a1f9a2a3bb30a
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }
            
        default:
            return { ...state };
    }
};
export default AddUserReducer;