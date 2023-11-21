import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryItems,
  getCategoriesItemsLoader,
} from "../store/actions/categoryActions";
import CategoryDetails from "../components/CategoryDetails";

const Category = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { selectedCategory, setItemsLoader } = useSelector(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(fetchCategoryItems(category));
  }, [category]);

  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-uppercase"> {category} </h1>
        <div className="row mt-5">
          {!setItemsLoader ? (
            selectedCategory &&
            selectedCategory?.results?.map((categoryDetails) => (
              <div
                className="col-12 col-md-3 col-sm-12 mb-3 mb-lg-3"
                key={categoryDetails.id}
              >
                <CategoryDetails categoryDetails={categoryDetails} />
              </div>
            ))
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              <div className="spinner-border text-primary" role="status"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
