import React from 'react'
import ImageIcons from '../imageComponent/ImageIcons'
import LazyLoad from 'react-lazyload';

const Partners = () => {
  return (
    <section className='bg-[#fed2ba]'>
      <div className="container">
        <div className='text-center max-w-[600px] mx-auto text-[#071e43] lg:mb-[40px] mb-[30px]'>
          <h2 className='uppercase'>Our Partners</h2>

          <p>Our clients are the backbone of our business. We are proud to
            work with a wide range of companies, from small businesses to
            Fortune 500 enterprises.</p>
        </div>
        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 xl:gap-[30px] lg:gap-[20px] gap-[10px]'>
          <div className='bg-[#fff] duration-700 hover:scale-[1.06] px-[20px] py-[15px] group'>
            <LazyLoad>
            <img className='duration-700 group-hover:scale-[1.06] max-w-[140px] mx-auto w-full' src={ImageIcons.partner1} alt='My Ventures' />
            </LazyLoad>
          </div>
          <div className='bg-[#fff] duration-700 hover:scale-[1.06] px-[20px] py-[15px] group'>
            <LazyLoad>
            <img className='duration-700 group-hover:scale-[1.06] max-w-[140px] mx-auto w-full' src={ImageIcons.partner2} alt='Velosting' />
            </LazyLoad>
          </div>
          <div className='bg-[#fff] duration-700 hover:scale-[1.06] px-[20px] py-[15px] group'>
            <LazyLoad>
            <img className='duration-700 group-hover:scale-[1.06] max-w-[140px] mx-auto w-full' src={ImageIcons.partner3} alt='MyPunjabi' />
            </LazyLoad>
          </div>
          <div className='bg-[#fff] duration-700 hover:scale-[1.06] px-[20px] py-[15px] group'>
            <LazyLoad>
            <img className='duration-700 group-hover:scale-[1.06] max-w-[140px] mx-auto w-full' src={ImageIcons.partner4} alt='Abacus' />
            </LazyLoad>
          </div>
          <div className='bg-[#fff] duration-700 hover:scale-[1.06] px-[20px] py-[15px] group'>
            <LazyLoad>
            <img className='duration-700 group-hover:scale-[1.06] max-w-[140px] mx-auto w-full' src={ImageIcons.partner5} alt='My Internet' />
            </LazyLoad>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners