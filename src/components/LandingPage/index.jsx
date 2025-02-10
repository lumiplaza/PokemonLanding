import { useState } from "react";
import PokemonCard from "../PokemonCard";
import useFetchPokemons from "../../Hooks/useFetchPokemons";
import styles from "./styles";


const LandingPage = () => {
  const { pokemons, offset, setOffset } = useFetchPokemons();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const limit = 36; // Cantidad de Pokémon por página
  const displayedPokemons = selectedPokemon
  ? pokemons.filter((p) => p.name === selectedPokemon)
  : pokemons; 


  return (
    <div onPokemonSelect={setSelectedPokemon} className={styles.container}>
      <h1 className={styles.title}>Cartas de Pokémon</h1>
      <div className={styles.grid}>
        {displayedPokemons.map((pokemon, index) => (
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