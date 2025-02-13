import React from 'react';

function PricePokemon({ pokemons }) {
    return (
        <div>
            {pokemons.length > 0 ? (
                <ul>
                    {pokemons.map((pokemon, index) => (
                        <li key={index}>
                            <strong>{pokemon.price}</strong>
                        </li>
                    ))}
                </ul>
            ) : (
                null
            )}
        </div>
    );
}

export default PricePokemon;