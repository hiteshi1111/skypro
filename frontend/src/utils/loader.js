import React from 'react';
import loaderImg from '../assets/images/loader.gif';
import LazyLoad from 'react-lazyload';

function Loader() {
  return (
    <div className='absolute flex items-center justify-center w-full h-full left-0 top-0 after:content-[""] after:absolute after:left-0 after:right-0 after:top-0 after:w-full after:h-full after:bg-[#fff] after:opacity-70'>
     <LazyLoad>
      <img src={loaderImg} className='relative z-10' alt="loader...."/>
      </LazyLoad> 
    </div>
  )
}
export default Loader;
