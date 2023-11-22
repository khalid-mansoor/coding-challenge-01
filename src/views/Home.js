import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/categoryActions";
import CategoryComponent from "../components/CategoryComponent";

const Home = () => {
  const categoryImages = {
    people:
      "https://plus.unsplash.com/premium_photo-1664302656889-e0ff44331843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3Jvd2R8ZW58MHx8MHx8fDA%3D",
    planets:
      "https://media.istockphoto.com/id/1162834347/photo/flying-over-the-earths-surface-eurasia-and-australia-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=F4qlMXzRKbvTGUTB7DZPBkYanZVUQ8wbGFt21UCsMmE=",
    films:
      "https://media.istockphoto.com/id/1342368897/photo/while-quarantine-a-women-watching-live-streaming-by-application-on-smartphone.webp?b=1&s=170667a&w=0&k=20&c=mXIB2QHVhtuyypymTspiuDUkPn9FvC1dRjUWcXJCrB8=",
    species:
      "https://media.istockphoto.com/id/1366228891/photo/many-colorful-organic-dried-vibrant-indian-food-spices-some-in-metal-measuring-dried-food.webp?b=1&s=170667a&w=0&k=20&c=Y8KOO5fGOtNOopaudG5PbfC0p9V_rT_lL04OpBtO5KM=",
    vehicles:
      "https://media.istockphoto.com/id/1452069296/photo/smart-city.webp?b=1&s=170667a&w=0&k=20&c=qQy7fB9Z9vevWJtlMcWnerjSS5_ou9gpJK8eZZ4ftCM=",
    starships:
      "https://media.istockphoto.com/id/1368257666/photo/earth-planet-view-from-iss-porthole-view-from-cupola-international-space-station-orbit-and.webp?b=1&s=170667a&w=0&k=20&c=lZwGNb74OQPjwxmge301Q6fHgPRtvFQQ_sSP9Ite2es=",
  };
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
              <div
                className="col-12 col-md-3 col-sm-12 mb-3 mb-lg-3"
                key={category}
              >
                <CategoryComponent
                  category={category}
                  imageUrl={categoryImages[category] || ""}
                />
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
