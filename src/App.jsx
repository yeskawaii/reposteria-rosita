import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Catalog from './components/public/Catalog';
import Home from './components/public/Home';
import Cart from './components/public/Cart';
import { CartProvider, useCart } from './contexts/CartContext';

// Layouts
const PublicHeader = () => {
  const { totalItems, setIsCartOpen } = useCart();
  return (
    <header className="px-8 py-6 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40 flex justify-between items-center">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
        <span className="text-3xl">🧁</span>
        <h1 className="text-2xl font-black text-bakery-dark tracking-tight">Rosita</h1>
      </div>
      <nav className="flex gap-6 font-semibold items-center">
        <a href="/" className="hover:text-bakery-strawberry transition-colors">Inicio</a>
        <a href="/catalogo" className="hover:text-bakery-strawberry transition-colors">Catálogo</a>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative flex items-center gap-2 bg-bakery-vanilla hover:bg-bakery-strawberry hover:text-white text-bakery-chocolate px-4 py-2 rounded-full transition-colors"
        >
          <span className="text-xl">🛒</span>
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-bakery-chocolate text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
};

const PublicLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-bakery-vanilla text-bakery-dark">
    <PublicHeader />
    <main className="flex-grow">{children}</main>
    <footer className="p-8 text-center text-sm text-bakery-chocolate bg-white border-t border-bakery-strawberry/20">
      &copy; 2026 Repostería Rosita - Hecho con amor.
    </footer>
    <Cart />
  </div>
);

const AdminLayout = ({ children }) => {
  const isAuthenticated = true; // TODO: Conectar con Firebase Auth
  
  if (!isAuthenticated) return <Navigate to="/admin-bakery/login" />;

  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-bakery-dark text-white p-4">
        <h2 className="text-xl font-bold mb-6 text-bakery-strawberry">Admin Panel</h2>
        <nav className="flex flex-col gap-2">
          <a href="/admin-bakery/dashboard" className="hover:text-bakery-caramel">Dashboard</a>
          <a href="/admin-bakery/products" className="hover:text-bakery-caramel">Productos</a>
        </nav>
      </aside>
      <main className="flex-grow p-8">{children}</main>
    </div>
  );
};

// Pages Placeholder
const Dashboard = () => <div><h2 className="text-2xl font-bold">Dashboard</h2></div>;

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/catalogo" element={<PublicLayout><Catalog /></PublicLayout>} />
          
          {/* Rutas Privadas / Admin */}
          <Route path="/admin-bakery/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
          <Route path="/admin-bakery/products" element={<AdminLayout><div>Productos Admin</div></AdminLayout>} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
