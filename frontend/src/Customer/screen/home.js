import { useState, useEffect } from "react";
import Resturants from "../components/resturants";
import axios from "axios";
import "./Home.css";
import Filter from "../components/filter";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const [listOfrestaurants, setListOfrestaurants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getresturants").then((response) => {
      setListOfrestaurants(response.data);
    });
  }, []);

  let [filterTextValue, updateFilterText] = useState("all");

  let filteredProductList = listOfrestaurants.filter((product) => {
    if (filterTextValue === "fastfood") {
      return product.restaurantType === "fastfood";
    } else if (filterTextValue === "pakistani") {
      return product.restaurantType === "pakistani";
    } else if (filterTextValue === "chinese") {
      return product.restaurantType === "chinese";
    } else if (filterTextValue === "italian") {
      return product.restaurantType === "italian";
    } else if (filterTextValue === "deserts") {
      return product.restaurantType === "deserts";
    } else {
      return product;
    }
  });
  return (
    <div data-testid="home">
      <br></br>
      {/* <div className="dashboard-item"></div> */}
      <Filter onFilterValueSelected={onFilterValueSelected} />
      <div className="row">
        {filteredProductList.map((resturant) => {
          return (
            <div className="col-md-4 p-3">
              <Link to={`/menuitemsc/${resturant.restaurantName}`} >
                <div className="m-5 shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="zoom">
                    <Resturants resturant={resturant} />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
  function onFilterValueSelected(filtervalue) {
    updateFilterText(filtervalue);
  }
}

export default Home;
