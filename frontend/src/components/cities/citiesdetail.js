import React, { useEffect, useState, useContext } from 'react'
// import InnerPageBanner from '../shared/innerPageBanner';
import servicesData from "../../data/cities.json"
import { Link, useParams, useLocation } from "react-router-dom"
// import Button from '../shared/button';
import ImageIcons from '../imageComponent/ImageIcons';
// import { FiCheckCircle } from 'react-icons/fi';
import { AccountContext } from '../../utils/AccountContext';

const CitiesDetail = () => {
    const { types } = useParams();
    const location = useLocation();
    const [serviceDetails, setServiceDetails] = useState(null);
    const { setView } = useContext(AccountContext);
    useEffect(() => {
        const selectedService = servicesData.find(service => service.types === types);
        setServiceDetails(selectedService);
    }, [types])
    useEffect(() => {
        setView(true);
        //   eslint-disable-next-line
    }, [location]);
    return (
        <div>
            {/* <InnerPageBanner title='Cities' path={serviceDetails.cityname} maxWidth='472px' innerPageBanner={ImageIcons.aboutBg} /> */}
            <section>
                <div className='container'>
                    <div className='flex max-md:flex-col gap-[40px]'>
                        <div className='w-[68%] max-md:w-full'>
                            <h2 className='mb-[20px]'>{serviceDetails?.title}</h2>
                            <p>{serviceDetails?.desc}</p>
                            <p>{serviceDetails?.desc1}</p>
                            <h2>{serviceDetails?.additionalInfotitle} </h2>
                            {serviceDetails?.additionalInfo?.map((item) => {
                                return (
                                    <div>
                                        <h3>{item?.title}</h3>
                                        <p>{item?.description}</p>
                                    </div>
                                )
                            })}
                            <div className='container mb-10'>
                                <LazyLoad>
                                <img className='mt-[40px]' src={serviceDetails?.img} alt={serviceDetails?.cityname} />
                                </LazyLoad>
                            </div>
                            <h2>{serviceDetails?.otherinfotitle}</h2>
                            <p>{serviceDetails?.otherinfodesc}</p>
                            <ul className='list_style'>
                                {serviceDetails?.otherinfo?.map((item) => {
                                    return (
                                        <div>
                                            <li>
                                                {item?.listing}
                                            </li>
                                        </div>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className='w-[32%] max-md:w-full sticky top-[110px] py-[40px] h-full text-white px-[30px] bg-[linear-gradient(157deg,#061e43_0%,#3ad8ff_100%)] rounded-[22px]'>
                            <h2 className='text-white font-medium leading-[1.2]'>Download App for Free and Elevate Your Viewing Experience!</h2>
                            <p>Skypro Selfcare App is available on Android Devices. Download for a seamless and optimized experience!</p>
                            <Link to='https://play.google.com/store/apps/details?id=com.onnet.skypro' target='_blank' class="flex mt-6 w-48 h-14 bg-white text-black rounded-lg items-center justify-center">
                                <div class="mr-3">
                                    <svg viewBox="30 336.7 120.9 129.2" width="30">
                                        <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z" />
                                        <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z" />
                                        <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z" />
                                        <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z" />
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-xs">Android app on</div>
                                    <div class="text-xl font-semibold font-sans -mt-1">Google Play</div>
                                </div>
                            </Link>
                            <LazyLoad>
                            <img className='mt-[40px]' src={ImageIcons.citiesImg1} alt='Services' />
                            </LazyLoad>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default CitiesDetail