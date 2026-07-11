import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.png" 
            alt="Interior de Repostería Rosita" 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay oscuro para que el texto sea legible */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-bakery-strawberry font-bold tracking-widest uppercase mb-4 drop-shadow-md">
            Artesanal & Delicioso
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg">
            Momentos dulces que alegran tu día
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl drop-shadow-md">
            Horneamos todos los días con ingredientes de primera calidad para llevar la mejor experiencia a tu paladar.
          </p>
          <Link 
            to="/catalogo"
            className="px-8 py-4 bg-bakery-strawberry hover:bg-white text-white hover:text-bakery-strawberry rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-bakery-strawberry/50"
          >
            Ver el Catálogo
          </Link>
        </div>
      </section>

      {/* Características / Features */}
      <section className="py-20 bg-bakery-vanilla px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-bakery-strawberry/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🌿</span>
            </div>
            <h3 className="text-2xl font-bold text-bakery-dark mb-4">Ingredientes Frescos</h3>
            <p className="text-gray-600">
              Seleccionamos cada fruta y cada grano de vainilla asegurando la mayor frescura en tu pastel.
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-bakery-strawberry/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">👨‍🍳</span>
            </div>
            <h3 className="text-2xl font-bold text-bakery-dark mb-4">Receta Original</h3>
            <p className="text-gray-600">
              Años de tradición familiar puestos en cada una de nuestras creaciones reposteras.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-bakery-strawberry/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🛵</span>
            </div>
            <h3 className="text-2xl font-bold text-bakery-dark mb-4">Entregas con Cuidado</h3>
            <p className="text-gray-600">
              Llevamos tu pastel hasta la puerta de tu casa asegurando que llegue perfecto para tu evento.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
