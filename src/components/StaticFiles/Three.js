import React, { useState } from "react";
import ThreeRoute from "./ThreeRoute";
const Three = ({text}) => {
  const [display, setDisplay] = useState(false);
  console.log(text)
  return (
    <div className="web flex">
      <div
        className={`three p-1 m-1 ${display ? "hidden" : "block"}`}
        onClick={() => setDisplay(true)}
      >
        <p className={`${display ? "hidden" : "block"}`}></p>
        <p className={`${display ? "hidden" : "block"}`}></p>
        <p className={`${display ? "hidden" : "block"}`}></p>
        
      </div>
      <div
        className={`no three ${display ? "block" : "hidden"}`}
        onClick={() => setDisplay(false)}
      >
        x
      </div>
      <div className={`ll ${display ? "block" : "hidden"}`}>
        <ThreeRoute text={text}/>
      </div>
    </div>
  );
};

export default Three;
