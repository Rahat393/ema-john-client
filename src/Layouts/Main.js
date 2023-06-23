import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import './Main.css'

const Main = () => {
  return (
    <div>
        <div className='wrapper'>
        <Header></Header>
         <div className='  bg-green-50   mt-20'>
         <Outlet ></Outlet>
         </div>
        </div>
        <footer className="footer">
      <Footer></Footer>
      </footer>
    </div>
  );
};

export default Main;