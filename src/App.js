import { useEffect, useState } from "react";
import "./App.css";
import Flightgif from "./Components/Flightgif";
import TravelRequest from "./Components/TravelRequest";

function App() {
  const [render, setRender] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 4000);
  }, []);

  console.log("render",render);
  return (
    <div className="App">
      {render ? <Flightgif />:<TravelRequest />}
     
    </div>
  );
}

export default App;
