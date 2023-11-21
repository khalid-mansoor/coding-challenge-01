import axios from "axios";
import {
  SET_CATEGORIES,
  SET_SELECTED_CATEGORY,
  GET_CATEGORIES_LOADER,
  SET_ITEMS_LOADER,
} from "../types";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setSelectedCategory = (category) => ({
  type: SET_SELECTED_CATEGORY,
  payload: category,
});

export const getCategoriesLoader = (category) => ({
  type: GET_CATEGORIES_LOADER,
  payload: category,
});
export const getCategoriesItemsLoader = (category) => ({
  type: SET_ITEMS_LOADER,
  payload: category,
});
export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(getCategoriesLoader(true));

    const response = await axios.get("https://swapi.dev/api/");
    dispatch(setCategories(Object.keys(response.data)));
    dispatch(getCategoriesLoader(false));
  } catch (error) {
    console.error("Error fetching categories:", error);
    dispatch(getCategoriesLoader(false));
  }
};

export const fetchCategoryItems = (category) => async (dispatch) => {
  try {
    dispatch(getCategoriesItemsLoader(true));

    const response = await axios.get(`https://swapi.dev/api/${category}`);
    dispatch(setSelectedCategory(response.data));
    dispatch(getCategoriesItemsLoader(false));
  } catch (error) {
    console.error(`Error fetching ${category} items:`, error);
    dispatch(getCategoriesItemsLoader(false));
  }
};
