import React from 'react'
import SEO from '../components/shared/seo';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdFreeCancellation } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import InnerPageBanner from '../components/shared/innerPageBanner';
import ImageIcons from '../components/imageComponent/ImageIcons';
import { FaLaptopCode } from "react-icons/fa";
import Button from '../components/shared/button';

const CustomerSupport = () => {
  return (
    <>
      <SEO
        title="Support | Skypro"
      />
      <InnerPageBanner title='IPTV Customer Support' innerPageBanner={ImageIcons.iptvCustomerCare} />

      <section>
        <div className="container">
          <div className='text-center max-w-[800px] mx-auto mb-[40px]'>
            <h2 className='text-[#fd5901]'>IPTV Customer Support</h2>
            <p>At Skypro, we understand the value of seamless streaming and the
              role played by efficient and reliable support services in
              ensuring the same. So, we provide you with 24/7 services to
              assist you with</p>
          </div>

          <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px]'>
            {supportData.map((data, i) => (
              <div key={i} className='bg-[#f5f7fd] sm:p-[30px] p-[25px] rounded-[8px] group'>
                <span className='mb-[20px] w-[70px] h-[70px] rounded-full bg-[#071e43] group-hover:bg-[#fd5901] duration-700 text-white flex items-center justify-center text-[28px] group-hover:text-[38px]'>{data.icon}</span>
                <h3>{data.title}</h3>
                <p>{data.discretion}</p>
                <Button link='Read More' url={data.path} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const supportData = [
  {
    title: "General Enquiries",
    icon: <FaLaptopCode />,
    path:"/contact-us",
    discretion: 'If you have any questions regarding our IPTV services, feel free to contact us. Our team is always on toes to provide assistance with anything you want. Get your questions answered,, and make the most of your IPTV experience.',
  },
  {
    title: "Billing and Payment",
    icon: <FaMoneyBillTrendUp />,
    path:"/contact-us",
    discretion: 'Check your billing and payment with ease. Our team is always there to assist you with updating payment information, understanding your bill, or addressing any of your billing discrepancies whenever you want.',
  },
  {
    title: "Channel Support",
    icon: <MdOutlineSubscriptions />,
    path:"/contact-us",
    discretion: 'Skypro is your go-to for channel lineup changes and troubleshooting channel reception issues. We are committed to customising our IPTV services so that you can access your favourites without any interruption.',
  },
  {
    title: "Cancellation Policy",
    icon: <MdFreeCancellation />,
    path:"/cancellation-policy",
    discretion: 'We provide our customers with a hassle-free and straightforward process of cancelling and requesting refunds. If you are considering any change, we will provide you with proper guidance and support.',
  },
  {
    title: "Feedback and Suggestions",
    icon: <RiFeedbackLine />,
    path:"/contact-us",
    discretion: 'Your feedback, our improvement. At Skypro, we encourage our customers to share their valuable views, suggestions, and thoughts so that we can enhance our services and make them better in every way possible.',
  },
  {
    title: "Emergency Support",
    icon: <MdOutlineSupportAgent />,
    path:"/contact-us",
    discretion: 'Facing any urgent issues? Get immediate attention from our emergency support team. They are always ready to act swiftly and effectively. Contact them at any time and ensure minimal disruptions to your services.',
  },

];

export default CustomerSupport