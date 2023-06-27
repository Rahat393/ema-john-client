import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import WishListCard from '../../components/WishListCard/WishListCard';
import { Link } from 'react-router-dom';

const WishListPage = () => {
  const { wishList } = useContext(AuthContext)
  return (
    <div className='max-w-screen-xl mx-auto'>
       <>
            <h2 className='text-center text-4xl font-bold text-orange-600 my-6'>My Wishlist</h2>
            {wishList?.length > 0 ?
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                    {wishList.map((item, index) => <WishListCard key={index} data={item} />)}
                </div>
                :  <p className='flex items-center justify-center min-h-full text-3xl lg:mt-24'>Your WishList Is Empty Now ! Please  <Link to='/allproduct'><span className='underline text-blue-900 ml-3'> Shop Here</span></Link> </p>
            }
        </>
    </div>
  );
};

export default WishListPage;