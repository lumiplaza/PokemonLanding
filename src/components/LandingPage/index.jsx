import React from "react";
import PokemonCard from "../PokemonCard";
import useFetchPokemons from "../Hooks/useFetchPokemons";
import styles from "./styles";

const LandingPage = () => {
  const { pokemons, offset, setOffset } = useFetchPokemons();
  const limit = 36; // Cantidad de Pokémon por página

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cartas de Pokémon</h1>
      <div className={styles.grid}>
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} image={pokemon.image} type={pokemon.type} />
        ))}
      </div>

      {/* Contenedor de botones */}
      <div className="flex justify-center gap-4 mt-6">
        {/* Botón "Anterior" */}
        <button
          className={styles.button}
          onClick={() => setOffset(Math.max(0, offset - limit))}
          disabled={offset === 0}
        >
          Página Anterior
        </button>

        {/* Botón "Siguiente" */}
        <button
          className={styles.button}
          onClick={() => setOffset(offset + limit)}
        >
          Ver más Pokémon
        </button>
      </div>
    </div>
  );
};

export default LandingPage;