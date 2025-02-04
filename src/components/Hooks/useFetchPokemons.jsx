import { useState, useEffect } from "react";

const useFetchPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
      .then((data) => {
        const fetchDetails = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        Promise.all(fetchDetails).then((details) => {
          setPokemons(
            details.map((p) => ({
              name: p.name,
              image: p.sprites.front_default,
              type: p.types[0].type.name,
            }))
          );
        });
      });
  }, []);

  return pokemons;
};

export default useFetchPokemons;
