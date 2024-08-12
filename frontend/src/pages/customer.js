import React from 'react'
import SEO from '../components/shared/seo'
import ImageIcons from '../components/imageComponent/ImageIcons';
import InnerPageBanner from '../components/shared/innerPageBanner';
import LazyLoad from 'react-lazyload';

const Customer = () => {
  return (
    <>
      <SEO
        title="Skypro IPTV Customers Services"
        description="Experiences of our valued customers with Skypro IPTV services. Read testimonials and learn how we deliver top-notch streaming solutions."
        keywords="Skypro customers, customer testimonials, Skypro IPTV reviews, Skypro client experiences, IPTV customer feedback, Skypro customer satisfaction, IPTV service reviews, Skypro user reviews, Skypro service quality,
         customer success stories, IPTV testimonials, Skypro feedback, Skypro customer stories, Skypro IPTV satisfaction, customer experiences with Skypro,"
      />
      <InnerPageBanner title='Customer' innerPageBanner={ImageIcons.Customer} />
      <section>
        <div className="container">
          <div className="grid sm:grid-cols-2 gap-[20px] items-center">
            <div>
              <h2>Discovering the Versatile Features That Set Us Apart</h2>
              <ul className="list_style">
                {customerData.map((data, i) => (
                  <li key={i}>{data.content}</li>
                ))}
              </ul>
            </div>
            <div>
              <LazyLoad>
              <img className='mx-auto' src={ImageIcons.ispsRemote} alt="isp-services" />
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const customerData = [
  {
    content: "Completely Smart IPTV Solution",
  },
  {
    content: "Over 500 Free to Air Channels",
  },
  {
    content: "Over 250+ SD/HD Pay Channels",
  },
  {
    content: "Android 11 4k STB",
  },
  {
    content: "Loss-free IP delivery with State of Art Video Quality",
  },
  {
    content: "Cost Effective than traditional Cable/DTH TV",
  },
  {
    content: "Convert any Ordinary TV into Smart TV using STB",
  },
  {
    content: "Provision to add Local Channels",
  },
  {
    content: "Pay Per View and Prepaid Options",
  },
  {
    content: "Pocket friendly",
  },
];

export default Customer