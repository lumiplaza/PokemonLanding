import { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const limit = 36;

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
              name: p.name.charAt(0).toUpperCase() + p.name.slice(1),
              image: p.sprites.other["official-artwork"].front_default,
              type: p.types[0].type.name,
            }))
          );
        });
      });

    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((res) => res.json())
      .then((data) => {
        setAllPokemons(data.results.map((p) => p.name));
      });
  }, [offset]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        allPokemons,
        offset,
        setOffset,
        searchName,
        setSearchName,
        searchCategory,
        setSearchCategory,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
