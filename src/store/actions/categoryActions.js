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

export const fetchCategories = () => {
  return () => {
    console.log("getting all categories");
  };
};

export const fetchCategoryItems = (category) => {
  return () => {
    console.log("category", category);
  };
};
