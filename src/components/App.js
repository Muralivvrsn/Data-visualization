import "../App.css";
import TopHeader from "../components/StaticFiles/TopHeader";
import LeftHeader from "../components/StaticFiles/LeftHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Dashboard";
import DataTables from "./DataTables";
import MarketPlaces from "./MarketPlaces";
import Profile from "./Profile";
import Signin from "./Signin";
import React,{useState} from 'react';
function App() {
  const [text,setText] = useState("Main Dashboard")
  function func(data){
    setText(data);
    console.log(text);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <TopHeader text={text}/>
        <LeftHeader text={func}/>
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
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
