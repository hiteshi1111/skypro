import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import ImageIcons from '../components/imageComponent/ImageIcons';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { PostRequest } from "../utils/requests";
import { validateEmail } from "../utils/formValidation";
import Toastify from "../components/shared/toastify";
import { windowScroll } from "../utils/windowScroll";
// import Chatbot from "../components/shared/chatbot";
import { PiArrowBendLeftUpBold } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa6";
import LazyLoad from 'react-lazyload';
// import { BsChat } from "react-icons/bs";
// import { IoMdClose } from "react-icons/io";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  // const [showChatbot, setShowChatbot] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    message: "",
    success: false
  });
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "text-[#fd5901]" : "";
  };
  function handleClick() {
    setError({ message: "" });
    if (!email.length > 0) {
      setError({ message: "Fields must not be empty!", success: false })
    } else if (!validateEmail(email)) {
      setError({ message: "Email is invalid!", success: false });
    } else {
      PostRequest(`${process.env.REACT_APP_API_URL}/contact/newsletter`, { email }).then((response) => {
        setEmail("");
        setError({ message: response.data, success: true });
      }).catch((error) => {
        console.log(error)
        setError({ message: error.data, success: true });
      })
    }
  }
  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setError(() => ({
      message: "",
    }));
  };
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    if (error.success) {
      const timer = setTimeout(() => {
        setEmail("")
        setError({ success: false });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error.success]);
  useEffect(() => {
    // setShowChatbot(false);
  }, [location]);
  // const handleChatbot = () => {
  //   setShowChatbot(prevShowChatbot => !prevShowChatbot);
  // };
  return (
    <>
      <footer className="bg-primary text-white">
        <div className="container">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 xl:gap-[50px] gap-[40px] py-[50px]">
            {error.success && <Toastify message={error.message} />}
            <iv className="">
              <LazyLoad>
              <Link className="footer-img" to="/" onClick={windowScroll}>
                <img
                  src={ImageIcons.logoWhite}
                  alt="skypro logo"
                  title="skypro logo"
                  loading="lazy"
                  className="max-h-[50px] mb-[20px]"
                />
              </Link>
              </LazyLoad>
              <p className="leading-[30px] font-light">
                Your Gateway to limitless entertainment: Get unparalleled
                streaming experience and dive into the world of captivating
                content. Enjoy our diverse library where we offer continuous
                updates and expansions.
              </p>
              <ul className="flex xl:gap-[10px] gap-[6px] mt-[25px]">
                {contactData.map((data, index) => (
                  <li key={index}>
                    <Link
                      to={data.url}
                      aria-label={data.aria}
                      role="button"
                      target="_blank"
                      className="bg-white text-[#fd5901] hover:text-white hover:bg-[#fd5901] w-[40px] h-[40px] text-[15px] rounded-[50%] flex justify-center items-center"
                    >
                      <span>{data.icon}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </iv>
            <div>
              <h4 className="relative pb-[10px] mb-[20px] text-white after:h-[2px] after:w-[50px] after:absolute after:content-[''] after:left-0 after:-bottom-[2px] after:bg-[#fd5901] before:h-[2px] before:w-[100px] before:absolute before:content-[''] before:left-0 before:-bottom-[2px] before:bg-[#dddddd46]">QUICK LINKS</h4>
              <ul>
                {footerLeftLink.map((data, index) => (
                  <li className="mt-[16px] flex items-center pl-[18px] relative before:content-[''] before:left-0 before:h-[8px] before:w-[8px] before:bg-[#fff] before:absolute" key={index}>
                    <Link
                      to={data.url}
                      className={`hover:text-[#fd5901] hover:pl-[4px] ${isActive(data.url)}`}
                      onClick={windowScroll}
                      aria-label={data.content}
                    >
                      {data.content}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h4 className="relative pb-[10px] mb-[20px] text-white after:h-[2px] after:w-[50px] after:absolute after:content-[''] after:left-0 after:-bottom-[2px] after:bg-[#fd5901] before:h-[2px] before:w-[100px] before:absolute before:content-[''] before:left-0 before:-bottom-[2px] before:bg-[#dddddd46]">USEFUL LINKS</h4>
              <ul className="footer-menu">
                {footerRightLink.map((data, index) => (
                  <li className="mt-[16px] flex items-center pl-[18px] relative before:content-[''] before:left-0 before:h-[8px] before:w-[8px] before:bg-[#fff] before:absolute" key={index}>
                    <Link to={data.url}
                      // className={isActive(data.url)}  hover:text-[#fd5901] hover:pl-[4px]"
                      className={`hover:text-[#fd5901] hover:pl-[4px] ${isActive(data.url)}`}
                      onClick={windowScroll}
                    >
                      {data.content}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h4 className="relative pb-[10px] mb-[20px] text-white after:h-[2px] after:w-[50px] after:absolute after:content-[''] after:left-0 after:-bottom-[2px] after:bg-[#fd5901] before:h-[2px] before:w-[100px] before:absolute before:content-[''] before:left-0 before:-bottom-[2px] before:bg-[#dddddd46]">NEWS LETTER</h4>
              <div className="footer-buttons pt-3">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="h-[50px] bg-white text-center text-black w-full border px-[15px] py-0 rounded-[8px] border-solid border-[#33333336] focus:border focus:border-[#fd5901]"
                    placeholder="Enter Your Email"
                    required
                  />
                  {!error.success && (
                    <div className="" style={{ color: "#fd5901" }}>
                      {error.message}
                    </div>
                  )}
                  <button type="submit" onClick={handleClick} className="bg-[#fd5901] text-white w-full tracking-[0.5px] relative isolate duration-500 text-center teko-font-family text-[20px] h-[50px] px-[22px] rounded-[8px] mt-[16px] after:absolute after:content-[''] after:w-0 after:h-0 after:-translate-x-2/4 after:-translate-y-2/4 after:bg-[#f5d9d956] after:duration-500 after:z-[-1] after:rounded-[50%] after:left-2/4 after:top-2/4 after:hover:w-full after:hover:h-full after:hover:rounded-[8px]">
                    SUBSCRIBE NOW!
                  </button>
                </div>
              </div>
              <h4 className="mt-[25px] text-white">SKYPRO MOBILE APP</h4>
              <Link className="text-white hover:bg-white hover:text-[#fd5901] duration-500 bg-[#fd5901] h-[42px] px-[15px] inline-flex items-center justify-center rounded-[8px] font-medium mt-[15px]" to='https://play.google.com/store/apps/details?id=com.onnet.skypro' target="_blank"><IoLogoGooglePlaystore className="inline-block pr-[3px] text-[22px]" /> GOOGLE PLAY</Link>
            </div>
          </div>
        </div>
        <div className="py-[25px] text-white border-t border-[#ffffff21]">
          <div className="container">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[15px] justify-between items-center max-md:text-center">
              <p className="mb-0">Copyright &copy; {currentYear}. All Rights Reserved By Skypro</p>
              <p className="md:text-right mb-0">Powered By SKYPRO COMMUNICATIONS</p>
            </div>
          </div>
        </div>
      </footer>
      <button className={`' group flex justify-center items-center md:right-[30px] duration-500 right-[15px] bg-[#329bbd] hover:bg-[#061e43] w-[50px] h-[50px] shadow-md shadow-[#ffffff75] rounded-full z-50 ' ${showButton ? 'opacity-100 overflow-visible fixed transition-[0.8s] bottom-[30px]' : 'bottom-[102%]'}`}
        onClick={scrollToTop} >
        <PiArrowBendLeftUpBold className="text-[#fff] text-[20px] group-hover:text-[#fff]" />
      </button>

      {/* <div>
        <div className="fixed md:right-[30px] right-[15px] bottom-[30px] w-[50px] h-[50px] z-50 flex justify-center items-center after:absolute after:containt-[''] after:h-[40px] after:w-[40px] after:bg-[#fd5901] after:animate-ping after:rounded-full">
          <button
            className={` group flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#fd5901] hover:bg-[#ff782f] shadow-md shadow-[#ffffff75] z-50`}
            onClick={handleChatbot}
          >

            {showChatbot ? <IoMdClose className="text-[#fff] text-[20px] group-hover:text-[#fff]" /> : <BsChat className="text-[#fff] text-[20px] group-hover:text-[#fff]" />}
          </button>
        </div> */}

      {/* {showChatbot && (
          <div className="fixed bottom-[90px] md:right-[30px] right-[15px] rounded-lg z-[9999999] shadow-[0px_0px_30px_20px_rgba(0,0,0,0.15)]">
            <Chatbot />
          </div>
        )}
      </div> */}
    </>
  );
};
export default Footer;

const contactData = [
  {
    url: "https://www.facebook.com/people/Skypro/61563585787492/",
    icon: <FaFacebookF />,
  },
  {
    url: "https://x.com/sky_proiptv",
    icon: <BsTwitterX />,
  },
  {
    url: "https://www.linkedin.com/company/skyprotv/",
    icon: <FaLinkedinIn />,
  },
  {
    url: "https://in.pinterest.com/skyprotv/",
    icon: <FaPinterestP />,
  },
  {
    url: "https://www.instagram.com/skypro_iptv/",
    icon: <BsInstagram />,
  },
  {
    url: "https://www.youtube.com/@SkyPro_TV",
    icon: <FaYoutube />,
  },

];
const footerLeftLink = [
  {
    url: "/about-us",
    content: "About Us",
  },
  {
    url: "/iptv-subscription-packages",
    content: "Packages",
  },
  {
    url: "/contact-us",
    content: "Contact Us",
  },
  {
    url: "/isp",
    content: "ISPs",
  },
  {
    url: "/customers",
    content: "Customers",
  },
  {
    url: "/faqs",
    content: "FAQs",
  },
  // {
  //   url: "/cities",
  //   content: "Cities",
  // },
  {
    url: "/blogs",
    content: "Blogs",
  },
];

const footerRightLink = [
  {
    url: "/privacy-policy",
    content: "Privacy Policy",
  },
  {
    url: "/terms-and-conditions",
    content: "Terms & Conditions",
  },
  {
    url: "/refund-policy",
    content: "Refund Policy",
  },
  {
    url: "/cancellation-policy",
    content: "Cancellation Policy",
  },
  {
    url: "/iptv-compliance-regulatory",
    content: "Compliance",
  },
  {
    url: "/iptv-app",
    content: "App",
  },
  {
    url: '/iptv-customer-support',
    content: "IPTV Customer Support",
  },
  {
    url: "/sitemap.html",
    content: "Sitemap",
  },
];
