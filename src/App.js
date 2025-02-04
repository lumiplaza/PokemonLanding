import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";


function App() {
  return (
    <Router>
      <NavBar />
      <LandingPage />
    </Router>
  );
}

export default App;
