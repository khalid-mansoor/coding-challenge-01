import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryItems } from "../store/actions/categoryActions";

const Category = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategoryItems(category));
  }, [category, dispatch]);

  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {selectedCategory &&
          selectedCategory?.results?.map(() => {
            return <li>ew</li>;
          })}
      </ul>
    </div>
  );
};

export default Category;
