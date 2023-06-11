import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0  '>
      <div className="navbar  bg-gray-900    ">
  <div className="flex-1  ">
    <Link to={'/'} className="btn btn-ghost normal-case text-xl ">  <img src={logo} alt="" /></Link>
  </div>
  <div className="flex-none ">
    <ul className="   menu-horizontal px-1 text-white hover:text-white">
      <li className='mr-5'><Link to="/"> Shop</Link></li>
      <li className='mr-5'><Link to="/orders"> Order</Link></li>
     <li  className='mr-5'> <Link to={'/order-review'}> Order Review</Link></li>
     <li  className='mr-5'> <Link to='/inventory'> Inventory</Link></li>
      <li className='mr-5'><Link to={'/login'}> LogIn</Link></li>
       
    </ul>
  </div>
</div>
    </div>
  );
};

export default Header;