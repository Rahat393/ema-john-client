import React from 'react';

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const GrandTotal = total + shipping + tax;
     
  return (
    <div>
     
      <h3 className='text-center font-bold text-xl mb-4'>Order Summary</h3>
      <h4>Selected items : {quantity} </h4>
      <h4>Total Price:  ${total }</h4>
      <h4>Total Shipping Charge: ${shipping}</h4>
      <h4>Tax: ${tax}</h4>
      <h4 className='text-xl font-semibold'>Grand Total: {GrandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;