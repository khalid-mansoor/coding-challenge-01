import React from "react";
import { Link } from "react-router-dom";

const CategoryComponent = ({ category }) => {
  return (
    <div class="card">
      <div class="card-body text-uppercase fw-bold">{category}</div>
      <div className="card-footer">
        <Link
          to={`/${category}`}
          className="text-decoration-none text-uppercase"
        >
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryComponent;
