import React, { useState, useEffect } from "react";
import styles from "./styles";

const PokemonCard = ({ name, image, type }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(Math.floor(Math.random() * (18000 - 1000 + 1)) + 1000);
  }, []);

  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <img src={image} alt={name} className={styles.image} />
      <p className={styles.cardText}>Tipo: {type}</p>
      <p className={styles.price}>Precio: ${price}</p>
      <button className={styles.button}>Add to cart</button>
    </div>
  );
};

export default PokemonCard;
