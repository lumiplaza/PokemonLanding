import React, { useState, useEffect } from "react";
import styles from "./styles";



const PokemonCard = ({ name, image, type }) => {
  const [price, setPrice] = useState(0);
  const [id, setId] = useState(null);


  
  useEffect(() => {
    setPrice(Math.floor(Math.random() * (18000 - 1000 + 1)) + 1000);
  }, []);

  useEffect(() => {
    const fetchPokemonId = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setId(data.id); // Guarda el ID en el estado
      } catch (error) {
        console.error("Error obteniendo el ID del Pokémon:", error);
      }
    };

    fetchPokemonId();
  }, [name]);

  if (!id) return <p>Cargando...</p>; // Evita renderizar si aún no tiene el ID


  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <img src={image} alt={"Imagen del pokemon"} className={styles.image}  />
      <p className={styles.cardText}>Tipo: {type}</p>
      <p className={styles.price}>Precio: ${price}</p>
      <button className={styles.button}>Add to cart</button>
    </div>
  );
};

export default PokemonCard;
