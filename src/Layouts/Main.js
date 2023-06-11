import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
  return (
    <div>
         <Header></Header>
         <div className='mt-24 max-w-screen-xl  mx-auto'>
         <Outlet ></Outlet>
         </div>
         <Footer></Footer>
    </div>
  );
};

export default Main;