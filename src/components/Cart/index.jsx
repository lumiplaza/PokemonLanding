import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { usePokemonPrice } from "../../context/PokemonPriceProvider";

const Cart = () => {
  
  const { cart, removeFromCart, showCartContent, toggleCartContent } = useContext(PokemonContext);
  const { getPokemonPrice } = usePokemonPrice();


  return (
    <>
      
      {showCartContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Carrito</h2>

            {/* Botón para cerrar el modal */}
            <button onClick={toggleCartContent} className="absolute top-4 right-4 text-gray-600">
              ✖
            </button>

            {/* Mostrar los Pokémon en el carrito */}
            {cart.length === 0 ? (
              <p className="text-gray-500">El carrito está vacío</p>
            ) : (
              <ul>
                {cart.map((pokemon, index) => (
                  <li key={index} className="flex items-center gap-2 border-b p-2">
                    <img src={pokemon.image} alt={pokemon.name} className="w-12 h-12" />
                    <span>{pokemon.name}</span>
                    <p> Precio: ${getPokemonPrice(pokemon.name)}</p>
                    <button
                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                        onClick={() => removeFromCart(pokemon.name)}>
                            Remove
                    </button>
                  </li>
                  
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>

    
  );
};

export default Cart;
