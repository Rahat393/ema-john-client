import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data =>  setProducts(data))
  },[])
  return (
    <div className='shop-container'>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-11 product-container">
         {
          products.map(product => <Products
          key={product.id}
           product={product}
          ></Products>)
         }
      </div>
      <div className="cart-container">
        <h2>this is cart</h2>
      </div>
    </div>
  );
};

export default Shop;