import React from 'react'
import SEO from '../components/shared/seo';
import InnerPageBanner from '../components/shared/innerPageBanner';
import ImageIcons from '../components/imageComponent/ImageIcons';
import LazyLoad from 'react-lazyload';

const Isp = () => {
  return (
    <>
      <SEO title="Skypro ISP Services: Reliable Internet Solutions" description="Skypro ISP services for high-speed, reliable internet. Our diverse plans and superior connectivity options for home and business needs."
        keywords="ISP services, internet service provider, Skypro ISP, high-speed internet, Skypro internet solutions, reliable internet provider, home internet services, business internet services, broadband services, internet plans, ISP India, fiber internet, internet packages, wireless internet services,"
      />
      <InnerPageBanner title='ISPs' innerPageBanner={ImageIcons.Isps} />
      <section>
        <div className="container">
          <div className="grid sm:grid-cols-2 gap-[20px] items-center">
            <div>
              <h2>What's in for ISPs?</h2>
              <ul className="list_style">
                {ispData.map((data, i) => (
                  <li key={i}>{data.content}</li>
                ))}
              </ul>
            </div>
            <div>
              <LazyLoad>
              <img className='mx-auto' src={ImageIcons.isp} alt="ISP Services" />
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const ispData = [
  {
    content: "Work On your existing IP Network",
  },
  {
    content: "Unicast Low Latency Multi CDN Technology",
  },
  {
    content: "Edge over Competition",
  },
  {
    content: "Increased Subscription",
  },
  {
    content: "Higher ARPU",
  },
  {
    content: "Geo Location based STB Ad inserts",
  },
  {
    content: "Zero Broadband Data Conumptions",
  },
  {
    content: "Seamless Integration with AII ISP CRMs",
  },
  {
    content: "Extensive SMS & Selfcare App",
  },
  {
    content: "Ready CDN'S across the Country",
  },
  {
    content: "Customise your own package",
  },
];

export default Isp