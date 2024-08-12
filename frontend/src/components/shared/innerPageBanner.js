import React from "react";
import { Link } from "react-router-dom";

const InnerPageBanner = ({ title = "", innerPageBanner = "", path = "" }) => {
  return (
    <section
      className='relative md:py-[150px] max-md:py-[60px] bg-center bg-cover bg-no-repeat after:content-[""] after:absolute after:left-0 after:right-0 after:top-0 after:w-full after:h-full after:bg-[#071e43] after:opacity-50'
      style={{ backgroundImage: `url(${innerPageBanner})` }}
    >
      <div className="heading_tittle container relative z-10">
        {title && (
          <h1 className="capitalize text-white text-center tracking-[2px] drop-shadow-[0_0_5px_#00000052] mb-0">
            {title}
          </h1>
        )}
        <div className="text-center mt-[10px]">
          <ul>
            <li className="inline-block">
              <Link className="text-white font-medium hover:text-[#]" to="/">
                Home
              </Link>
            </li>
            <span className="px-[10px] text-white font-medium">/</span>
            <li className="inline-block">
              {path ? (
                <Link
                  className="text-white font-medium hover:text-[#]"
                  to="/cities"
                >
                  Cities
                </Link>
              ) : (
                <p className="text-white font-medium hover:text-[#]">
                  {title}
                </p>
              )}
            </li>
            {path && (
              <>
                <span className="px-[10px] text-white font-medium">/</span>
                <li className="inline-block text-white font-medium">{title}</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InnerPageBanner;
