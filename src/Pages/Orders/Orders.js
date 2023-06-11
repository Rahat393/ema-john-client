import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import ReviewItem from '../../components/ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
  // const {products, initialCart} = useLoaderData()
  const {products,initialCart} = useLoaderData()
  const [cart, setCart] = useState(initialCart);

  const handleReviewItem = (id) => {
    const remainingCart = cart.filter(product => product.id !== id);
    setCart(remainingCart)
    removeFromDb(id)
  }

  console.log(products);
  return (
    <div className='grid   shop-container'>
      <div>
        {
          cart.map(product => <ReviewItem
           key={product.id}
           product={product}
           handleReviewItem={handleReviewItem}
          ></ReviewItem>)
        }
      </div>
     
     <div>
     <Cart cart={cart}></Cart>
     </div>
   
    </div>
  );
};

export default Orders;