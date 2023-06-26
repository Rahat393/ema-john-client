import React, { useEffect, useState } from 'react';
import './Shop.css'
import ProductsCard from '../Products/ProductsCard';
 
import { addToDb,   getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

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
    // console.log(storedCart);
    for(const id in storedCart){
      const addedProduct = products.find(product => product.id === id);
       if (addedProduct){
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        savedCart.push(addedProduct)
       }
    }
    setCart(savedCart)
  },[cart, products])

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
     
    setCart(newCart)
    addToDb(selectedProduct.id)
}
  return (
    <div className='  '>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 product-container">
         {
          products.slice(0,12).map(product => <ProductsCard
          key={product.id}
           product={product}
           handleAddToCart={handleAddToCart}
          ></ProductsCard>)
         }
         <button  className='text-2xl hover:text-sky-700'><Link to={'/allproduct'}>see more</Link></button>
      </div>
       
      
    </div>
  );
};

export default Shop;