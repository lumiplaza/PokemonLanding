import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import styles from "./styles";
import CategorySelect from "../CategorySelect";
import useFetchPokemons from "../Hooks/useFetchPokemons";


const NavBar = () => {



  const [showSearch, setShowSearch] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const searchRef = useRef(null);
  const { allPokemons } = useFetchPokemons();
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

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

  const handleSearch = () => {
    console.log("Buscando:", { searchName, searchCategory });
    // Aquí puedes implementar la lógica de búsqueda
  };

   // Filtra sugerencias en tiempo real
   const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchName(value);

    if (value.length > 0) {
      const suggestions = allPokemons.filter((name) =>
        name.toLowerCase().startsWith(value)
      );
      setFilteredSuggestions(suggestions.slice(0, 5)); // Limita a 5 resultados
    } else {
      setFilteredSuggestions([]);
    }
  };

  

  

  return (
    <nav className={styles.navbar}>
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
              // onChange={(e) => setSearchName(e.target.value)}
              onChange={handleInputChange}
              className={styles.input}
            />

            {/* Mostrar sugerencias */}
            {filteredSuggestions.length > 0 && (
              <ul className={styles.suggestionsList}>
                {filteredSuggestions.map((name, index) => (
                  <li key={index} className={styles.suggestionItem} onClick={() => setSearchName(name)}>
                    {name}
                  </li>
                ))}
              </ul>
            )}

            <CategorySelect
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            />
            <button onClick={handleSearch} className={styles.searchButton}>
              Buscar
            </button>
          </div>
        )}
      </div>

      {/* Menú central */}
      <div className={styles.menu}>
        <Link to="/about" className={styles.menuItem}>Quiénes Somos</Link>
        <Link to="/login" className={styles.menuItem}>Iniciar Sesión</Link>
        <Link to="/signup" className={styles.menuItem}>Registrarse</Link>
      </div>

      {/* Carrito de compras */}
      <div className={styles.cart}>
        <FaShoppingCart />
      </div>
    </nav>
  );
};

export default NavBar;
