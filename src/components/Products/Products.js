import React from 'react';

const Products = ({product, handleAddToCart}) => {
  const {name, img,seller, price, } = product
  return (
    <div>
  <div>
  <img className='h-64 rounded-md' src={img} alt="" />
  <p className='mt-3'>
  <small className='text-red-400 font-semibold ' >{seller}</small>

  </p>
      <h2 className='font-semibold'> {name}</h2>
      <h3 className='text-xl font-bold mt-5'>USD  {price}</h3>
  </div>
 <button className='   mt-2 w-4/5 p-2 rounded-md'  onClick={() => handleAddToCart(product) }>
 <div className='text-center rounded-md p-2 bg-blue-500 '>
    <p className='text-white font-semibold'>Add to Cart</p>
  </div>
 </button>
    </div>
  );
};

export default Products;