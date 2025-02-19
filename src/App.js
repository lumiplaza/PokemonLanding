// import { BrowserRouter as Router } from "react-router-dom";
import PokemonProvider from "./context/PokemonContext";
import { PokemonPriceProvider } from "./context/PokemonPriceProvider";
import "./index.css";

import { useState } from "react";

import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Cart from "./components/Cart";



function App() {

 const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <PokemonProvider>
    <PokemonPriceProvider>
      <NavBar onPokemonSelect={setSelectedPokemon} />
      <LandingPage selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}  />
      <Footer />
      <Cart />
    </PokemonPriceProvider>
    </PokemonProvider>
  );
}

export default App;
