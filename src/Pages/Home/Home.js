import React from 'react';
import Shop from '../../components/Shop/Shop';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import HeoCarousel from '../../components/Carousels/HeoCarousel';
import Features from './Features/Features';
import Review from './Review/Review';
defineElement(lottie.loadAnimation);

 
const Home = () => {
  return (
    <div className='  p-5  mx-auto'>
       <div className='max-w-screen-xl mx-auto'>
     
      <HeoCarousel></HeoCarousel>
      <Shop></Shop>
      <Features></Features>
      <Review></Review>
       </div>
       
    </div>
  );
};

export default Home;