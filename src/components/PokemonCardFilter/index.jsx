import React, { useState, useEffect } from "react";
import styles from "./styles";

const PokemonCardFilter = ({ name, price }) => {
  
  const [image, setImage] = useState(null); // Para guardar la URL de la imagen
  const [types, setTypes] = useState([]); // Para guardar los tipos (puede ser un array)


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



  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <img src={image} alt={"Imagen del pokemon"} className={styles.image}  />
      <p className={styles.cardText}>Tipo: {types}</p>
      <p className={styles.price}>Precio: ${price}</p>
      <button className={styles.button}>Add to cart</button>
    </div>
  );
};

export default PokemonCardFilter;
