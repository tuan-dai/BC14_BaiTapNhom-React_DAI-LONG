import * as ActionType from "./constant";
const initialState = {
    loading: false,
    data: null,
    error: null,
};

const SignUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SIGN_UP_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };

        case ActionType.SIGN_UP_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };

        case ActionType.SIGN_UP_FAILED:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
};
export default SignUpReducer;