import {
  SET_CATEGORIES,
  SET_SELECTED_CATEGORY,
  GET_CATEGORIES_LOADER,
  SET_ITEMS_LOADER,
} from "../types";

const initialState = {
  categories: [],
  selectedCategory: null,
  categoriesLoader: false,
  setItemsLoader: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_SELECTED_CATEGORY:
      return { ...state, selectedCategory: action.payload };
    case GET_CATEGORIES_LOADER:
      return { ...state, categoriesLoader: action.payload };
    case SET_ITEMS_LOADER:
      return { ...state, setItemsLoader: action.payload };
    default:
      return state;
  }
};

export default categoryReducer;
