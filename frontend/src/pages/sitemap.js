import React from 'react'
import { Link } from "react-router-dom";
import SEO from '../components/shared/seo';
import InnerPageBanner from '../components/shared/innerPageBanner';
import ImageIcons from '../components/imageComponent/ImageIcons';
import { windowScroll } from '../utils/windowScroll';
const SiteMap = () => {
  return (
    <>
      <SEO
        title="SkyPro Sitemap: Navigate Through Our Website Easily"
        description="The structured sitemap of SkyPro website for convenient navigation and access to all our pages and content."
      />
      <InnerPageBanner title='Sitemap' innerPageBanner={ImageIcons.sitemapBg} />
      <section>
        <ul className='list-none m-0 p-0'>
          <li className='relative pl-[20px] pb-[5px]'>
            <Link onClick={windowScroll} to="/" className='inline-block py-[5px]'>Home</Link>
            <ul className='list-none m-0 p-0'>
              {navigationData.map((item, i) => (
                <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                  <Link onClick={windowScroll} to={item.link} className='inline-block py-[5px]'>{item.title}</Link>

                  <ul className='list-none m-0 p-0'>
                    {item.subMenu?.map((item, i) => (
                      <li key={i} className='relative pl-[20px] pb-[5px] last:pb-0 before:content-[""] before:absolute before:top-0 before:left-[2px] before:h-full before:border-l-[1px] before:border-dotted before:border-[#212121] after:content-[""] after:absolute after:top-[15px] after:left-[3px] after:border-t-[1px] after:border-dotted after:border-[#212121] after:w-[12px]'>
                        <Link onClick={windowScroll} className='inline-block py-[5px]' to={item?.link}>{item?.label}</Link>
                      </li>
                    ))}
                  </ul>

                </li>
              ))}
            </ul>
          </li>
        </ul>
      </section>
    </>
  )
}

const navigationData = [
  {
    title: "About Us",
    link: "/about-us"
  },
  {
    title: "Packages",
    link: "/iptv-subscription-packages",
    subMenu: [
      {
        label: "FTA Channels",
        link: "https://res.cloudinary.com/devh5cxfo/image/upload/v1715765683/kenmqrimpnygaq7xidaq.pdf",
      },
      {
        label: "FTA + Hindi Bronze SD",
        link: "https://res.cloudinary.com/devh5cxfo/image/upload/v1715329547/khlb0qkxfq6lollokois.pdf",
      },
      {
        label: "FTA + Hindi Silver HD",
        link: "https://res.cloudinary.com/devh5cxfo/image/upload/v1715329379/jwgez8n2qu0yfejzmuin.pdf",
      },
      {
        label: "FTA +Hindi Gold HD",
        link: "https://res.cloudinary.com/devh5cxfo/image/upload/v1715333614/osepdvce8hjd541uweqg.pdf",
      },
      {
        label: "FTA +Hindi Gold PLUS HD",
        link: "https://res.cloudinary.com/devh5cxfo/image/upload/v1715329272/ujllr0kuaxwmgqy0cgem.pdf",
      },
      {
        label: "FTA +Hindi PLATINUM HD",
        link: "https://res.cloudinary.com/devh5cxfo/image/upload/v1715328983/lyngrzu4dobxje82dbci.pdf",
      },
      {
        label: "KIDS",
        link: "https://res.cloudinary.com/devh5cxfo/image/upload/v1715333772/pbqtxj58datxhbalkbbk.pdf",
      },
      {
        label: "ENGLISH HD",
        link: "https://res.cloudinary.com/devh5cxfo/image/upload/v1715333709/o5mizydk2hzfvrurlrkk.pdf",
      },
      {
        label: "SPORTS HD LITE",
        link: "https://res.cloudinary.com/devh5cxfo/image/upload/v1715333874/xod1sgfockuqtb6kpe0o.pdf",
      },
      {
        label: "SPORTS HD",
        link: "https://res.cloudinary.com/devh5cxfo/image/upload/v1715333921/n951747v7ecgelr3tath.pdf",
      }
    ]
  },
  // {
  //   title: "Cities",
  //   link: "/cities",
  //   subMenu: [
  //     {
  //       label: "Bangalore",
  //       link: "/cities/iptv-service-provider-bangalore",
  //     },
  //     {
  //       label: "Chandigarh",
  //       link: "/cities/iptv-service-provider-chandigarh",
  //     },
  //     {
  //       label: "Delhi",
  //       link: "/cities/iptv-service-provider-delhi",
  //     },
  //     {
  //       label: "Maharastra",
  //       link: "/cities/iptv-service-provider-maharashtra",
  //     },
  //     {
  //       label: "Mohali",
  //       link: "/cities/iptv-service-provider-mohali",
  //     },
  //     {
  //       label: "Mumbai",
  //       link: "/cities/iptv-service-provider-mumbai",
  //     },
  //     {
  //       label: "Punjab",
  //       link: "/cities/iptv-service-provider-punjab",
  //     }
  //   ]
  // },
  {
    title: "Blogs",
    link: "/blogs",
    subMenu: [
      {
        label: "What is Internet Protocol Television, IPTV?",
        link: "/blogs/introduction-to-iptv-internet-protocol-television",
      },
      {
        label: "The Next Generation of Streaming Technology",
        link: "/blogs/the-next-generation-of-streaming-technology",
      },
      {
        label: "How Can We Convert Old TV Into An IPTV",
        link: "/blogs/how-can-we-convert-old-tv-into-an-iptv",
      },
      {
        label: "What is the Difference between IPTV vs Cable TV?",
        link: "/blogs/iptv-vs-cable-tv-differences",
      }
    ]
  },
  {
    title: "Faq",
    link: "/faqs"
  },
  {
    title: "Contact Us",
    link: "/contact-us"
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy"
  },
  {
    title: "Terms & Conditions",
    link: "/terms-and-conditions"
  },
  {
    title: "Refund Policy",
    link: "/refund-policy"
  },
  {
    title: "Cancellation Policy",
    link: "/cancellation-policy"
  },
  {
    title: "Compliance",
    link: "/iptv-compliance-regulatory"
  },
  {
    title: "Iptv customer-support",
    link: "/iptv-customer-support"
  }
];

export default SiteMap;