import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./styles";
import SearchBar from "../SearchBar";



const NavBar = ({ onPokemonSelect, allPokemonNames }) => {
  return (
    <nav className={styles.navbar}>
      <SearchBar onPokemonSelect={onPokemonSelect} allPokemonNames={allPokemonNames} />

      <div className={styles.menu}>
        <Link to="/about" className={styles.menuItem}>Quiénes Somos</Link>
        <Link to="/login" className={styles.menuItem}>Iniciar Sesión</Link>
        <Link to="/signup" className={styles.menuItem}>Registrarse</Link>
      </div>

      <div className={styles.cart}>
        <FaShoppingCart />
      </div>
    </nav>
  );
};

export default NavBar;
