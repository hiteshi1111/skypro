import React from 'react'
import ImageIcons from '../imageComponent/ImageIcons';
import { GrSatellite } from "react-icons/gr";
import LazyLoad from 'react-lazyload';

const Facts = () => {
  return (
    <section className="bg-[#f9f9f9]">
      <div className="container">
        <div className='grid items-center md:grid-cols-2 gap-[40px]'>
          <div className='max-w-[490px]'>
            <h2 className='uppercase'>Unlimited movies, tv shows and more</h2>
            <p className='mb-[20px]'>We are dedicated to serving customers. We achieve this not only through our extensive portfolio.</p>
            <div className='flex justify-center'>
              <div className='w-[70px]'>
                <GrSatellite className='text-[45px] text-[#fd5901]' />
              </div>
              <div className='w-[calc(100%_-_70px)]'>
                <h3 className='uppercase'>540+ Satellite channels</h3>
                <p className='mb-0'>IPTV Services, Safe & Smarter</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="bg-center bg-no-repeat	bg-contain" style={{ backgroundImage: `url(${ImageIcons.funBg})` }}>
             <LazyLoad>
              <img
                src={ImageIcons.funImg}
                alt="Tv Shows, Unlimited movies"
                title="Tv Shows, Unlimited movies"
                loading="lazy"
                className='mx-auto sm:max-w-[400px] max-w-[280px]'
              />
             </LazyLoad>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facts