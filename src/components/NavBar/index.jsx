import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import styles from "./styles";


const NavBar = () => {

  
  return (
    <nav className={styles.navbar}>
      {/* Lupa de búsqueda */}
      <div className={styles.icon}>
        <FaSearch />
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
