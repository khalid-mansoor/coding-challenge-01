// src/components/Home.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/categoryActions";
import CategoryComponent from "../components/CategoryComponent";

const Home = () => {
  const dispatch = useDispatch();
  const { categories, categoriesLoader } = useSelector(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <div className="container mt-5">
        <h1> Application </h1>
        <div className="row mt-5">
          {!categoriesLoader ? (
            categories &&
            categories?.map((category) => (
              <div className="col-12 col-md-3 col-sm-12 mb-3 mb-lg-3">
                <CategoryComponent category={category} />
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

export default Home;
