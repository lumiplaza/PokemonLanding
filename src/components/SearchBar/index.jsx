import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./styles";
import useFetchPokemons from "../../Hooks/useFetchPokemons";

const SearchBar = ({ onPokemonSelect, onCategorySelect  }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchName, setSearchName] = useState("");
  //const [searchCategory, setSearchCategory] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const searchRef = useRef(null);
  

  const { allPokemons } = useFetchPokemons();

   // Obtener las categorías únicas al cargar el componente
   useEffect(() => {
    if (Array.isArray(allPokemons)) {
      const uniqueCategories = [
        ...new Set(allPokemons.map((pokemon) =>  pokemon.type && pokemon.type.toLowerCase()) // Verifica que tenga "type"
        .filter(Boolean) // Filtra los undefined/null];
      ),
    ];
      setCategories(uniqueCategories);
    }
  }, [allPokemons]);

  // clic afuera de la barra para cerrarla

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
        setShowCategories(false);
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

  // Manejar clic fuera del input para cerrar la barra
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
        setShowCategories(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


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

// Manejar la selección de una sugerencia
  const handleSelectSuggestion = (pokemonName) => {
    setSearchName(pokemonName); // Actualiza el input con el nombre seleccionado
    setFilteredSuggestions([]); // Oculta las sugerencias
    onPokemonSelect(pokemonName); // Envía el nombre del Pokémon seleccionado
  }; 

  
  // Manejar la selección de una categoría
  const handleSelectCategory = (category) => {
    setShowCategories(false); // Ocultar la lista
    onCategorySelect(category); // Filtrar los Pokémon por categoría
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

          {showCategories && (
            <ul className={styles.suggestionsList}>
              {categories.map((category, index) => (
                <li key={index} className={styles.suggestionItem} onClick={() => handleSelectCategory(category)}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </li>
              ))}
            </ul>
          )}  
          
          
        </div>
      )}
    </div>
  );
};

export default SearchBar;
