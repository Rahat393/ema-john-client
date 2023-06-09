import React from 'react';
import logo from '../../assets/logo/zaraa.png'

const Footer = () => {
  return (
    <footer className='  bg-red-50'>
      <div className="footer p-10  text-base-content">
  <div>
    <img className='w-24' src={logo} alt="" />
     <p> zara fashion Ltd.<br/>Providing reliable tech since 2020</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</div>
<div className='text-center mb-0 mt-10 text-2xl pb-10 '>
  <h4>© 2023 zara fashions. All Rights Reserved.</h4>
</div>
    </footer>
  );
};

export default Footer;