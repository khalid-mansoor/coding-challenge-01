// src/components/Home.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/categoryActions";

const Home = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <h1> Application </h1>
      <ul>
        {categories?.map((category) => (
          <li key={category}>
            <Link to={`/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
