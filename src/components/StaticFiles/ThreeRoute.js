import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoCartOutline,
  IoLockClosed,
  IoHome,
  IoBarChart,
  IoPersonSharp,
} from "react-icons/io5";

const ThreeRoutes = ({ text }) => {
  const [active, setActive] = useState([1, 0, 0, 0, 0]);
  console.log(text)
  return (
    <div className="sec">
      <div
        className="dash flex items-center justify-star"
        onClick={(e) => {
          setActive([1, 0, 0, 0, 0]);
          text(e.target.innerText);
        }}
      >
        <Link to="/" className="m-4">
          <IoHome
            className={`class w-8 h-8 m-4 ${active[0] ? "text-blue-500" : ""}`}
          />
        </Link>
      </div>
      <div
        className="dash flex items-center justify-star"
        onClick={(e) => {
          setActive([0, 1, 0, 0, 0]);
          text(e.target.innerText);
        }}
      >
        <Link to="/marketplace" className="m-4">
          <IoCartOutline
            className={`class w-8 h-8 m-4 ${active[1] ? "text-blue-500" : ""}`}
          />
        </Link>
      </div>

      <div
        className="dash flex items-center justify-star"
        onClick={(e) => {
          setActive([0, 0, 1, 0, 0]);
          text(e.target.innerText);
        }}
      >
        <Link to="/datatables" className="m-4">
          <IoBarChart
            className={`class w-8 h-8 m-4 ${active[2] ? "text-blue-500" : ""}`}
          />
        </Link>
      </div>

      <div
        className="dash flex items-center justify-star"
        onClick={(e) => {
          setActive([0, 0, 0, 1, 0]);
          text(e.target.innerText);
        }}
      >
        <Link to="/profile" className="m-4">
          <IoPersonSharp
            className={`class w-8 h-8 m-4 ${active[3] ? "text-blue-500" : ""}`}
          />
        </Link>
      </div>

      <div
        className="dash flex items-center justify-star"
        onClick={(e) => {
          setActive([0, 0, 0, 0, 1]);
          text(e.target.innerText);
        }}
      >
        <Link to="/signin" className="m-4">
          <IoLockClosed
            className={`class w-8 h-8 m-4 ${active[4] ? "text-blue-500" : ""}`}
          />
        </Link>
      </div>
    </div>
  );
};

export default ThreeRoutes;
