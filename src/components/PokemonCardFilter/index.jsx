import React, { useState, useEffect, useContext } from "react";
import styles from "./styles";
import { usePokemonPrice } from "../../context/PokemonPriceProvider";
import { PokemonContext } from "../../context/PokemonContext";


const PokemonCardFilter = ({ name }) => {
  
  const [image, setImage] = useState(null); // Para guardar la URL de la imagen
  const [types, setTypes] = useState([]); // Para guardar los tipos (puede ser un array)
  const [price, setPrice] = useState(null);
  const { addToCart } = useContext(PokemonContext); // agregar al carrito
  const { getPokemonPrice } = usePokemonPrice();
  

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        const image = data.sprites.other["official-artwork"].front_default; // Imagen de alta calidad
        const types = data.types.map((typeInfo) => typeInfo.type.name);
        setImage(image);
        setTypes(types);
      } catch (error) {
        console.error("Error obteniendo los datos del Pokémon:", error);
      }
    };
    fetchPokemonData();
  }, [name]); // Se ejecuta cada vez que `name` cambia

  
  useEffect(() => {
    if (name) {
      const pokemonPrice = getPokemonPrice(name);
      setPrice(pokemonPrice);
    }
  }, [name, getPokemonPrice]);


  

  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <img src={image} alt={"Imagen del pokemon"} className={styles.image}  />
      <p className={styles.cardText}>Tipo: {types}</p>
      <p className={styles.price}> Precio: ${price}</p>
      <button   onClick={() => addToCart({ name, image })} className={styles.button}>Add to cart</button>
    </div>
  );
};

export default PokemonCardFilter;
