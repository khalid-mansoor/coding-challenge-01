import { SET_CATEGORIES, SET_SELECTED_CATEGORY } from "../types";

const initialState = {
  categories: [],
  selectedCategory: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_SELECTED_CATEGORY:
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};

export default categoryReducer;
