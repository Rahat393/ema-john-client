import React from 'react';

const Products = ({product}) => {
  const {name, img,seller, price} = product
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
    </div>
  );
};

export default Products;