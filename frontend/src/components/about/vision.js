import React from 'react'
import ImageIcons from '../imageComponent/ImageIcons';
import { GiBullseye } from "react-icons/gi";
import { FaLowVision } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { LuBrainCircuit } from "react-icons/lu";
import { FaTowerBroadcast } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import Button from '../shared/button';

const Vision = () => {
  return (
    <>
      <section className="py-[80px]">
        <div className="container">
          <div className="relative mb-[50px] font-normal shadow-[0px_2px_10px_#ddd] p-[35px] after:absolute after:content-[''] after:w-[50px] after:hover:w-full after:h-[50px] after:hover:h-full after:duration-700 after:border-r-[4px] after:border-r-[#e35f21] after:border-b-[4px] after:border-b-[#e35f21] after:border-solid after:right-0 after:bottom-0  before:absolute before:content-[''] before:w-[50px] before:hover:w-full before:h-[50px] before:hover:h-full before:duration-700 before:border-l-[4px] before:border-l-[#e35f21] before:border-t-[4px] before:border-t-[#e35f21] before:border-solid before:left-0 before:top-0">
            Welcome to our premier IPTV company! We are a reputed and
            well-established IPTV and internet service provider
            across India. Our company, which has been providing
            best-in-class services for many years, has a community
            of thousands of satisfied customers, and we aim to extend our
            reach to a wider audience to provide our excellent
            services.
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[25px] sm:max-w-[100%] ">
            {visionData.map((item, i) => (
              <div className='relative rounded-[10px] shadow-[5px_8.66px_30px_0px_rgba(0,0,0,0.15)] bg-[#fff] py-[35px] lg:px-[35px] px-[30px] group after:absolute after:content-[""] after:w-full after:h-full after:hover:bg-[linear-gradient(157deg,#022a6b_0%,#071e43_100%)] after:rounded-[10px] after:origin-left after:opacity-0 after:invisible after:scale-y-0 after:left-0 after:bottom-0 after:duration-700 after:hover:opacity-100 after:hover:visible after:hover:scale-y-100 hover:text-white' key={i}>
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
      <section className='pt-0 relative'>
        <div className="absolute w-[250px] right-0 bottom-[20px] animate-[animate-bounceTop_5s_infinite_ease-in-out_alternate] max-lg:opacity-30 opacity-80">
          <img className="object-cover" src={ImageIcons.dotShape} alt="Dot Shape" />
        </div>
        <div className='container'>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-[40px] items-center'>
            <div className="grid grid-3 grid-flow-col gap-[20px] max-sm:gap-0">
              <div className="row-span-2 h-[470px] max-sm:h-auto"><img className='h-full w-full object-center object-cover' src={ImageIcons.aboutImg1} alt='skypro-iptv-services' /></div>
              <div className="h-[225px] xl:min-w-[300px] min-w-[230px] max-sm:hidden"><img className='h-full w-full object-center object-cover' src={ImageIcons.aboutImg2} alt='skypro-iptv-providers' /></div>
              <div className="h-[225px] xl:min-w-[300px] min-w-[230px] max-sm:hidden"><img className='h-full w-full object-center object-cover ' src={ImageIcons.aboutImg3} alt='skypro-iptv-supports' /></div>
            </div>
            <div>
              <h2 className='mb-[15px]'>Where Innovation Meets Connectivity</h2>
              <p className='mb-[15px]'>IPTV Service has progressed significantly since its found.</p>
              <p className='mb-[15px]'>We have developed reliably and naturally as an interchange supplier serving an assorted arrangement of business class voice and information administrations</p>
              <Button link='Discover More' url='/iptv-subscription-packages' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
const visionData = [
  {
    title: 'Our Mission',
    icon: <GiBullseye />,
    text: 'Our mission is to help you immerse yourself in the realm of entertainment by providing the best IPTV experience. With our services, you get unique and creative solutions which further offer you the quality of the theatre screen in the comfort of your living room. Our team of experts at The SkyPro IPTV always strives to provide you with the best customer support so that you can always receive unparalleled services.'
  },
  {
    title: 'Our Vision',
    icon: <FaLowVision />,
    text: 'Although now also, we are offering unbeatable services and the best user experience, we are committed to bringing further innovations in the future in terms of adding more diverse content and channels, trailblazing technology, and top-notch customer service. We apprehend that our different users have different preferences, so we are invested in providing you with a personalised entertainment world.'
  },
  {
    title: 'Our Core Values',
    icon: <AiFillThunderbolt />,
    text: 'Our core values incorporate superiority, originality, decency, and a customer-oriented approach. These are the beliefs that navigate us in the right direction in whatever we do from the development of the services to providing the support to our customers.'
  },
  {
    title: 'Our Technology',
    icon: <LuBrainCircuit />,
    text: 'Delve into SkyPro IPTV services’ state-of-the-art technology, our protocols used for streaming, the infrastructure of the server, and the compatibility of the devices. In order to improve the performance, dependency, and scalability, up-to-date innovation and machine learning are leveraged by us, which also helps us provide high-quality content to our customers.'
  },
  {
    title: 'Our Commitment to Sustainability',
    icon: <FaTowerBroadcast />,
    text: 'We have energy-efficient data centres and offer eco-friendly packaging. This helps us reduce our carbon footprint and contribute toward a greener future. Get ready to enhance your user experience with our The SkyPro IPTV services and relish in the universe of entertainment. For more information, feel free to contact our 24/7 available customer support team.'
  },
  {
    title: 'Content Library',
    icon: <MdOutlineMenuBook />,
    text: 'We offer you a diverse array of content, like on-demand content, live IPTV, sports events, time-shifted content, and many more. There are thousands of programs, which ensures that everyone has something for themselves to watch. For example, a sports fan can enjoy different sports channels, a movie buff can enjoy favourite genres from a diverse catalogue etc.'
  }
];

export default Vision