import React, { createContext, useState, useEffect, useContext } from 'react';

// Crear el contexto
const PokemonPriceContext = createContext();

// Proveedor del contexto
export const PokemonPriceProvider = ({ children }) => {
  const [prices, setPrices] = useState(() => {
    // Obtener los precios guardados en el localStorage
    const storedPrices = localStorage.getItem('pokemonPrices');
    return storedPrices ? JSON.parse(storedPrices) : {};
  });

  // Función para generar un precio aleatorio entre 3000 y 15000
  const generateRandomPrice = () => {
    return Math.floor(Math.random() * (15000 - 3000 + 1)) + 3000;
  };

  // Función para obtener o generar el precio de un Pokémon
  const getPokemonPrice = (name) => {
    if (!prices[name]) {
      // Si el Pokémon no tiene un precio, generamos uno nuevo
      const newPrice = generateRandomPrice();
      const newPrices = { ...prices, [name]: newPrice }; // Actualizamos el estado
      setPrices(newPrices); // Guardamos el nuevo estado
      return newPrice; // Devolvemos el nuevo precio
    }
    // Si el Pokémon ya tiene un precio, lo devolvemos
    return prices[name];
  };

  // Actualizar el localStorage cada vez que los precios cambien
  useEffect(() => {
    localStorage.setItem('pokemonPrices', JSON.stringify(prices));
  }, [prices]);

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
    throw new Error('usePokemonPrice debe usarse dentro de un PokemonPriceProvider');
  }
  return context;
};