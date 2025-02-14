import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(PokemonContext);

  return (
    <div className="p-4 border rounded shadow-lg bg-gray-100">
      <h2 className="text-xl font-bold mb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No Pokémon added to cart</p>
      ) : (
        cart.map((pokemon, index) => (
          <div key={index} className="flex items-center justify-between p-2 border-b">
            <img src={pokemon.image} alt={pokemon.name} className="w-12 h-12 object-contain" />
            <span className="text-lg">{pokemon.name}</span>
            <button
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={() => removeFromCart(pokemon.name)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
