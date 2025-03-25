import { useContext, useState } from "react";

import { PokemonContext } from "../../context/PokemonContext";
import { usePokemonPrice } from "../../context/PokemonPriceProvider";

import Modal from "../Modal";
import CreditCardData from "../CreditCardData";


const Cart = () => {
  
  const { cart, removeFromCart, showCartContent, toggleCartContent } = useContext(PokemonContext);
  const { getPokemonPrice } = usePokemonPrice();

  // Calcular el total sumando los precios de los Pokémon en el carrito
  const totalPrice = cart.reduce((total, pokemon) => total + (getPokemonPrice(pokemon.name) || 0), 0);
  
  
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
    <>
      {showCartContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gradient-to-br from-indigo-100 to-purple-200 p-6 rounded-lg shadow-xl w-96 relative border border-indigo-300">
            
            {/* Botón para cerrar el modal */}
            <button 
              onClick={toggleCartContent} 
              className=" absolute top-2 right-2 text-indigo-600 hover:text-indigo-800 text-lg"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">Carrito</h2>

            {/* Mostrar los Pokémon en el carrito */}
            {cart.length === 0 ? (
              <p className="text-indigo-500 text-center">El carrito está vacío</p>
            ) : (
              <div>
                <ul className="space-y-2 max-h-64 overflow-y-auto">
                  {cart.map((pokemon, index) => (
                    <li key={index} className="flex items-center justify-between bg-indigo-50 p-3 rounded-lg shadow-sm border border-indigo-300">
                      <div className="flex items-center gap-3">
                        <img src={pokemon.image} alt={pokemon.name} className="w-12 h-12 rounded-md border border-indigo-400" />
                        <div>
                          <span className="font-semibold text-indigo-700">{pokemon.name}</span>
                          <p className="text-sm text-indigo-600">Precio: ${getPokemonPrice(pokemon.name)}</p>
                        </div>
                      </div>
                      <button
                        className="px-3 py-1 bg-red-400 text-white rounded-lg text-sm hover:bg-red-600 transition-all"
                        onClick={() => removeFromCart(pokemon.name)}
                      >
                        Quitar
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Totalizador */}
                <div className="mt-4 p-3 bg-indigo-200 rounded-lg flex justify-between font-bold text-lg text-indigo-900 border border-indigo-400">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                {/* Botón Ir a pagar */}
                <button
                  className="w-full mt-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-800 transition-all shadow-md"
                  onClick={() => openModal("CreditCardData")}
                >
                  Ir a pagar
                </button>

                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  {selectedComponent === "CreditCardData" && <CreditCardData />}
                </Modal>

              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
