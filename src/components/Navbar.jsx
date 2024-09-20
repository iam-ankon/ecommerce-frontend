import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">E-Commerce</Link>
        <div className="flex space-x-4">
          <Link to="/products" className="hover:underline">Products</Link>
          <Link to="/orders" className="hover:underline">Orders</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
