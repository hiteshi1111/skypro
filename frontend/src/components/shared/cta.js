import React from 'react'
import Button from './button'

function Cta() {
    return (
        <section className='relative pt-0 lg:pb-[40px] pb-[20px]'>
            <div className='container'>
                <div className='bg-[#071e43] text-white md:p-[50px] p-[30px] flex md:flex-nowrap flex-wrap justify-between items-center gap-[25px] '>
                    <div className="max-w-[900px]">
                        <h2 className='font-medium mb-[10px] text-white'>Subscribe to Our Best IPTV Packages</h2>
                        <p className='md:text-[20px] text-[18px] mb-0'>Experience a wide variety of channels and programming with our affordable IPTV packages, customized to suit your unique preferences.</p>
                    </div>
                    <div className="min-w-[140px]">
                        <Button url='https://www.skypro.co.in/iptv-subscription-packages' link="Subscribe Now" />
                    </div>          
                </div>
            </div>
        </section>
    )
}

export default Cta
