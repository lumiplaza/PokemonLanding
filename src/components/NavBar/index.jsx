import React, { useState, useContext  } from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./styles";
import SearchBar from "../SearchBar";
import Modal from "../Modal";
import AboutUs from "../AboutUs";
import RegisterForm from "../RegisterForm";
import SesionSign from "../SesionSign";
import { PokemonContext } from "../../context/PokemonContext";
import { useCart } from "../../context/PokemonContext";


const NavBar = ({ onPokemonSelect, allPokemonNames }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  
  const openModal = (component) => {
    setSelectedComponent(component); // Establece el componente a mostrar
    setIsModalOpen(true); // Abre el modal
  };
  const closeModal = () => {
    setIsModalOpen(false); // Cierra el modal
    setSelectedComponent(null); // Limpia el componente seleccionado
  };
  
  const { toggleCartContent } = useContext(PokemonContext);

  // contador items cart
  const { cart } = useCart();
  const cartCount = cart?.length ?? 0;

  
  return (
    <nav className={styles.navbar}>
      
      <SearchBar onPokemonSelect={onPokemonSelect} allPokemonNames={allPokemonNames} />

      <div className={styles.menu}>
        
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

        <Modal isOpen={isModalOpen} onClose={closeModal}>
            {selectedComponent === "aboutUs" && <AboutUs />}
            {selectedComponent === "sesionSign" && <SesionSign />}
            {selectedComponent === "registerForm" && <RegisterForm />}
        </Modal>
      
      </div>

      <div className={styles.cart}>
        <button onClick={toggleCartContent} className="relative">
        <FaShoppingCart />
        {/* Círculo rojo con el número de elementos */}
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
