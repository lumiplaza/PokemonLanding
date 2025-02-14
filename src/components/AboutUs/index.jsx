import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"> {/* Ajusté el padding */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Sobre Nosotros
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          En <strong className="text-purple-600">PokéDex</strong>, nos apasiona el mundo de las cartas coleccionables de Pokémon. Desde nuestra fundación en 2015, nos hemos dedicado a ofrecer a nuestros clientes las cartas más exclusivas y raras, convirtiéndonos en el destino favorito de coleccionistas y entusiastas de todo el mundo.
        </p>
        <p className="mt-6 text-lg text-gray-600">
          Nuestra misión es simple: conectar a los amantes de Pokémon con las cartas que siempre han soñado tener. Ya sea una carta legendaria de Charizard o una edición especial de Pikachu, en <strong className="text-purple-600">PokéDex</strong> nos aseguramos de que cada compra sea una experiencia única y emocionante.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;