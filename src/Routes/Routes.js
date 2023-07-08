import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Orders from "../Pages/Orders/Orders";
import Inventory from "../components/Inventory/Inventory";
import { productsAndcardLoader } from "../components/loader/productsAndCardLoader";
import Contact from "../Pages/Contact/Contact";
 
import AllProducts from "../Pages/AllProducts/AllProducts";
import WishListPage from "../Pages/WishListPage/WishListPage";
import ProductsCard from "../components/Products/ProductsCard";

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
      element: <WishListPage></WishListPage>
    },
    {
      path: '/orders',
      element: <Orders></Orders>
    },
    {
      path: '/allproduct',
      element: <AllProducts></AllProducts>
    },
    {
      path: '/inventory',
      element: <Inventory></Inventory>
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    },
    {
      path: '/products/:id',
      loader: async({params}) => await fetch (`products.json/products/${params.id}`),
      element: <ProductsCard/>
    }

   ] 
  }
])