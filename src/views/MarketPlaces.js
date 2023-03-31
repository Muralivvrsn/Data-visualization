import React from "react";
import CandleStick from "../components/Charts/CandleStick";
const MarketPlaces = () => {
  return (
    <div className="main w-8/12 pt-4">
      <div className="market">
        <CandleStick className="stick"/>
      </div>
    </div>
  );
};

export default MarketPlaces;
