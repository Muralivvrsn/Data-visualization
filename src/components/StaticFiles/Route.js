import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoCartOutline,
  IoLockClosed,
  IoHome,
  IoBarChart,
  IoPersonSharp,
} from "react-icons/io5";

const Routes = ({text}) => {
  const [active, setActive] = useState([1, 0, 0, 0, 0]);
  return (
    <div className="sections">
        <div
          className="dash flex items-center justify-star"
          onClick={(e) => {
            setActive([1, 0, 0, 0, 0]);
            text(e.target.innerText);
          }}
        >
          <IoHome
            className={`w-8 h-8 m-4 ${active[0] ? "text-blue-500" : ""}`}
          />
          <Link to="/" className="m-4">
            Main Dashboard
          </Link>
          {active[0] ? (
            <div className=" absolute left-full h-12 w-1 rounded-lg bg-blue-800" />
          ) : (
            ""
          )}
        </div>
        <div
          className="dash flex items-center justify-star"
          onClick={(e) => {
            setActive([0, 1, 0, 0, 0]);
            text(e.target.innerText);
          }}
        >
          <IoCartOutline
            className={`w-8 h-8 m-4 ${active[1] ? "text-blue-500" : ""}`}
          />
          <Link to="/marketplace" className="m-4">
            Marketplace
          </Link>
          {active[1] ? (
            <div className="absolute left-full h-12 w-1 rounded-lg bg-blue-800" />
          ) : (
            ""
          )}
        </div>

        <div
          className="dash flex items-center justify-star"
          onClick={(e) => {
            setActive([0, 0, 1, 0, 0]);
            text(e.target.innerText);
          }}
        >
          <IoBarChart
            className={`w-8 h-8 m-4 ${active[2] ? "text-blue-500" : ""}`}
          />
          <Link to="/datatables" className="m-4">
            Data tables
          </Link>
          {active[2] ? (
            <div className="absolute left-full h-12 w-1 rounded-lg bg-blue-800" />
          ) : (
            ""
          )}
        </div>

        <div
          className="dash flex items-center justify-star"
          onClick={(e) => {
            setActive([0, 0, 0, 1, 0]);
            text(e.target.innerText);
          }}
        >
          <IoPersonSharp
            className={`w-8 h-8 m-4 ${active[3] ? "text-blue-500" : ""}`}
          />
          <Link to="/profile" className="m-4">
            Profile
          </Link>
          {active[3] ? (
            <div className="absolute left-full h-12 w-1 rounded-lg bg-blue-800" />
          ) : (
            ""
          )}
        </div>

        <div
          className="dash flex items-center justify-star"
          onClick={(e) => {
            setActive([0, 0, 0, 0, 1]);
            text(e.target.innerText);
          }}
        >
          <IoLockClosed
            className={`w-8 h-8 m-4 ${active[4] ? "text-blue-500" : ""}`}
          />
          <Link to="/signin" className="m-4">
            Signin
          </Link>
          {active[4] ? (
            <div className="absolute left-full h-12 w-1 rounded-lg bg-blue-800" />
          ) : (
            ""
          )}
        </div>
      </div>
  )
}

export default Routes
