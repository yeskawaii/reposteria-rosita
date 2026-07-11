import React from 'react';
import { useCart } from '../../contexts/CartContext';

const CakeCard = ({ cake }) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-bakery-vanilla cursor-pointer transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={cake.image} 
          alt={cake.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay gradient para dar un toque premium */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-bakery-dark">{cake.name}</h3>
          <span className="text-xl font-bold text-bakery-strawberry">${cake.price.toFixed(2)}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {cake.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {cake.tags.map((tag, index) => (
            <span key={index} className="text-xs px-3 py-1 bg-bakery-vanilla text-bakery-chocolate rounded-full font-bold">
              {tag}
            </span>
          ))}
        </div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            addToCart(cake);
          }}
          className="w-full py-4 bg-bakery-chocolate text-white rounded-xl font-bold opacity-90 group-hover:opacity-100 hover:bg-bakery-dark transition-all transform active:scale-95 shadow-md flex justify-center items-center gap-2"
        >
          <span>Añadir al carrito</span>
          <span className="text-xl">🛒</span>
        </button>
      </div>
    </div>
  );
};

export default CakeCard;
