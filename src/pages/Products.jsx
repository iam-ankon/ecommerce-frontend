import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductList from '../components/ProductList';
// import { ProductList } from './ProductList'; 

const Products = () => {
  const { categoryName } = useParams(); // Category name from the URL params
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = '/api/products/';
        if (categoryName) {
          url = `/api/products?category=${categoryName}`;
        }
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        {categoryName ? `${categoryName} Products` : 'All Products'}
      </h2>
      <ProductList products={products} />
    </div>
  );
};

export default Products;
