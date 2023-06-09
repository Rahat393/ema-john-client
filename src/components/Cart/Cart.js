import React from 'react';

const Cart = ({cart}) => {
  console.log(cart);
  return (
    <div>
      <h3>Order Summary</h3>
      <h4>Selected items : {cart.length} </h4>
    </div>
  );
};

export default Cart;