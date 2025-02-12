import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./styles";
import CategorySelect from "../CategorySelect";
import useFetchPokemons from "../../Hooks/useFetchPokemons";

const SearchBar = ({ onPokemonSelect }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const searchRef = useRef(null);
  

  const { allPokemons } = useFetchPokemons();

  // clic afuera de la barra para cerrarla

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Lupa visible o no

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };


  // Manejar el cambio en el input
   const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchName(value);

    // Asegurar que `allPokemons` es un array antes de filtrar
    if (Array.isArray(allPokemons)) {
      const suggestions = allPokemons.filter((pokemon) =>
        pokemon.toLowerCase().includes(value)
      );
      setFilteredSuggestions(suggestions.slice(0, 5)); // Limita a 5 sugerencias
    }
  }; 

  const handleSelectSuggestion = (pokemonName) => {
    setSearchName(pokemonName); // Actualiza el input con el nombre seleccionado
    setFilteredSuggestions([]); // Oculta las sugerencias
    onPokemonSelect(pokemonName); // Envía el nombre del Pokémon seleccionado
  }; 

  
  

  return (
    <div ref={searchRef} className={styles.searchContainer}>
      {!showSearch && (
        <FaSearch className={styles.searchIcon} onClick={handleSearchClick} />
      )}
      {showSearch && (
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={searchName}
            onChange={handleSearchChange}
            className={styles.input}
          />
          {filteredSuggestions.length > 0 && (
            <ul className={styles.suggestionsList}>
              {filteredSuggestions.map((name, index) => (
                <li key={index} className={styles.suggestionItem} onClick={() => handleSelectSuggestion(name)}>
                  {name}
                </li>
              ))}
            </ul>
          )}
          <CategorySelect
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          />
          <button onClick={() => onPokemonSelect(searchName)} className={styles.searchButton}>
            Buscar
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
