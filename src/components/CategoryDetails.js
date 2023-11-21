import React, { useEffect, useState } from "react";

const CategoryDetails = ({ categoryDetails }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (categoryDetails) {
      setData(categoryDetails);
    }
  }, [categoryDetails]);
  return (
    <div class="card">
      <div class="card-body">{data?.name ? data?.name : data?.title}</div>
    </div>
  );
};

export default CategoryDetails;
