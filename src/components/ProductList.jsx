// // // import { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { Link } from 'react-router-dom';

// // // const ProductList = () => {
// // //   const [products, setProducts] = useState([]);

// // //   useEffect(() => {
// // //     axios.get('/api/products/')
// // //       .then(response => setProducts(response.data))
// // //       .catch(error => console.error(error));
// // //   }, []);

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h2 className="text-2xl font-bold mb-4">Products</h2>
// // //       <div className="grid grid-cols-3 gap-4">
// // //         {products.map(product => (
// // //           <div key={product.id} className="border p-4 rounded-lg shadow-lg">
// // //             <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2"/>
// // //             <h3 className="text-lg font-bold">{product.name}</h3>
// // //             <p className="text-gray-700">${product.price}</p>
// // //             <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline mt-2 block">View Details</Link>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductList;
// // // const ProductList = ({ products }) => {
// // //   return (
// // //     <div>
// // //       {Array.isArray(products) && products.length > 0 ? (
// // //         products.map(product => (
// // //           <div key={product.id}>
// // //             <h2>{product.name}</h2>
// // //             <p>{product.description}</p>
// // //           </div>
// // //         ))
// // //       ) : (
// // //         <p>No products available</p>
// // //       )}
// // //     </div>
// // //   );
// // // };
// // export const ProductList = ({ products }) => {
// //   const [products, setProducts] = useState([]); // Set initial state as an empty array
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     axios
// //       .get('/api/products/')
// //       .then((response) => {
// //         setProducts(response.data);
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching products:', error);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) {
// //     return <p>Loading products...</p>;
// //   }

// //   return (
// //     <div>
// //       {Array.isArray(products) && products.length > 0 ? (
// //         products.map((product) => (
// //           <div key={product.id}>
// //             <h2>{product.name}</h2>
// //             <p>{product.description}</p>
// //           </div>
// //         ))
// //       ) : (
// //         <p>No products available</p>
// //       )}
// //     </div>
// //   );
// // };
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export const ProductList = ({ products }) => {
//   const [productList, setProductList] = useState([]); // Rename the state variable to productList
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get('/api/products/')
//       .then((response) => {
//         setProductList(response.data); // Set the fetched products to productList
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching products:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading products...</p>;
//   }

//   return (
//     <div>
//       {Array.isArray(productList) && productList.length > 0 ? (
//         productList.map((product) => (
//           <div key={product.id}>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//           </div>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };



import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ProductList = () => {
  const [productList, setProductList] = useState([]); // Set initial state as an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/products/')
      .then((response) => {
        setProductList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      {Array.isArray(productList) && productList.length > 0 ? (
        productList.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList; // Change to default export
