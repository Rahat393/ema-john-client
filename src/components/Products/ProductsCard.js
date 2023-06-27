import React, { useContext, useEffect, useState } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { addToWl, getStoredWl, removeFromWl } from '../../utilities/WishList';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { getStoredCart } from '../../utilities/fakedb';
 
const ProductsCard = ({product , handleAddToCart  }) => {
  const {  wishList, cart } = useContext(AuthContext)

  const {id:productId, name, img,seller, price, ratingsCount  } = product
  const [added, setAdded] = useState(false)
  const [storedWl, setStoredWl] = useState(false)

  useEffect(() => {
    const storedCart = getStoredCart();
    if (storedCart[productId]) {
        setAdded(true);
    } else {
        setAdded(false);
    }
}, [cart, productId]);

  useEffect(() => {
    const storedWl = getStoredWl();
    if (storedWl[productId]) {
        setStoredWl(true);
    } else {
        setStoredWl(false);
    }
  }, [wishList, productId]);
  
  const handleAddToWl = () => {
    if (!storedWl) {
        addToWl(productId)
        setStoredWl(true)
        toast.success("Items added to the Wishlist")
    } else {
        removeFromWl(productId)
        setStoredWl(false)
        toast.error("Items removed from the Wishlist")
    }
  }
  return (
    <div className='hover:bg-white p-7 rounded-md shadow-lg mb-6'>
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
<div className='flex justify-between items-center'>
<button className='   mt-2 w-4/5 p-2 rounded-md'  onClick={() => handleAddToCart(product) }>
  {/* {console.log(product)} */}
 <div className='text-center rounded-md p-2 bg-blue-500 '>
    <p className='text-white font-semibold'>Add to Cart</p>
  </div>
 </button>
 <span onClick={  handleAddToWl }
  data-tip={!storedWl ? "add to wishlist" : "remove from wishlist"}
   className='mt-3 cursor-pointer tooltip tooltip-success'>
<lord-icon
 src={!storedWl ? "https://cdn.lordicon.com/pnhskdva.json" : "https://cdn.lordicon.com/xryjrepg.json"}
     target="span"
    trigger="hover"
    colors="primary:#4030e8"
    style={{width:'35px',height:'35px'}}>
</lord-icon>
 
 </span>
 
</div>
    </div>
  );
};

export default ProductsCard;