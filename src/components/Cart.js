import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-items">
      <h2>Carrinho de Compras</h2>
      <h3>Itens no Carrinho:</h3>
      {cartItems.map((item) => (
        <div key={item.product.id} className="cart-item-lista">
          <div>
            <img src={item.product.image} alt={item.product.name} className="product-image" />
          </div>
          <p>Quantidade: {item.quantity}</p>
          <button onClick={() => removeFromCart(item)}>Remover</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;







