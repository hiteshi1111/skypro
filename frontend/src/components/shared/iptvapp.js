import React from 'react'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import ImageIcons from '../imageComponent/ImageIcons'
import LazyLoad from 'react-lazyload';

const IptvApp = ({ bgColor }) => {
  return (
    <section style={{ backgroundColor: bgColor }}>
      <div className='container'>
        <div className='flex max-sm:flex-col justify-between items-center gap-[50px]'>
          <div className='w-[60%] max-sm:w-full'>
            <h2>Skypro IPTV Mobile App</h2>
            <p>Change the way you watch television, with our Skypro IPTV app, your gateway to the universe of entertainment that transcends ordinary.</p>
            <p>Experience endless viewing options, where every genre, every show, and every blockbuster movie is at your fingertips, ready to be explored.</p>
            <Link className="text-white hover:bg-white hover:text-[#fd5901] duration-500 bg-[#fd5901] h-[42px] px-[15px] inline-flex items-center justify-center rounded-[8px] font-medium mt-[15px]" to='https://play.google.com/store/apps/details?id=com.onnet.skypro' target="_blank"><IoLogoGooglePlaystore className="inline-block pr-[3px] text-[22px]" /> GOOGLE PLAY</Link>
          </div>
          <div className='w-[40%] max-sm:w-full'>
            <LazyLoad>
            <img className='mx-auto' src={ImageIcons.skyproAppImg} alt='Skypro mobile App' />
            </LazyLoad>
          </div>
        </div>
      </div>
    </section>
  )
}
export default IptvApp