import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'


const ProductsCard = ({product, handleAddToCart}) => {
  const {name, img,seller, price, ratingsCount  } = product
  return (
    <div className='hover:bg-white p-7 rounded-md shadow-lg'>
  <div>
  <img className='h-64 rounded-md' src={img} alt="" />
  <p className='mt-3'>
  <small className='text-red-400 font-semibold ' >{seller}</small>

  </p>
      <h2 className='font-semibold'> {name}</h2>

     <div className='flex lg:flex-row md:flex-row flex-col lg:gap-0 md:gap-0 gap-1 justify-between'>
     <h3 className='text-xl font-bold mt-5'>USD  {price}</h3>
     <div className='flex items-center gap-2'>
                        <span className='flex lg:gap-1 md:gap-1 gap-[2px] lg:text-sm md:text-sm text-xs mt-4 text-[#FFB84C]'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarHalf />
                            <BsStar />
                        </span>
                        <span className='mt-4' style={{ height: "4px", width: "4px", borderRadius: "50%", backgroundColor: "#888" }}></span>
                        <span className='mt-4 lg:text-md md:text-md text-xs'>{ratingsCount}</span>
                    </div>
     </div>
  </div>
 <button className='   mt-2 w-4/5 p-2 rounded-md'  onClick={() => handleAddToCart(product) }>
  {/* {console.log(product)} */}
 <div className='text-center rounded-md p-2 bg-blue-500 '>
    <p className='text-white font-semibold'>Add to Cart</p>
  </div>
 </button>
    </div>
  );
};

export default ProductsCard;