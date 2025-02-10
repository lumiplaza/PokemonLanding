import { useState, useEffect } from "react";

const useFetchPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 36; // Cantidad de Pokémon por página

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        const fetchDetails = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        Promise.all(fetchDetails).then((details) => {
          setPokemons(
              details.map((p) => ({
              name: p.name.charAt(0).toUpperCase() + p.name.slice(1), // Primera letra en mayúscula
              image: p.sprites.other["official-artwork"].front_default,
              type: p.types[0].type.name,
            })),
          );
        });
      });
    
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((res) => res.json())
      .then((data) => {
        setAllPokemons(data.results.map((p) => p.name));
      });
  }, [offset]);

  return { pokemons, allPokemons, setOffset, offset };
};

export default useFetchPokemons;



  

