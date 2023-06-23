import React from 'react';
import Shop from '../../components/Shop/Shop';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
defineElement(lottie.loadAnimation);

 
const Home = () => {
  return (
    <div className='  p-5  mx-auto'>
       <div className='max-w-screen-xl mx-auto'>
     
      <Shop></Shop>
       </div>
       
    </div>
  );
};

export default Home;