

import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const PokemonPriceContext = createContext();

// Proveedor del contexto
export const PokemonPriceProvider = ({ children }) => {
  const [prices, setPrices] = useState(() => {
    const storedPrices = localStorage.getItem("pokemonPrices");
    return storedPrices ? JSON.parse(storedPrices) : {};
  });

  // Función para generar un precio aleatorio entre 3000 y 15000
  const generateRandomPrice = () => {
    return Math.floor(Math.random() * (15000 - 3000 + 1)) + 3000;
  };

  // Función para obtener el precio de un Pokémon, siempre usando el nombre en minúsculas
  const getPokemonPrice = (name) => {
    if (!name) return null;

    const normalizedName = name.toLowerCase(); // Convertimos el nombre a minúsculas

    if (prices[normalizedName]) {
      return prices[normalizedName];
    }

    const newPrice = generateRandomPrice();
    setPrices((prevPrices) => {
      const updatedPrices = { ...prevPrices, [normalizedName]: newPrice };
      localStorage.setItem("pokemonPrices", JSON.stringify(updatedPrices)); // Guardamos en localStorage
      return updatedPrices;
    });

    return newPrice;
  };

  return (
    <PokemonPriceContext.Provider value={{ getPokemonPrice }}>
      {children}
    </PokemonPriceContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const usePokemonPrice = () => {
  const context = useContext(PokemonPriceContext);
  if (!context) {
    throw new Error("usePokemonPrice debe usarse dentro de un PokemonPriceProvider");
  }
  return context;
};
