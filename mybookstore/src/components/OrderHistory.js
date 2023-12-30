import React from 'react';

const OrderHistory = () => {
  // Fetch order history data from a backend or any storage
  const orderHistoryData = /* Fetch data from your backend */ [];

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orderHistoryData.map((order, index) => (
          <li key={index}>
            {/* Display order details */}
            Order ID: {order.orderId}, Total: ${order.totalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
