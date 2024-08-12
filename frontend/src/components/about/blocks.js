import React from 'react'
import ImageIcons from '../imageComponent/ImageIcons';
import Button from '../shared/button';

const Blocks = () => {
  return (
    <section className="lg:py-[130px] md:py-[80px] py-[50px] bg-repeat xl:bg-center bg-right bg-cover bg-fixed" style={{ backgroundImage: `url(${ImageIcons.offerBg})` }}>
      <div className='container'>
        <div className='flex justify-end'>
          <div className='md:w-[50%]'>
            <h3 className='uppercase text-[#fd5901] mb-[5px] text-[42px]'>40% Off for you</h3>
            <h2 className='uppercase text-[#071e43] mb-[20px]'>Save money by bundling your iptv service</h2>
            <p>We are dedicated to serving customers. We achieve this not only through our extensive portfolio of internet.</p>
            <Button link='Contact Us' url='/contact-us' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blocks