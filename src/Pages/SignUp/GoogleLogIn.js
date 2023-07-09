import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const GoogleLogIn = () => {
  const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success("Login with google successfull!")
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }
  return (
    <button onClick={handleGoogleLogin} className='mt-3 btn btn-outline w-full normal-case flex items-center gap-2'>
    <img src="https://img.freepik.com/free-icon/search_318-265146.jpg" alt="" className='h-5' />
    Continue with Google
</button>
  );
};

export default GoogleLogIn;