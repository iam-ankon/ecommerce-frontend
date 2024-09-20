import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import Products from './pages/Products';
import Orders from './pages/Orders';
import CategoryList from './components/CategoryList';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <CategoryList /> {/* This displays categories on every page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:categoryName?" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
