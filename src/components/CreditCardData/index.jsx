import { useState } from "react";
import Swal from "sweetalert2"

const CreditCardData = () => {

  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = (e) => {
    e.preventDefault(); // Evita el envío del formulario

    if (!cardHolder || !cardNumber || !expirationMonth || !expirationYear || !cvv) {
      Swal.fire({
        title: "Error",
        text: "Por favor, complete todos los campos antes de continuar.",
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Entendido",
      });
      return;
    }

    Swal.fire({
      title: "¡Pago aprobado!",
      text: "Será redirigido en 5 segundos...",
      icon: "success",
      timer: 5000,
      timerProgressBar: true,
      showConfirmButton: false,
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          DATOS DE PAGO CON <strong className="text-purple-600">TARJETA DE CRÉDITO</strong>
        </h2>

        {/* Formulario de pago */}
        <form className="mt-8 space-y-6 max-w-md mx-auto" onSubmit={handlePayment}>
          <div>
            <label htmlFor="cardHolder" className="block text-left text-gray-700 text-sm font-medium mb-1">
              NOMBRE DEL TITULAR
            </label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              placeholder="Tal cual aparece en la tarjeta"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="cardNumber" className="block text-left text-gray-700 text-sm font-medium mb-1">
              NÚMERO DE TARJETA
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Escribe tu número de tarjeta"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Fecha de vencimiento */}
          <div>
            <label className="block text-left text-gray-700 text-sm font-medium mb-1">
              FECHA DE VENCIMIENTO
            </label>
            <div className="flex gap-2">
              <select
                id="expirationMonth"
                name="expirationMonth"
                value={expirationMonth}
                onChange={(e) => setExpirationMonth(e.target.value)}
                className="border p-2 rounded w-1/2"
                required
              >
                <option value="">Mes</option>
                <option value="01">Enero</option>
                <option value="02">Febrero</option>
                <option value="03">Marzo</option>
                <option value="04">Abril</option>
                <option value="05">Mayo</option>
                <option value="06">Junio</option>
                <option value="07">Julio</option>
                <option value="08">Agosto</option>
                <option value="09">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
              </select>

              <select
                id="expirationYear"
                name="expirationYear"
                value={expirationYear}
                onChange={(e) => setExpirationYear(e.target.value)}
                className="border p-2 rounded w-1/2"
                required
              >
                <option value="">Año</option>
                {Array.from({ length: 20 }, (_, i) => (
                  <option key={i} value={2025 + i}>
                    {2025 + i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="cvv" className="block text-left text-gray-700 text-sm font-medium mb-1">
              CÓDIGO DE SEGURIDAD (CVV)
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="Ingrese codigo de seguridad"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Pagar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreditCardData; 