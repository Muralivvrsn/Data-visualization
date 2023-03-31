import "../App.css";
import Topbar from "./StaticFiles/Topbar";
import Sidebar from "./StaticFiles/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import DataTables from "../views/DataTables";
import MarketPlaces from "../views/MarketPlaces";
import Profile from "../views/Profile";
import Signin from "../views/Signin";
import React, { useState } from "react";
function App() {
  const [text, setText] = useState("Main Dashboard");
  const func = (data) => setText(data);
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar text={text} />
        <Sidebar text={func} />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/marketplace" exact element={<MarketPlaces />}></Route>
          <Route path="/datatables" exact element={<DataTables />}></Route>
          <Route path="/profile" exact element={<Profile />}></Route>
          <Route path="/signin" exact element={<Signin />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
