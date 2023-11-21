// src/components/Home.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/categoryActions";
import CategoryComponent from "../components/CategoryComponent";

const Home = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <h1> Application </h1>
      <div className="container">
        <div className="row">
          {categories &&
            categories?.map((category) => (
              <Link to={`/${category}`}>
                <CategoryComponent category={category} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
