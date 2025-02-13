import React from "react";
// import styles from "./styles";

const PokemonCategoryList = ({ pokemons }) => {
  return (
    <div /* className={styles.cardsContainer}*/>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon, index) => (
          <div key={index} /*className={styles.card}*/>
            <h3>{pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}</h3>
            {/* Aquí puedes agregar una imagen del Pokémon */}
            {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon} /> */}
          </div>
        ))
      ) : (
        null
      )}
    </div>
  );
};

export default PokemonCategoryList;