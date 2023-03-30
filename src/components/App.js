import "../App.css";
import TopHeader from "../components/StaticFiles/TopHeader";
import LeftHeader from "../components/StaticFiles/LeftHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import DataTables from "./DataTables";
import MarketPlaces from "./MarketPlaces";
import Profile from "./Profile";
import Signin from "./Signin";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopHeader />
        <LeftHeader />
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="/marketplaces" exact element={<MarketPlaces />}></Route>
          <Route path="/datatables" exact element={<DataTables />}></Route>
          <Route path="/profile" exact element={<Profile />}></Route>
          <Route path="/settings" exact element={<Signin />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
