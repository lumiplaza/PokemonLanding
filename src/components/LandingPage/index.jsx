import { useState, useEffect  } from "react";
import PokemonCard from "../PokemonCard";
import useFetchPokemons from "../../Hooks/useFetchPokemons";
import styles from "./styles";
import PokemonCardFilter from "../PokemonCardFilter";




const LandingPage = ({ selectedPokemon } ) => {
  const { pokemons, offset, setOffset } = useFetchPokemons();
  const limit = 36; // Cantidad de Pokémon por página
  const displayedPokemons = selectedPokemon
  ? pokemons.filter((p) => p.name === selectedPokemon)
  : pokemons; 

  const { allPokemons } = useFetchPokemons();
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    if (selectedPokemon) {
      const result = allPokemons.filter((pokemon) => pokemon === selectedPokemon);
      setFilteredPokemons(result);
    } else {
      setFilteredPokemons(allPokemons); // Muestra todos si no hay selección
    }
  }, [selectedPokemon, allPokemons]);



  return (
    <div onPokemonSelect={selectedPokemon} className={styles.container}>
      <h1 className={styles.title}>Cartas de Pokémon</h1>
      
      <div className={styles.grid}>
        {displayedPokemons.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} image={pokemon.image} type={pokemon.type} />
        ))}
      </div>

      <div>
        {selectedPokemon && filteredPokemons.length > 0 ? (
        filteredPokemons.map((pokemon, index) => (
          <PokemonCardFilter key={selectedPokemon} name={selectedPokemon} image={pokemon.image}/>
        ))
        ) : null }
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