import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";

const Drawer = ({ isOpen }) => {
  return (
    <>
      {isOpen
        ? contactData.map((data, i) => (
          <Link
            to={data.url}
            target={data.target}
            aria-label={data.aria}
            role="button"
            className="shadow-[0px_0px_10px_0px_rgba(255,255,255,0.25)] mt-[2px] md:w-[45px] hover:bg-[linear-gradient(157deg,#022a6b_0%,#071e43_100%)] duration-700 w-[40px] rounded-l-lg md:h-[45px] h-[40px] bg-[#fd5901] text-white md:text-[22px] text-[20px] leading-[18px] flex justify-center items-center"
          >
            {data.icon}
          </Link>
        ))
        : ""}
    </>
  );
};
const FloatingAction = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const socialBoxStyle = {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    right: "1px",
    position: "fixed",
    top: "50%",
    zIndex: 999,
    whiteSpace: "nowrap",
    transform: "translateY(-50%)",
    display: "grid",
    maxWidth: "60px",
  };
  return (
    <>
      <div className="text-[#000]" style={socialBoxStyle}>
        <button
          onClick={toggleDrawer}
          className={!isDrawerOpen && ""}
          title="Social media"
        >
          {isDrawerOpen ? (
            <IoCloseSharp title="Close Social media" className="md:w-[45px] w-[40px] md:h-[45px] h-[40px] bg-[#fd5901] rounded-full text-white p-[7px] md:text-[22px] text-[20px] leading-[18px] flex justify-center items-center" />
          ) : (
            <TbSocial title="Social media" className="animate-[animate-bounce-bg_2s_infinite_ease-in-out_alternate] md:w-[45px] w-[40px] md:h-[45px] h-[40px] bg-[#fd5901] rounded-full text-white p-[7px] md:text-[22px] text-[20px] leading-[18px] flex justify-center items-center" />
          )}
        </button>
        <Drawer isOpen={isDrawerOpen} />
      </div>
    </>
  );
};
export default FloatingAction;

const contactData = [
  {
    url: "https://wa.me/919803596035",
    aria: "whatsapp us",
    target: "_blank",
    icon: <IoLogoWhatsapp />,
  },
  {
    url: "mailto:info@skypro.co.in",
    aria: "mail to SkyPro",
    target: "_blank",
    icon: <MdEmail />,
  },
  {
    url: "tel:+919803596035",
    aria: "Call SkyPro at +(91) 9803596035",
    target: "_self",
    icon: <IoCall />,
  },
];
