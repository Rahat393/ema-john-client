import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
   

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data =>  setProducts(data))
  },[]);

  useEffect( () => {
    const storedCart = getStoredCart()
    const savedCart = []
    console.log(storedCart);
    for(const id in storedCart){
      const addedProduct = products.find(product => product.id === id);
       if (addedProduct){
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        savedCart.push(addedProduct)
       }
    }
    setCart(savedCart)
  },[products])

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);
    if (!exists) {
        selectedProduct.quantity = 1;
        newCart = [...cart, selectedProduct]
    }
    else {
        const rest = cart.filter(product => product.id !== selectedProduct.id)
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists];
    }
    console.log(selectedProduct)
    // const newCart = [...cart, selectedProduct];
    setCart(newCart)
    addToDb(selectedProduct.id)
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
      <div className="cart-container bg-orange-100  sticky top-20 right-10  w-64 p-3  h-screen">
         <Cart
         cart={cart}
         ></Cart>
      </div>
    </div>
  );
};

export default Shop;