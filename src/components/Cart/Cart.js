import React from 'react';

const Cart = ({cart, deleteCart}) => {
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
     
      <h3 className='text-center font-semibold text-amber-800 text-2xl mb-4'>Order Summary</h3>
      <h4>Selected items : {quantity} </h4>
      <h4>Total Price:  ${total }</h4>
      <h4>Total Shipping Charge: ${shipping}</h4>
      <h4>Tax: ${tax}</h4>
      <h4 className='text-xl font-semibold'>Grand Total: {GrandTotal.toFixed(2)}</h4>
   <div className='flex bg-red-500 w-36  px-2 mt-3 ml-14 rounded-md   text-white '>
  <div className='  mt-2'>
  <lord-icon
    src="https://cdn.lordicon.com/kfzfxczd.json"
    trigger="hover"
    colors="primary:#ffffff"
    style={{width:'25px',height:'25px'}}>
</lord-icon>
  </div>
      <button className='ml-1' onClick={deleteCart}>Delete Cart</button>
   </div>
    </div>
  );
};

export default Cart;