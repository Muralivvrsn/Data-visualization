import "../App.css";
import Main from '../components/StaticFiles/Main'
import TopHeader from '../components/StaticFiles/TopHeader'
import LeftHeader from '../components/StaticFiles/LeftHeader'
function App() {
  return (
    <div className="App">
      <TopHeader/>
      <LeftHeader/>
      <Main/>
    </div>
  );
}

export default App;
