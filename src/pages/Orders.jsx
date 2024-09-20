import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders/')
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map(order => (
            <li key={order.id} className="border-b py-2">
              <h3 className="font-bold">Order #{order.id}</h3>
              <p>Total: ${order.total_price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no orders yet.</p>
      )}
    </div>
  );
};

export default Orders;