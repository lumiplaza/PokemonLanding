import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import { useState } from "react";

import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";



function App() {

 const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <Router>
      <NavBar onPokemonSelect={setSelectedPokemon} />
      <LandingPage selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}  />
      <Footer />
    </Router>
  );
}

export default App;
