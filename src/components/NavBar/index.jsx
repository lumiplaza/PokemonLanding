import React, { useState, useContext } from "react";
import { PokemonContext, useCart } from "../../context/PokemonContext";

import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import styles from "./styles";

import SearchBar from "../SearchBar";
import Modal from "../Modal";
import AboutUs from "../AboutUs";
import RegisterForm from "../RegisterForm";
import SesionSign from "../SesionSign";


const NavBar = ({ onPokemonSelect, allPokemonNames }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openModal = (component) => {
    setSelectedComponent(component);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedComponent(null);
  };

  const { toggleCartContent } = useContext(PokemonContext);
  const { cart } = useCart();
  const cartCount = cart?.length ?? 0;

  return (
    <nav className={styles.navbar}>
      <SearchBar onPokemonSelect={onPokemonSelect} allPokemonNames={allPokemonNames} />

      {/* Menú Hamburguesa (Móvil) */}
      <button className="md:hidden text-3xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* MENÚ DESPLEGABLE CON ESTILOS */}
      {menuOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] bg-[#ebd50a87] backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center py-4 transition-all duration-300 ease-in-out md:hidden">
          <button
            onClick={() => openModal("aboutUs")}
            className="w-full py-3 text-lg font-bold text-black border-b border-gray-300 hover:bg-[#095726a5] hover:text-white transition-all duration-200"
          >
            QUIÉNES SOMOS
          </button>
          <button
            onClick={() => openModal("sesionSign")}
            className="w-full py-3 text-lg font-bold text-black border-b border-gray-300 hover:bg-[#095726a5] hover:text-white transition-all duration-200"
          >
            INICIAR SESIÓN
          </button>
          <button
            onClick={() => openModal("registerForm")}
            className="w-full py-3 text-lg font-bold text-black hover:bg-[#095726a5] hover:text-white transition-all duration-200"
          >
            REGISTRARSE
          </button>
        </div>
      )}

      <div className={styles.menu + " hidden md:flex"}>
        <ul className={styles.menuItem}>
          <li>
            <button onClick={() => openModal("aboutUs")} className="hover:text-[#095726]">
              QUIENES SOMOS
            </button>
          </li>
        </ul>

        <ul className={styles.menuItem}>
          <li>
            <button onClick={() => openModal("sesionSign")} className="hover:text-[#095726]">
              INICIAR SESIÓN
            </button>
          </li>
        </ul>

        <ul className={styles.menuItem}>
          <li>
            <button onClick={() => openModal("registerForm")} className="hover:text-[#095726]">
              REGISTRARSE
            </button>
          </li>
        </ul>
      </div>

      <div className={styles.cart}>
        <button onClick={toggleCartContent} className="relative">
          <FaShoppingCart />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedComponent === "aboutUs" && <AboutUs />}
        {selectedComponent === "sesionSign" && <SesionSign />}
        {selectedComponent === "registerForm" && <RegisterForm />}
      </Modal>
    </nav>
  );
};

export default NavBar;
