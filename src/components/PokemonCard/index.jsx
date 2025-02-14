import React, { useState, useEffect } from "react";
import styles from "./styles";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";



const PokemonCard = ({ name, image, type  }) => {
  const [price, setPrice] = useState(0);
  const [id, setId] = useState(null);

  const { addToCart } = useContext(PokemonContext); // agregar al carrito

  
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
      <button onClick={() => addToCart({ name, image, type })} className={styles.button}>Add to cart</button>
    </div>
  );
};

export default PokemonCard;
