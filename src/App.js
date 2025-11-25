import React from "react";
import farmDataJson from "./data.json";
// import Home from "./components/Home";
import Header from "./components/layout/Header";
import Main from "./components/Main.js";
import "./App.css";

function App() {
  // const [farmData, setFarmData] = useState([]);

  // useEffect(() => {
  //   setFarmData(farmDataJson);
  // }, []);

  console.log(farmDataJson);

  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Home farmData={farmDataJson} /> */}
    </div>
  );
}

export default App;
