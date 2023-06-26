import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import './Main.css'
import ScrollToTop from '../components/ScrollToTop';

const Main = () => {
  return (
    <section>
        <div className='wrapper'>
        <Header></Header>
         <div className='  bg-green-50 min-h-[50vh]   mt-20'>
         <Outlet ></Outlet>
         </div>
        </div>
        <footer className="footerr">
          <ScrollToTop></ScrollToTop>
      <Footer></Footer>
      </footer>
    </section>
  );
};

export default Main;