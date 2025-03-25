import React, { useEffect } from "react";
import styles from "./styles";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { usePokemonPrice } from "../../context/PokemonPriceProvider";



const PokemonCard = ({ name, image, type  }) => {
 
  const { addToCart } = useContext(PokemonContext); // agregar al carrito

  const { getPokemonPrice } = usePokemonPrice();
  const price = getPokemonPrice(name);

  
  const normalizePokemonName = (name) => {
    return name
      .toLowerCase()         // Convertir a minúsculas
      .replace(/\s+/g, "-")  // Reemplazar espacios por "-"
      .replace(/♀/g, "-f")   // Reemplazar símbolo femenino por "-f"
      .replace(/♂/g, "-m")   // Reemplazar símbolo masculino por "-m"
      .replace(/\./g, "");   // Eliminar puntos (como en "Mr. Mime")
  };


  useEffect(() => {
    const fetchPokemonId = async () => {
      try {
        const formattedName = normalizePokemonName(name);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formattedName}`);
        if (!response.ok) {
          throw new Error(`No se encontró el Pokémon: ${formattedName}`);}
        } catch (error) {
          console.error("Error obteniendo el ID del Pokémon:", error.message);
      }
    };
    fetchPokemonId();
  }, [name]);



  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <img src={image} alt={"Imagen del pokemon"} className={styles.image}  />
      <p className={styles.cardText}>Tipo: {type}</p>
      <p className={styles.price}>Precio: ${price}</p>
      <button onClick={() => addToCart({ name, image, type })} className={styles.button}>Add to cart</button>
    </div>
  );
};

export default PokemonCard;
