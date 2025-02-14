import React from "react";

const RegisterForm = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Regístrate en <strong className="text-purple-600">PokéDex</strong>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Únete a nuestra comunidad y comienza a explorar el emocionante mundo de las cartas coleccionables de Pokémon.
        </p>

        {/* Formulario de registro */}
        <form className="mt-8 space-y-6 max-w-md mx-auto">
          <div>
            <label htmlFor="name" className="block text-left text-gray-700 text-sm font-medium mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ej: Ash Ketchum"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="document" className="block text-left text-gray-700 text-sm font-medium mb-1">
              Número de documento
            </label>
            <input
              type="text"
              id="document"
              name="document"
              placeholder="Ej: 12345678"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-left text-gray-700 text-sm font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ej: ash@pokemon.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-left text-gray-700 text-sm font-medium mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Escribe tu contraseña"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm; 