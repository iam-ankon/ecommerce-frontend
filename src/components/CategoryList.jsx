// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// // const CategoryList = () => {
// //   const [categories, setCategories] = useState([]);

// //   useEffect(() => {
// //     axios.get('/api/categories/')
// //       .then(response => setCategories(response.data))
// //       .catch(error => console.error(error));
// //   }, []);

// const CategoryList = ({ categories }) => {
//   return (
//     <div>
//       {Array.isArray(categories) && categories.length > 0 ? (
//         categories.map(category => (
//           <div key={category.id}>
//             <h2>{category.name}</h2>
//           </div>
//         ))
//       ) : (
//         <p>No categories available</p>
//       )}
//     </div>
//   );
// };


//   // return (
//   //   <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-6">
//   //     <h2 className="text-xl font-bold mb-4">Categories</h2>
//   //     <div className="flex space-x-4">
//   //       {categories.map(category => (
//   //         <Link 
//   //           key={category.id} 
//   //           to={`/products/${category.name}`} 
//   //           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//   //         >
//   //           {category.name}
//   //         </Link>
//   //       ))}
//   //     </div>
//   //   </div>
//   // );


// export default CategoryList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]); // Set initial state as an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/categories/')
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading categories...</p>;
  }

  return (
    <div>
      {Array.isArray(categories) && categories.length > 0 ? (
        categories.map((category) => (
          <div key={category.id}>
            <h2>{category.name}</h2>
          </div>
        ))
      ) : (
        <p>No categories available</p>
      )}
    </div>
  );
};
export default CategoryList;