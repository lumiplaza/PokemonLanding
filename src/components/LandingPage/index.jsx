import React from "react";
import "tailwindcss/tailwind.css";
import PokemonCard from "../PokemonCard"; // Ruta corregida
import useFetchPokemons from "../Hooks/useFetchPokemons"; // Ruta corregida
import styles from "./styles"; // Importa sus propios estilos

const LandingPage = () => {
  const pokemons = useFetchPokemons();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cartas de Pokémon</h1>
      <div className={styles.grid}>
        {pokemons.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon.name}
            image={pokemon.image}
            type={pokemon.type}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;

