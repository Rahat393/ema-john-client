import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';
import { getStoredWl } from '../utilities/WishList';


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [products, setProducts] = useState(null)
    const [cart, setCart] = useState([])
    const [wishList, setWishList] = useState([])

    const cartLength = cart?.length

    useEffect(() => {
      axios.get('products.json')
          .then(res => setProducts(res.data))
          .catch(err => console.error(err));
  }, []);

    // GET CART PRODUCTS FROM LOCALSTORAGE
    useEffect(() => {
      let savedCart = [];
      const storedCart = getStoredCart();
      for (const id in storedCart) {
          const addedProduct = products?.find(product => product.id === id)
          if (addedProduct) {
              const quantity = storedCart[id]
              addedProduct.quantity = quantity
              savedCart.push(addedProduct)
          }
      }
      setCart(savedCart)
  }, [cart, products])

    // GET WISHLIST FROM DB
    useEffect(() => {
      let wishList = [];
      const storedList = getStoredWl();
      for (const id in storedList) {
          const addedList = products?.find(product => product.id === id)
          if (addedList) {
              wishList.push(addedList)
          }
      }
      setWishList(wishList)
  }, [products, cart])

  const authInfo = {
    cart,
    products,
    cartLength,
    wishList
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;