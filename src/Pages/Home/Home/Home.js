import React from "react";
import { Link } from "react-router-dom";
import GeneralInformation from "../../GeneralInformation/GeneralInformation";
import WareHousing from "../../WareHousing/WareHousing";

import Slider from "../Slider/Slider";

import StockItems from "../StockItems/StockItems";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <WareHousing></WareHousing>

      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <StockItems></StockItems>
      <GeneralInformation></GeneralInformation>

      <div className="text-center mt-5">
        <Link to="/manageInventories">
          <button className="btn btn-dark"> manage Inventories</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
