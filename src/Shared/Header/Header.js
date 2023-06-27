import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/zaraa.png';
import { AuthContext } from '../../contexts/AuthProvider';
 

const Header = () => {

  const {cartLength} = useContext(AuthContext)

  const navMenu = <React.Fragment>
     <li>
      <Link to='/allproduct'  className='text-lg font-semibold'>
      <lord-icon
    src="https://cdn.lordicon.com/medpcfcy.json"
    trigger="hover"
    colors="primary:#121331"
    state="hover-1"
    style={{ height: "25px", width: "25px" }}></lord-icon>  
      Collections</Link></li>

       


     <li><Link to='contact' className='text-lg font-semibold'>
    <lord-icon
    src="https://cdn.lordicon.com/hpivxauj.json"
    trigger="hover"
    colors="primary:#121331"
    state="hover"
    style={{ height: "25px", width: "25px" }}>
</lord-icon>
     Contact</Link></li>

     <li  >
        <Link  to='/orders' className='text-lg font-semibold'>
        <lord-icon
    src="https://cdn.lordicon.com/hyhnpiza.json"
    trigger="hover"
    colors="primary:#121331"
    style={{ height: "25px", width: "25px" }}>
</lord-icon>
           My Cart
        </Link>
        <p className='relative z-10 bg-[#D61355] ml-24 -mt-12 text-white flex justify-center items-center rounded-3xl h-5 w-3'>{cartLength}</p>

      </li>
  </React.Fragment>
  return (
    <div className=' fixed left-0 right-0 top-0 z-10 bg-[#fff] '>
       

<div className="navbar  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow   rounded-box w-52">
         {navMenu}
      </ul>
    </div>
    <div className='flex'>
    
     <Link   className="btn btn-ghost normal-case text-3xl text-yellow-600 font-semibold   "> <img className='w-16 -mr-4' src={logo} alt="" />  zarafashion</Link>
 
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {navMenu}
    </ul>
  </div>
  <div className="navbar-end mr-6">
    <button>
    <ul className='flex items-center justify-center  '>
    <lord-icon
                            target="button"
                            src="https://cdn.lordicon.com/xfftupfv.json"
                            trigger="hover"
                            class="set-color"
                            style={{ height: "25px", width: "25px" }}>
                        </lord-icon>
<span className='text-lg font-semibold ml-1 '>Search</span>
    </ul>
    </button>
     
    <button className='ml-4'>
      <ul className=''>
 <Link to='/wishlist'>
 <lord-icon
    src="https://cdn.lordicon.com/pnhskdva.json"
    trigger="hover"
    colors="primary:#121331"
    style={{ height: "25px", width: "25px" }}>
</lord-icon>
<span className='text-lg font-semibold ml- mt-5 '> WishList </span>
 </Link>
      </ul>
    </button>
     
    <button  className='ml-5 bg-red-400 px-3 py-2 rounded-md hover:bg-red-300 text-white font-semibold'>
      Sign In
    </button>
  </div>
</div>
    </div>
 
  );
};

export default Header;