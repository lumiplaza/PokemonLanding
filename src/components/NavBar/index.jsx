import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./styles";
import SearchBar from "../SearchBar";
import Modal from "../Modal";
import AboutUs from "../AboutUs";
import RegisterForm from "../RegisterForm";
import SesionSign from "../SesionSign";


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
        <FaShoppingCart />
      </div>
    </nav>
  );
};

export default NavBar;
