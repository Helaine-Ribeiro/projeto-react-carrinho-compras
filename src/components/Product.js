import React from 'react';

const Product = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Valor: R$ {product.price}</p>
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Product;







