import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Orders from "../Pages/Orders/Orders";
import Inventory from "../components/Inventory/Inventory";
import { productsAndcardLoader } from "../components/loader/productsAndCardLoader";
import Contact from "../Pages/Contact/Contact";
import WishList from "../Pages/WishList/WishList";

export const routes =  createBrowserRouter ([
  {
   path: '/',
   element: <Main></Main>,
   children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/wishlist',
      element: <WishList></WishList>
    },
    {
      path: '/orders',
      loader: productsAndcardLoader,
      element: <Orders></Orders>
    },
    {
      path: '/inventory',
      element: <Inventory></Inventory>
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    }

   ] 
  }
])