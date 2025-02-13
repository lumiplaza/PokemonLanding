/*import React, { useState, useEffect } from "react";
import styles from "./styles";

const CategorySelect = ({ searchCategory, setSearchCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Cargar las categorías desde la API de Pokémon
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.results.map((type) => type.name));
      })
      .catch((error) => console.error("Error cargando categorías:", error));
  }, []);

  return (
    <select
      value={searchCategory}
      onChange={(e) => setSearchCategory(e.target.value)}
      className={styles.categorySelect}
    >
      <option value="">Seleccionar categoría</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;*/

import React, { useState, useEffect } from "react";
import styles from "./styles";

const CategorySelect = ({ value, onChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Cargar las categorías desde la API de Pokémon
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.results.map((type) => type.name));
      })
      .catch((error) => console.error("Error cargando categorías:", error));
  }, []);

  return (
    <select
      value={value}
      onChange={onChange}
      className={styles.categorySelect}
    >
      <option value="">Seleccionar categoría</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;