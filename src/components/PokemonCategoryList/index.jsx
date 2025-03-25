import React from "react";


const PokemonCategoryList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon, index) => (
          <div key={index} /*className={styles.card}*/>
            <h3>{pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}</h3>
          </div>
        ))
      ) : (
        null
      )}
    </div>
  );
};

export default PokemonCategoryList;