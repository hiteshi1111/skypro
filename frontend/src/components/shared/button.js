import React from 'react';
import { Link } from 'react-router-dom';
import { windowScroll } from '../../utils/windowScroll';

const Button = ({ link = "", url = "" }) => {
    return (
        <Link className="bg-[#fd5901] inline-block text-white tracking-[0.5px] relative isolate duration-500 text-center teko-font-family text-[20px] py-[10px] px-[22px] rounded-[8px] mt-[16px] after:absolute after:content-[''] after:w-0 after:h-0 after:-translate-x-2/4 after:-translate-y-2/4 after:bg-[#f5d9d956] after:duration-500 after:z-[-1] after:rounded-[50%] after:left-2/4 after:top-2/4 after:hover:w-full after:hover:h-full after:hover:rounded-[8px]" to={url} onClick={windowScroll}>{link}</Link>
    )
}

export default Button;