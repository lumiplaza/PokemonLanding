import { createContext, useState, useEffect, useContext  } from "react";

export const PokemonContext = createContext();

export const useCart = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un PokemonProvider");
  }
  return context;
};

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [cart, setCart] = useState([]); // Estado del carrito
  const [showCartContent, setShowCartContent] = useState(false); // Estado para mostrar el contenido del carrito
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

  

  // Función para agregar Pokémon al carrito
  const addToCart = (pokemon) => {
    if (!pokemon || !pokemon.name || !pokemon.image) {
      console.error("Intentando agregar un Pokémon inválido al carrito:", pokemon);
      return;
    }

    setCart((prevCart) => [...prevCart, pokemon]);
  };

  // Función para eliminar un Pokémon del carrito
    const removeFromCart = (pokemonName) => {
      setCart((prevCart) => {
        const indexToRemove = prevCart.findIndex((p) => p.name === pokemonName);
        if (indexToRemove === -1) return prevCart; // Si no encuentra, retorna el mismo carrito
    
        const newCart = [...prevCart];
        newCart.splice(indexToRemove, 1); // Elimina solo un elemento con ese nombre
        return newCart;
      });
    };

  // Modal del carrito
  const toggleCartContent = () => {
    setShowCartContent((prev) => !prev);
  };



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
        cart,
        addToCart,
        removeFromCart,
        showCartContent, 
        toggleCartContent
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
