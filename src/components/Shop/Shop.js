import React, {  useEffect, useState } from 'react';
import './Shop.css'
import ProductsCard from '../Products/ProductsCard';
 
import { addToDb,   getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
 

const Shop = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  
   
  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data =>  setProducts(data))
  },[]);

  useEffect( () => {
    const storedCart = getStoredCart()
    const savedCart = []
    // console.log(storedCart);
    for(const id in storedCart){
      const addedProduct = products.find(product => product.id === id);
       if (addedProduct){
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        savedCart.push(addedProduct)
       }
    }
    setCart(savedCart)
  },[cart, products])

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);
    if (!exists) {
        selectedProduct.quantity = 1;
        newCart = [...cart, selectedProduct]
        toast.success('Product Added Successfully !!')
    }
    else {
        const rest = cart.filter(product => product.id !== selectedProduct.id)
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists];
        toast.success('Product Added Successfully !!')
    }
     
    setCart(newCart)
    addToDb(selectedProduct.id)
}


  return (
    <div  >
              <div className='mt-12'>
                <div className='flex items-center'>
                    <lord-icon
                        src="https://cdn.lordicon.com/tqywkdcz.json"
                        trigger="loop"
                        style={{ width: "60px", height: "60px" }}>
                    </lord-icon>
                    <h2 className='font-bold text-2xl textGradient'>Hot Collection</h2>
                </div>
            </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 product-container">
         {
          products.slice(0,12).map(product => <ProductsCard
          key={product.id}
           product={product}
           handleAddToCart={handleAddToCart}
     
          ></ProductsCard>)
         }
       </div>

      <div className='flex items-center justify-end mt-8'>
                <Link to="/allproduct" className='cursor-pointer flex items-center gap-2'>
                    <h2 className='text-[#0081B4] font-bold text-md hover:text-[#344D67]'>See More</h2>
                    <lord-icon
                        target="a"
                        src="https://cdn.lordicon.com/zmkotitn.json"
                        trigger="hover"
                        colors= "primary:#0081B4"
                        style={{ width: "18px", height: "18px" }}>
                    </lord-icon>
                </Link>
            </div>
       
      
    </div>
  );
};

export default Shop;