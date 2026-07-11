import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';

const Cart = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, total } = useCart();
  const [customerName, setCustomerName] = useState('');

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    const phoneNumber = "524432315427";

    let text = `¡Hola! 🧁 Quisiera realizar el siguiente pedido:\n\n`;
    cartItems.forEach(item => {
      text += `- ${item.quantity}x ${item.name} ($${item.price * item.quantity})\n`;
    });
    text += `\n*Total estimado: $${total}*\n`;

    if (customerName) {
      text += `\nMi nombre es: ${customerName}`;
    }

    const encodedText = encodeURIComponent(text);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop oscuro con blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Sidebar del carrito */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
        <div className="p-6 bg-bakery-vanilla flex justify-between items-center border-b border-bakery-strawberry/20">
          <h2 className="text-2xl font-black text-bakery-dark">Tu Carrito 🛒</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-2xl text-bakery-chocolate hover:text-bakery-strawberry transition-colors">
            ✕
          </button>
        </div>

        <div className="flex-grow p-6 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center mt-20">
              <span className="text-6xl mb-4 block">🍰</span>
              <p className="text-lg text-gray-500 font-medium">Tu carrito está vacío.</p>
              <p className="text-sm text-gray-400 mt-2">¡Agrega algunos pasteles deliciosos!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4 items-center bg-gray-50 p-3 rounded-2xl border border-gray-100">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover shadow-sm" />
                  <div className="flex-grow">
                    <h4 className="font-bold text-bakery-dark leading-tight mb-1">{item.name}</h4>
                    <p className="text-sm text-gray-600 font-medium">Cant: {item.quantity} x ${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Eliminar"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-white shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center mb-6 text-xl font-bold text-bakery-dark">
              <span>Total a pagar:</span>
              <span className="text-bakery-strawberry text-2xl">${total.toFixed(2)}</span>
            </div>

            <input
              type="text"
              placeholder="¿Cuál es tu nombre? (Opcional)"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full p-4 mb-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-bakery-strawberry bg-gray-50 font-medium"
            />

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 flex justify-center items-center gap-3 shadow-lg shadow-[#25D366]/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
              Realizar Pedido por WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
