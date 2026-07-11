import React, { useState, useEffect } from 'react';
import CakeCard from './CakeCard';

// Mock data: Esta información luego vendrá de tu API en Digital Ocean
const MOCK_CAKES = [
  {
    id: 1,
    name: "Fresa Premium",
    description: "Delicioso bizcocho de vainilla con relleno de fresas frescas y crema batida artesanal. Un clásico irresistible.",
    price: 450.00,
    image: "/strawberry.png",
    tags: ["Fresa", "Vainilla", "Fresco"]
  },
  {
    id: 2,
    name: "Doble Chocolate",
    description: "Para los amantes del cacao. Bizcocho húmedo de chocolate oscuro bañado en ganache y rizos de chocolate belga.",
    price: 520.00,
    image: "/chocolate.png",
    tags: ["Chocolate", "Intenso"]
  }
];

const Catalog = () => {
  const [cakes, setCakes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulamos una llamada a tu futuro backend
  useEffect(() => {
    const fetchCakes = async () => {
      // Simular delay de red
      setTimeout(() => {
        setCakes(MOCK_CAKES);
        setIsLoading(false);
      }, 800);
    };
    fetchCakes();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-bakery-dark sm:text-5xl">
          Nuestro Catálogo
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Descubre nuestras creaciones artesanales hechas con los mejores ingredientes y mucho amor.
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-bakery-strawberry"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;
