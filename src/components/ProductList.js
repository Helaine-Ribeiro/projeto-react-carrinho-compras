import React from 'react';
import Product from './Product';
import '../App.css';

const ProductList = ({ products, addToCart }) => {
  const topProducts = products.slice(0, 4); // Produtos da parte superior
  const bottomProducts = products.slice(4, 8); // Produtos da parte inferior

  return (
    <div>
      <h2>Produtos Disponíveis</h2>
      <div className="product-list">
        <div className="product-row">
          {topProducts.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <div className="product-row">
          {bottomProducts.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;




