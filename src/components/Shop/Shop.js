import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
   

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data =>  setProducts(data))
  },[]);

  const handleAddToCart = (products) => {
    const newCart = [...cart, products]
    setCart(newCart)
    // console.log(products);
  }
  return (
    <div className='shop-container mt-20 '>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-11 product-container">
         {
          products.map(product => <Products
          key={product.id}
           product={product}
           handleAddToCart={handleAddToCart}
          ></Products>)
         }
      </div>
      <div className="cart-container bg-orange-100  fixed top-28 right-10  w-64 p-3 h-4/6">
         <Cart
         cart={cart}
         ></Cart>
      </div>
    </div>
  );
};

export default Shop;