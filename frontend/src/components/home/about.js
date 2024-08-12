import React from 'react'
// import LiteYouTubeEmbed from "react-lite-youtube-embed";
import Button from '../shared/button';
import ImageIcons from '../imageComponent/ImageIcons';
import LazyLoad from 'react-lazyload';

const AboutUs = () => {
  return (
    <section className='relative'>
      <div className='absolute left-0 bottom-0 max-md:hidden'>
        <LazyLoad>
        <img src={ImageIcons.aboutLeftBg} alt='About Left' />
        </LazyLoad>
      </div>
      <div className='absolute right-0 bottom-0'>
        <LazyLoad>
        <img src={ImageIcons.aboutRightBg} alt='About Right' />
        </LazyLoad>
      </div>
      <div className="container">
        <div className='grid lg:grid-cols-2 items-center grid-cols-1 lg:gap-[50px] gap-[40px]'>
          <div className='about_vedio relative overflow-hidden xl:pt-[56%] pt-[56%]'>
            {/* <LiteYouTubeEmbed
              id={youtubeId}
            /> */}
            <LazyLoad>
            <iframe className='absolute top-0 left-0 w-full h-full object-cover object-center' src="https://www.youtube.com/embed/-c345tCaU8w?si=pxPEQiGXIcIC9jz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </LazyLoad>
          </div>
          <div className='max-lg:order-first'>
            <h2 className="text-[#fd5901] uppercase mb-[5px]">About Us</h2>
            <h3 className='uppercase'>Experience a world of immersive skypro iptv entertainment</h3>
            <p>We, as a preeminent distributor of IPTV services are always committed to offer the finest customer experience. At SkyPro, a wide spectrum of plans and services is provided to suit your needs. With our IPTV services, convert your TV into an interactive Home PC which could be enjoyed by the whole family, as we strive to deliver customers with exceptional IPTV, TV and phone services for an impeccable entertainment experience and connectivity journey.</p>
            <Button link='Know More' url='/about-us' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs