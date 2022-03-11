import * as types from "./actionType";

const initialState = {
  article: [],
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
    default:
      return state;
  }
};

export default allReducer;
