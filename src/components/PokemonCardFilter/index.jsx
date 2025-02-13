import React, { useState, useEffect } from "react";
import styles from "./styles";

const PokemonCardFilter = ({ name }) => {
  
  const [image, setImage] = useState(null); // Para guardar la URL de la imagen
  const [types, setTypes] = useState([]); // Para guardar los tipos (puede ser un array)
  const [price, setPrice] = useState(null);

  /*Genera un precio aleatorio para cada carta y la lamcena en localstorage*/
  useEffect(() => {
    const storedPrices = JSON.parse(localStorage.getItem("pokemon_prices")) || {}; // Obtener precios guardados
  
    if (storedPrices[name]) {
      setPrice(storedPrices[name]); // Usar precio existente
    } else {
      const newPrice = Math.floor(Math.random() * (18000 - 1000 + 1)) + 1000;
      storedPrices[name] = newPrice; // Asignar nuevo precio
      localStorage.setItem("pokemon_prices", JSON.stringify(storedPrices)); // Guardar en localStorage
      setPrice(newPrice);
    }
  }, [name]); // Se ejecuta cada vez que cambia el nombre del Pokémon


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
