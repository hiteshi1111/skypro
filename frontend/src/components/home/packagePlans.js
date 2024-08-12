import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineWifi } from "react-icons/ai";
import { PiMonitorLight } from "react-icons/pi";
import { MdOutlineCellTower } from "react-icons/md";
import { LiaPlusSolid } from "react-icons/lia";
import ImageIcons from '../imageComponent/ImageIcons';
import LazyLoad from 'react-lazyload';

const PackagePlans = () => {
  return (
    <section className="relative overflow-hidden">
      <div className='absolute top-[-130px] w-[400px] z-[-1] left-0'>
        <LazyLoad>
        <img src={ImageIcons.pricingBg} alt='Pricing' />
        </LazyLoad>
      </div>
      <div className='container'>
        <h2 className='text-center text-[#fd5901] uppercase font-medium'>Choose your perfect plan</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-[20px]'>
          {pricingData.map((data, i) => (
            <div key={i} className='bg-white p-[15px] border-[10px] border-solid border-[#fbfbfb]'>
              <div className='group bg-[#fbfbfb] hover:bg-[#071e43] hover:text-white duration-700 px-[30px] py-10'>
                <h3 className='mb-[20px] group-hover:text-white'>{data.title}</h3>
                <ul className='flex gap-[10px] mb-[50px]'>
                  <li><span className='bg-[#fce9e9] w-[45px] h-[45px] flex justify-center items-center text-[#fd5901] rounded-[50%] border-[3px] border-solid border-white'><AiOutlineWifi /></span></li>
                  <li><span className='bg-[#fce9e9] w-[45px] h-[45px] flex justify-center items-center text-[#fd5901] rounded-[50%] border-[3px] border-solid border-white'><PiMonitorLight /></span></li>
                  <li><span className='bg-[#fce9e9] w-[45px] h-[45px] flex justify-center items-center text-[#fd5901] rounded-[50%] border-[3px] border-solid border-white'><MdOutlineCellTower /></span></li>
                </ul>
                <ul className='mb-[30px]'>
                  <li className='relative pl-[25px] after:absolute after:content-[""] after:w-2.5 after:h-2.5 after:bg-[#fd5901] after:-translate-y-2/4 after:rounded-[50%] after:left-0 after:top-2/4'>IPTV Services</li>
                </ul>
                <div className='flex items-center justify-between'>
                  <h2 className='text-[#fd5901] mb-0 group-hover:text-white'>{data.price} <span className='text-[20px] text-[#333] group-hover:text-white'>/ Month</span></h2>
                  <Link to={data.links} target="_blank" className='text-[#fd5901] hover:bg-[#fd5901] hover:text-[#fff] w-[55px] bg-white h-[55px] flex justify-center items-center text-xl rounded-[50%] border-2 border-solid border-[#fadbdb]' ><LiaPlusSolid /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const pricingData = [
  {
    title: "FTA + Hindi Bronze SD",
    price: "₹105+GST",
    links: "https://res.cloudinary.com/devh5cxfo/image/upload/v1715329547/khlb0qkxfq6lollokois.pdf"
  },
  {
    title: "FTA +Hindi Gold HD",
    price: "₹350+GST",
    links: "https://res.cloudinary.com/devh5cxfo/image/upload/v1715333614/osepdvce8hjd541uweqg.pdf"
  },
  {
    title: "Hindi PLATINUM HD",
    price: "₹490+GST",
    links: "https://res.cloudinary.com/devh5cxfo/image/upload/v1715328983/lyngrzu4dobxje82dbci.pdf"
  },
];

export default PackagePlans