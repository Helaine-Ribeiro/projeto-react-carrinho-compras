import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import '../src/App.css';
import {productsData} from './data/ProductData'; 

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.product.id === product.id);
    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.product.id === product.id) {
          return {
            product: item.product,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      const newItem = {
        product: product,
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (item) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.product.id !== item.product.id);
    setCartItems(updatedItems);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="App">
      <h1>LivroTeka</h1>
      <ProductList products={productsData} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <div className="navbar">
        <p>Total de Itens: {totalItems}</p>
        <p>Total: R$ {totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default App;