import React, { useContext  } from 'react';
import { Link  } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import './Orders.css'
import {   FiPlusCircle, FiMinusCircle } from 'react-icons/fi'
import { addToDb, deleteShoppingCart, removeFromDb, removeOneFromDb } from '../../utilities/fakedb';
import { AuthContext } from '../../contexts/AuthProvider';

 
const Orders = () => {
 
  const {cart} = useContext(AuthContext)
 
  const deleteCart = () => {
    deleteShoppingCart()
  }
  const handleReviewItem = (id) => {
    // const remainingCart = cart.filter(product => product.id !== id);
    // setCart(remainingCart)
    removeFromDb(id)
  }
  const handleAddOneMore = (id) => {
    addToDb(id)
    
}

  const handleRemoveOne = id => {
    removeOneFromDb(id)
    
  }
  
   
  return (
    <div className='grid   shop-container max-w-screen-xl mx-auto'>
      <div>
        {
          cart.map(({ name, id, img, price, quantity },  index) => <div key={index}>
          
              <div className='style-reviewItem'>
    <div>
        <img src={ img} alt="" />
    </div>
    <div className='review-details-container'>
        <div className='review-details'>
            <p>{ name}</p>
            <p><small>Price: ${ price * quantity}</small></p>
            <div >
            <p className='flex items-center gap-1 font-semibold'>  Quantity:  
            <button className='ml-1' onClick={() => handleRemoveOne ( id)} disabled={quantity <= 1}  >
              <FiMinusCircle    className={quantity <= 1 ? 'text-[#aaa]' :  'text-red-500'}/> 
              </button>   {quantity }
            <button onClick={() => handleAddOneMore( id)}>
            <FiPlusCircle className='text-blue-950'/>
              </button>  </p>
            </div>
        </div>
        <div className='delete-container'>
            <button  onClick={() =>  handleReviewItem ( id)} className='delete-btn'>
            <lord-icon
    src="https://cdn.lordicon.com/kfzfxczd.json"
    trigger="hover"
    colors="primary:#121331"
    state="hover-empty"
    style={{ height: "25px", width: "25px" }}>
</lord-icon>
            </button>
        </div>
    </div>
</div>
          </div>)
        }
         
        {
          cart.length === 0 && <h2 className='text-3xl'>NO product added. Please <Link className='underline text-blue-800' to={'/'}>Shop here</Link></h2>
        }
      </div>
     
     <div>
     <Cart
     deleteCart={deleteCart}
     cart={cart}></Cart>
     </div>
   
    </div>
  );
};

export default Orders;