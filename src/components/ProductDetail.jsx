import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}/`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <img src={product.image} alt={product.name} className="w-1/3 h-auto object-cover rounded-lg shadow-lg"/>
        <div className="ml-4">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-xl text-gray-800">${product.price}</p>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
