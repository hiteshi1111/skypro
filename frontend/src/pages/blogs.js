import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiArrowRightLine } from "react-icons/ri";
import InnerPageBanner from '../components/shared/innerPageBanner'
import ImageIcons from '../components/imageComponent/ImageIcons'
import { GetRequest } from '../utils/requests'
import { windowScroll } from "../utils/windowScroll";
import SEO from "../components/shared/seo";
import LazyLoad from 'react-lazyload';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const removeHTMLTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };
    useEffect(() => {
        GetRequest(`${process.env.REACT_APP_API_URL}/blogs/getblogs`).then((response) => {
            const filteredData = response.data.filter(item => item.isActive === true);
            const sortedBlogs = filteredData.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
            setBlogs(sortedBlogs)
        }).catch((error) => {
            console.log(error, "something went wrong");
        })
        // eslint-disable-next-line 
    }, [])
    return (
        <>
            <SEO title="Skypro IPTV Blog: Insights, Tips, & Updates"  description="The Skypro IPTV blog for expert insights, tips, and updates on industry trends. Stay informed with our latest articles and valuable content."/>
            <InnerPageBanner title='Blog' maxWidth='472px' innerPageBanner={ImageIcons.aboutBg} />
            <section>
                <div className='container'>
                    <h2 className='text-center mb-[30px]'>Latest Blog Posts</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[20px] lg:gap-[30px]">
                        {blogs?.map((item, i) => (
                            <div className='flex flex-col overflow-hidden bg-[#fff] group border rounded-[10px] duration-500 shadow-[0px_0px_5px_rgba(0,0,0,0.08)] justify-start'>
                                <Link onClick={windowScroll} to={`/blogs/${item?.handle}`}>
                                    <div className='relative w-full overflow-hidden'>
                                        <LazyLoad>
                                        <img
                                            src={item?.image}
                                            alt={item?.imagetitle} banner
                                            className='w-full h-full object-center object-cover duration-500'
                                        />
                                        </LazyLoad>
                                    </div>
                                </Link>
                                <div className='p-[25px]'>
                                    <ul className='mb-[20px] flex items-center'>
                                        <Link onClick={windowScroll} to={
                                            `/blogs/${item?.handle}`}>
                                            <li className='flex items-center text-[15px] mr-[15px]'><FiUser className='inline-block text-[#e63d25] mr-[8px]' /> {item?.author}</li>
                                        </Link>
                                        <Link onClick={windowScroll} to={`/blogs/${item?.handle}`}>

                                            <li className='flex items-center text-[15px]'><FaRegCalendarAlt className='inline-block text-[#e63d25] mr-[8px]' /> {item?.publishedAt}</li>
                                        </Link>
                                    </ul>
                                    <div>
                                        <Link onClick={windowScroll} to={`/blogs/${item?.handle}`}>
                                            <h4 className='text-[23px] ine-clamp-2 mb-[15px] group-hover:text-[#e63d25] duration-500 font-semibold leading-[28px]'>{item?.title}</h4></Link>
                                        <Link onClick={windowScroll} to={`/blogs/${item?.handle}`}>

                                            <p className='mb-[15px] relative line-clamp-3'>{removeHTMLTags(item?.description)}</p></Link>
                                        <Link onClick={windowScroll} to={`/blogs/${item?.handle}`}>

                                            <span className='text-[#000] group-hover:text-[#e63d25] duration-500'>Read More <RiArrowRightLine className='inline-block' /></span></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}


export default Blogs