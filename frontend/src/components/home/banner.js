import React from 'react'
import { Link } from 'react-router-dom';
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import ImageIcons from '../imageComponent/ImageIcons';
import { windowScroll } from '../../utils/windowScroll';
import LazyLoad from 'react-lazyload';

const Banner = () => {
  return (
    <section className="bg-primary text-white relative overflow-hidden lg:py-[120px] md:py-[90px] py-[50px]">
      <span className='banner_shape1 absolute animate-[20s_linear_infinite_shape01] h-[350px] top-[3%] left-[-110px]'>
        <LazyLoad>
        <img src={ImageIcons.bannerShape1} alt="banner shape 1" loading="lazy" />
        </LazyLoad>
      </span>
      <span className='banner_shape2 absolute translate-y-2/4 opacity-80 animate-[21s_linear_infinite_shape02] h-[350px] ml-[-3px] left-[-110px]'>
      <LazyLoad>
        <img src={ImageIcons.bannerShape2} alt="banner shape 2" loading="lazy" />
      </LazyLoad>
      </span>
      <span className='banner_shape3 absolute animate-[20s_linear_infinite_shape03] right-[-50px] top-0'>
        <LazyLoad>
        <img src={ImageIcons.bannerShape3} alt="banner shape 3" loading="lazy" />
        </LazyLoad>
      </span>
      <div className='container relative z-20'>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[20px] items-center'>
          <div>
            <div className='max-w-[500px] max-md:max-w-full max-md:text-center'>
              <h3 className='text-[#fd5901] mb-[10px] uppercase'>Experience a new era of television with skypro iptv service</h3>
              <h1 className='max-w-[400px] text-white max-md:max-w-full md:mb-[30px] mb-[10px] lg:text-[70px] lg:leading-[80px] md:text-[50px] md:leading-[60px] text-[40px] leading-[50px] uppercase'>Entertainment anytime & anywhere</h1>
              <Link to='/iptv-subscription-packages' className="bg-[#fd5901] uppercase inline-block text-white tracking-[0.5px] relative isolate duration-500 text-center teko-font-family text-[20px] py-[10px] px-[22px] rounded-[8px] mt-[16px] after:absolute after:content-[''] after:w-0 after:h-0 after:-translate-x-2/4 after:-translate-y-2/4 after:bg-[#f5d9d956] after:duration-500 after:z-[-1] after:rounded-[50%] after:left-2/4 after:top-2/4 after:hover:w-full after:hover:h-full after:hover:rounded-[8px]" onClick={windowScroll}>View our latest Plans <FiCheckCircle className='inline-block ml-[5px]' /></Link>
              <Link to='/contact-us' className="ml-[15px] bg-[#fd5901] uppercase inline-block text-white tracking-[0.5px] relative isolate duration-500 text-center teko-font-family text-[20px] py-[10px] px-[22px] rounded-[8px] mt-[16px] after:absolute after:content-[''] after:w-0 after:h-0 after:-translate-x-2/4 after:-translate-y-2/4 after:bg-[#f5d9d956] after:duration-500 after:z-[-1] after:rounded-[50%] after:left-2/4 after:top-2/4 after:hover:w-full after:hover:h-full after:hover:rounded-[8px]" onClick={windowScroll}>Contact Us <MdOutlineArrowForwardIos className='inline-block' /></Link>
            </div>
          </div>
          <div>
            <LazyLoad>
            <img src={ImageIcons.banner} decoding="async" alt="skypro tv iptv service provider" title="skypro tv iptv service provider" />
            </LazyLoad>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner