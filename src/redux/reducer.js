import * as types from "./actionType";

const initialState = {
  article: [],
  loading: false,
  user: null,
};

const allReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.GET_ARTICLE:
      return {
        ...state,
        article: action.payload,
      };
      case types.SET_LOADING:
        return{
          ...state,
          loading: action.payload
        }
    default:
      return state;
  }
};

export default allReducer;
