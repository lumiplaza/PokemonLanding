/*import React, { useEffect, useState } from "react";

const PokemonPrice = ({ name }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const storedPrices = JSON.parse(localStorage.getItem("pokemon_prices")) || {}; // Obtener precios guardados
  
    if (storedPrices[name]) {
      setPrice(storedPrices[name]); // Usar precio existente
    } else {
      const newPrice = Math.floor(Math.random() * (18000 - 1000 + 1)) + 1000;
      storedPrices[name] = newPrice; // Asignar nuevo precio
      localStorage.setItem("pokemon_prices", JSON.stringify(storedPrices)); // Guardar en localStorage
      setPrice(newPrice);
    }
  }, [name]); // Se ejecuta cada vez que cambia el nombre del Pokémon

  return (
    <div>
      <p> Precio: ${price ?? "No disponible"}</p>
    </div>
  );
};

export default PokemonPrice;*/