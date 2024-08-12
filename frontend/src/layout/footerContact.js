import React from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "../utils/copyToClipboard";
import { SlLocationPin } from "react-icons/sl";
import { FaRegCopy } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const FooterContact = () => {
  const phone = '+919803596035';
  const phoneLink = `tel:${phone}`;
  const email = 'info@skypro.co.in';
  const callOnPhone = () => {
    window.location.href = phoneLink;
  };
  return (
    <section className="bg-[#1f3455] py-[55px] text-white">
      <div className="container">
        <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-[40px] md:gap-[15px] gap-[25px]">
          <div className="flex justify-center">
            <span className="flex justify-center items-center h-[50px] w-[50px] duration-500 rounded-[8px] bg-[#071e43] text-[#ef3304]">
              <SlLocationPin className="text-[30px]" />
            </span>
            <div className="sm:pl-[20px] pl-[15px] text-left sm:w-[calc(100%_-_50px)] w-[calc(100%_-_40px)]">
              <h4 className="text-white">Official Location</h4>
              <p>IT Wing, Hall 2, B-70, Phase 7, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055</p>
            </div>
          </div>
          <div className="flex justify-center relative">
            <span className="flex justify-center items-center h-[50px] w-[50px] duration-500 rounded-[8px] bg-[#071e43] text-[#ef3304]">
              <MdOutlineMail className="text-[30px]" />
            </span>
            <div className="sm:pl-[20px] pl-[15px] text-left sm:w-[calc(100%_-_50px)] w-[calc(100%_-_40px)] cursor-pointer">
              <h4 className="text-white">Send us a Message</h4>
              <p className="cursor-pointer inline-block" onClick={() => CopyToClipboard(email, "Email copied successfully")}>Email us <FaRegCopy className="inline-block ml-[4px]" /></p>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="flex justify-center items-center h-[50px] w-[50px] duration-500 rounded-[8px] bg-[#071e43] text-[#ef3304]">
              <FiPhone className="text-[30px]" />
            </span>
            <div className="sm:pl-[20px] pl-[15px] text-left sm:w-[calc(100%_-_50px)] w-[calc(100%_-_40px)]">
              <h4 className="text-white">Give us a Call</h4>
              <p><Link to={phoneLink} onClick={callOnPhone}>+(91) 9803596035</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterContact;