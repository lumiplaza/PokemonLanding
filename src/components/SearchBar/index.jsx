import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./styles";
import CategorySelect from "../CategorySelect";

const SearchBar = ({ onPokemonSelect, allPokemonNames }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const searchRef = useRef(null);

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

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchName(value);

    if (value.length > 0) {
      const suggestions = allPokemonNames.filter((name) =>
        name.toLowerCase().startsWith(value)
      );
      setFilteredSuggestions(suggestions.slice(0, 5));
    } else {
      setFilteredSuggestions([]);
    }
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
                <li key={index} onClick={() => onPokemonSelect(name)}>
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
