import axios from "axios";
import { SET_CATEGORIES, SET_SELECTED_CATEGORY } from "../types";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setSelectedCategory = (category) => ({
  type: SET_SELECTED_CATEGORY,
  payload: category,
});

export const fetchCategories = () => async (dispatch) => {
  try {
    axios
      .get("https://swapi.dev/api/")
      .then((response) => {
        dispatch(setCategories(Object.keys(response.data)));
      })
      .catch((error) => console.error("Error fetching categories:", error));
  } catch (err) {
    console.log("err: ", err);
  }
};

export const fetchCategoryItems = (category) => async (dispatch) => {
  console.log("category: ", category);
  try {
    axios
      .get(`https://swapi.dev/api/${category}`)
      .then((response) => {
        dispatch(setSelectedCategory(response.data));
        console.log("response.data: ", response.data);
      })
      .catch((error) =>
        console.error(`Error fetching ${category} items:`, error)
      );
  } catch (err) {
    console.log("err: ", err);
  }
};
