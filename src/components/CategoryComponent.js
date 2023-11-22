import React from "react";
import { Link } from "react-router-dom";

const CategoryComponent = ({ category, imageUrl }) => {
  return (
    <div className="card">
      <img
        src={imageUrl}
        className="card-img-top"
        height={"200px"}
        width={100}
        alt={`${category} Image`}
      />
      <div className="card-body">
        <h5 className="card-title">{category}</h5>
        <Link to={`/${category}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CategoryComponent;
