import * as ActionType from "./constants";
const initialState = {
  loading: false,
  data: null,
  error: null,
  keyword: "",
  userInfor: null,
};
const ListStaffReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.MANAGER_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ActionType.MANAGER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.MANAGER_FAILED:
      state.loading = false;
      state.loading = null;
      state.error = action.payload;
      return { ...state };
    case ActionType.SEARCH_USER:
      state.keyword = action.payload;
      return { ...state };
    case ActionType.DELETE_USER:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    default:
      return { ...state };
  }
};
export default ListStaffReducer;
