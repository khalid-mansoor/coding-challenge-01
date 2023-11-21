import React from "react";

const CategoryComponent = ({ category }) => {
  return (
    <div class="card">
      <div class="card-body">{category}</div>
    </div>
  );
};

export default CategoryComponent;
