import React from 'react'
import ImageIcons from '../imageComponent/ImageIcons';
import { GiWifiRouter } from "react-icons/gi";
import { SlScreenSmartphone } from "react-icons/sl";
import { IoHomeOutline } from "react-icons/io5";
import { GiRadioTower } from "react-icons/gi";
import LazyLoad from 'react-lazyload';

const Service = () => {
  return (
    <section className='py-0'>
      <div>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 max-lg:gap-[20px]'>
          {serviceData.map((data, i) => (
            <div key={data.key} className='relative group' >
              <div>
                <LazyLoad>
                <img
                  src={data.imgSrc}
                  alt="Skypro iptv Services"
                  title="Skypro iptv Services"
                  loading="lazy"
                  className='w-full'
                />
                </LazyLoad>
              </div>

              <div className='group-hover:bg-[#071e43] group-hover:bottom-[50px] flex justify-between items-center w-[90%] px-[15px] py-[20px] bg-white absolute z-[1] -translate-x-2/4 duration-300 p-[30px] left-2/4 bottom-0'>
                <div>
                  <h4 className='group-hover:text-white mb-[5px] max-xl:text-[21px]'>{data.title}</h4>
                  <p className="mb-0 group-hover:text-white max-xl:text-[15px]">{data.para}</p>
                </div>
                <div>
                  <span className='xl:text-[40px] text-[30px] text-[#fd5901]'>{data.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

const serviceData = [
  {
    imgSrc: ImageIcons.serviceImg1,
    title: "One stop solution",
    para: "99% Internet Uptime",
    icon: <GiWifiRouter />,
    key: "1",
  },
  {
    imgSrc: ImageIcons.serviceImg2,
    title: "Weather Proof Signal",
    para: "24/7 Customer Support",
    icon: <SlScreenSmartphone />,
    key: "2",
  },
  {
    imgSrc: ImageIcons.serviceImg3,
    title: "Unlimited New Content",
    para: "Watch Your Latest Shows",
    icon: <IoHomeOutline />,
    key: "3",
  },
  {
    imgSrc: ImageIcons.serviceImg4,
    title: "4K Ultra HD STB",
    para: "99% Data Connectivity",
    icon: <GiRadioTower />,
    key: "4",
  },
];

export default Service