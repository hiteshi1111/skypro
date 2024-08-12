import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { GetRequest } from "../utils/requests";
import ImageIcons from "../components/imageComponent/ImageIcons";
import SEO from "../components/shared/seo";
import LazyLoad from 'react-lazyload';

const BlogsDetails = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const { pathname } = useLocation();
  const [blogDetails, setBlogDetails] = useState(null);

  useEffect(() => {
    GetRequest(`${process.env.REACT_APP_API_URL}/blogs/getblogs`)
      .then((response) => {
        const blogsData = response.data;
        setBlogs(blogsData);
        const foundBlog = blogsData.find(
          (blog) => pathname.toLowerCase() === `/blogs/${blog.handle}`
        );
        if (!foundBlog) {
          navigate("*");
        }
        const selectedBlog = blogsData.filter(
          (index) => index.handle === foundBlog?.handle
        );
        setBlogDetails(selectedBlog[0]);
      })
      .catch((error) => {
        console.log(error, "something went wrong");
      });
    // eslint-disable-next-line
  }, [pathname]);

  console.log("blogDetails", blogDetails);
  return (
    <>
      <SEO title={blogDetails?.metaTitle} description={blogDetails?.metaDescription} keywords={blogDetails?.keyword}/>
      {/* <InnerPageBanner title='Blog Details' maxWidth='472px' innerPageBanner={ImageIcons.aboutBg} /> */}

      <section>
        <div className="container">
          <div className="flex max-lg:flex-col gap-[40px]">
            <div className="w-[68%] max-lg:w-full">
              <div className="mb-10">
                <LazyLoad>
                <img src={blogDetails?.image} alt={blogDetails?.imagetitle} className="w-full" />
                </LazyLoad>
              </div>
              {/* <h2 className='mb-[20px]'>{blogDetails?.title}</h2> */}
              <div className="mb-[30px] flex items-center gap-8 border-b pb-[30px] border-[#ddd]">
                <div className="flex items-center">
                  <FaCircleUser className="text-[#fd5901] inline-block mr-[8px]" />
                  {blogDetails?.author}
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="text-[#fd5901] inline-block mr-[8px]" />
                  {blogDetails?.publishedAt}
                </div>
              </div>
              <div
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: blogDetails?.description }}
              />
            </div>
            <div className="w-[32%] max-lg:w-full">
              <div className="mb-[40px] xl:px-10 xl:py-10 max-xl:px-5 max-xl:py-5 rounded-[10px] shadow-[0_3px_10px_5px_rgba(0,0,0,0.1)]">
                <div className="title-sidebar mb-5">
                  <h4>Recent Post</h4>
                  <hr className="green-hr-line" />
                </div>
                {blogs.length > 0 &&
                  blogs.slice(0, 4).map((item, index) => (
                    <Link
                      to={`/blogs/${item.handle}`}
                      key={index}
                      className={`mb-[15px] last:mb-0 last:pb-0 pb-[15px] border-b last:border-hidden flex items-center group`}
                    >
                      <div
                        className={`flex justify-center items-center h-[60px] w-[120px] duration-500 relative rounded-[8px] overflow-hidden `}
                      >
                        <LazyLoad>
                        <img
                          className={`h-full w-full object-cover object-center duration-500 `}
                          src={item.image}
                          alt={item.imagetitle}
                        />
                        </LazyLoad>
                      </div>
                      <div
                        className={`md:pl-[10px] md:ml-[10px] pl-[7px] ml-[7px] text-left sm:w-[calc(100%_-_120px)] w-[calc(100%_-_90px)] `}
                      >
                        <div className="text-[#f48533] mb-[5px]">
                          {item.publishedAt}
                        </div>
                        <h5 className="mb-0 text-[20px] leading-[24px] line-clamp-2">
                          {item.imagetitle}
                        </h5>
                      </div>
                    </Link>
                  ))}
              </div>

              <div className="py-[40px] text-white px-[30px] bg-[linear-gradient(157deg,#061e43_0%,#3ad8ff_100%)] rounded-[22px]">
                <h2 className="text-white font-medium leading-[1.2]">
                  Download App for Free and Elevate Your Viewing Experience!
                </h2>
                <p>
                  Skypro Selfcare App is available on Android Devices. Download
                  for a seamless and optimized experience!
                </p>

                <Link
                  to="https://play.google.com/store/apps/details?id=com.onnet.skypro"
                  target="_blank"
                  class="flex mt-6 w-48 h-14 bg-white text-black rounded-lg items-center justify-center"
                >
                  <div class="mr-3">
                    <svg viewBox="30 336.7 120.9 129.2" width="30">
                      <path
                        fill="#FFD400"
                        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                      />
                      <path
                        fill="#FF3333"
                        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                      />
                      <path
                        fill="#48FF48"
                        d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                      />
                      <path
                        fill="#3BCCFF"
                        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs">Android app on</div>
                    <div class="text-xl font-semibold font-sans -mt-1">
                      Google Play
                    </div>
                  </div>
                </Link>
                <LazyLoad>
                <img className="mt-[40px]" src={ImageIcons.citiesImg1} alt="Cities" />
                </LazyLoad>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pt-0">
                <div className='container'>
                    <h2 className='text-center mb-[30px]'>Other Blogs</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-[20px] lg:gap-[30px]">
                        {blogs?.map((item, i) => (
                            <Link key={i} to={item.handle} className='flex flex-col overflow-hidden bg-[#fff] group border rounded-[10px] duration-500 shadow-[0px_0px_5px_rgba(0,0,0,0.08)] justify-start'>
                                <div className='relative h-[250px] w-full overflow-hidden'>
                                    <img
                                        src={item.image}
                                        alt={item.altText}
                                        className='w-full h-full object-center object-cover duration-500 group-hover:scale-110'
                                    />
                                </div>
                                <div className='p-[25px]'>
                                    <ul className='mb-[20px] flex items-center'>
                                        <li className='flex items-center text-[15px] mr-[15px]'><FiUser className='inline-block text-[#e63d25] mr-[8px]' /> {item?.author}</li>
                                        <li className='flex items-center text-[15px]'><FaRegCalendarAlt className='inline-block text-[#e63d25] mr-[8px]' /> {item?.publishedAt}</li>
                                    </ul>
                                    <div>
                                        <h4 className='text-[23px] ine-clamp-2 mb-[15px] group-hover:text-[#e63d25] duration-500 font-semibold leading-[28px]'>{item.title}</h4>
                                        <p className='mb-[15px] relative line-clamp-3'>{item.description}</p>
                                        <span className='text-[#000] group-hover:text-[#e63d25] duration-500'>Read More <RiArrowRightLine className='inline-block' /></span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                
            </section> */}
    </>
  );
};

export default BlogsDetails;
