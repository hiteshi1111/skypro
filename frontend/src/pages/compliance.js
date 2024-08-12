import React, { useEffect, useState } from 'react'
import SEO from '../components/shared/seo';
import InnerPageBanner from '../components/shared/innerPageBanner';
import ImageIcons from '../components/imageComponent/ImageIcons';
import { GetRequest } from '../utils/requests'
import { Link } from 'react-router-dom';

const Compliance = () => {
  const [compliances, setCompliances] = useState([])

  useEffect(() => {
    GetRequest(`${process.env.REACT_APP_API_URL}/contact/compliance`).then((response) => {
        console.log("response",response)
        setCompliances(response?.data);
    }).catch((error) => {
        console.log(error);
    });
  },[])

  return (
    <>
      <SEO title="SkyPro Cancellation Policy: Smooth and Transparent" description="Learn about the SkyPro cancellation policy a Smooth and transparent process designed to ensure your satisfaction. Review our terms for hassle-free cancellation." />
      <InnerPageBanner title='Compliances' innerPageBanner={ImageIcons.iptvAppBg} />
      <section>
        <div className="container">
          <h2>Document Title</h2>
            {compliances.map((compliance, i) => (
              <div key={i} className='flex max-sm:flex-col justify-between gap-[15px] max-sm:gap-0 mb-[15px] last:mb-0'>
                <div className='bg-[#edeff3] p-[15px] w-[calc(100%_-_180px)] max-sm:w-full text-[16px]'>{compliance.title}</div>
                <Link className='w-[180px] max-sm:w-full bg-[#031e43] hover:bg-[#fd5901] text-white text-[16px] p-[15px] text-center' to={compliance.pdfFile} target="_blank">Download</Link>
              </div>
            ))}
        </div>
      </section>
    </>
  )
}

export default Compliance