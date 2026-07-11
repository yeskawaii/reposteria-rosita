import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layouts Placeholder
const PublicLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-bakery-vanilla text-bakery-dark">
    <header className="p-4 bg-white shadow-sm flex justify-between items-center">
      <h1 className="text-2xl font-bold text-bakery-strawberry">Rosita</h1>
      <nav>
        <a href="/" className="mr-4 hover:text-bakery-caramel">Inicio</a>
        <a href="/catalogo" className="hover:text-bakery-caramel">Catálogo</a>
      </nav>
    </header>
    <main className="flex-grow p-4">{children}</main>
    <footer className="p-4 text-center text-sm text-bakery-chocolate">
      &copy; 2026 Repostería Rosita
    </footer>
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
const Home = () => <div><h2 className="text-3xl font-bold mb-4">Bienvenidos a Repostería Rosita</h2><p>Los mejores pasteles de la ciudad.</p></div>;
const Catalog = () => <div><h2 className="text-2xl font-bold mb-4">Nuestro Catálogo</h2></div>;
const Dashboard = () => <div><h2 className="text-2xl font-bold">Dashboard</h2></div>;

function App() {
  return (
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
  );
}

export default App;
