import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';
import { getStoredWl } from '../utilities/WishList';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth'
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();

 
const auth = getAuth(app)
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



   //========================================
    // FIREBASE LOGIN FUNTIONALITIES
    //========================================
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create new user
    const emailRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user profile
    const updateUser = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo)
    }

    // login with email and password
    const emailLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    // forgot password
    const forgotPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    // google login
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

  const authInfo = {
    cart,
    products,
    cartLength,
    wishList,
    emailRegister,
     emailLogin, updateUser,
      logout, forgotPassword,
       googleLogin, user, loading
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;