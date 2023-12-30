// App.js or index.js
import React from 'react';
import { AuthProvider } from './components/AuthContext';
import { CartProvider } from './components/CartContext'; // Adjust the path accordingly
import Main from './components/Main';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Main />
        {/* Other components or routes */}
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
