import React from "react";
import styles from "./styles"; // Importa sus propios estilos

const PokemonCard = ({ name, image, type }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardText}>Tipo: {type}</p>
    </div>
  );
};

export default PokemonCard;
