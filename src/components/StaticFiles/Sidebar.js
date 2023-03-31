import React from "react";
import Route from './Route'
const LeftHeader = ({ text }) => {
  

  return (
    <div className="leftHeader bg-white fixed w-1/5 bottom-0 top-0 left-0">
      <div className="logo text-center p-8">
        <h1>Visualization</h1>
      </div>
      <hr />
      <Route text={text}/>
    </div>
  );
};

export default LeftHeader;
