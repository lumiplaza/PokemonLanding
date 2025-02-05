import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <NavBar />
      <LandingPage />
      <Footer />
    </Router>
  );
}

export default App;
