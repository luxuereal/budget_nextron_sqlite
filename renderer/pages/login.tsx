import React from 'react';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LogIn from '../components/login';

const Login = () => {
  return (
    <div className='relative w-full h-[calc(100vh-16px)]'>
      <ToastContainer position="top-center" theme="dark" autoClose={3000} />
      <div className='w-[500px] h-[250px] absolute right-2 bottom-16'>
        <Image width="1000" height="600" className='w-[500px] h-[250px] object-cover' src="/images/bg.png" alt="" />
      T</div>
      <LogIn />
    </div>
  );
}

export default Login;