import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg relative w-11/12 max-w-md">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-5xl 
             transition-all duration-200 ease-in-out 
             drop-shadow-md hover:drop-shadow-lg
             hover:scale-105 active:scale-95"
        >
          &times;
        </button>
        {/* Contenido del modal */}
        {children}
      </div>
    </div>
  );
};

export default Modal;