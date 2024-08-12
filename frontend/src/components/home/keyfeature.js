import React from 'react'
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { BsPersonLock } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";

const KeyFeatures = () => {
  return (
    <>
      <section className="py-[80px]">
        <div className="container">
          <div className='text-center mb-[40px] max-w-[800px] mx-auto'>
            <h2 className='text-[#fd5901]'>Our Key Features</h2>
            <p>Skypro is committed to providing you with a range of features designed to cater to your viewing preferences and elevate your entertainment experience.</p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[25px] sm:max-w-[100%] ">
            {visionData.map((item, i) => (
              <div className='relative rounded-[10px] shadow-[5px_8.66px_30px_0px_rgba(0,0,0,0.15)] bg-[#fff] py-[35px] lg:px-[35px] px-[30px] group after:absolute after:content-[""] after:w-full after:h-full after:hover:bg-[linear-gradient(157deg,#022a6b_0%,#071e43_100%)] after:rounded-[10px] after:origin-left after:opacity-0 after:invisible after:scale-x-0 after:left-0 after:bottom-0 after:duration-700 after:hover:opacity-100 after:hover:visible after:hover:scale-x-100 hover:text-white' key={i}>
                <div className='relative z-10'>
                  <h3 className='absolute top-[-20px] right-0 md:text-[80px] text-[60px] opacity-10 text-[#fd5901]'>0{i + 1}</h3>
                  <span className='text-[40px] inline-block mb-[15px] text-[#fd5901] group-hover:text-white'>{item.icon}</span>
                  <h3 className='mb-[15px] group-hover:text-white'>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
const visionData = [
  {
    title: 'Multi-Device Compatibility',
    icon: <LiaLaptopCodeSolid />,
    text: 'Enjoy seamless streaming services compatible with your smartphones , tablets, smart TV, and laptops and get convenience of watching your favourite content from anywhere.'
  },
  {
    title: 'Video-on-Demand (VoD)',
    icon: <MdOutlineOndemandVideo />,
    text: 'Get exclusive content available at your fingertips with our vast library of movies, TV shows and other exclusive content. Our VoD feature lets you watch what you want, when you want.'
  },
  {
    title: '24/7 Customer Support',
    icon: <MdSupportAgent />,
    text: 'Our dedicated team of experts is available round the clock in order to address issues you encounter and provide prompt solutions. We guarantee you a seamless streaming experience 24/7.'
  },
  {
    title: 'Parental Control',
    icon: <BsPersonLock />,
    text: 'Keep your children away from inappropriate content with our advanced and easy-to-use parental control feature. Customise your viewing options, ensure a family-friendly entertainment environment.'
  },
  {
    title: 'Personalised Recommendation',
    icon: <FaLightbulb />,
    text: 'Skypro provides you with new favourites with personalised content recommendations according to your viewing preferences. Get something new everytime without searching for it.'
  },
  {
    title: 'Cloud DVR Service',
    icon: <FaCloud />,
    text: "Don't worry about strict scheduling hours, missing out on your favourite TV shows and movies. Our DVR functionality allows you to record the programming and store it to the cloud."
  }
];

export default KeyFeatures