import React from 'react'
import { Link } from "react-router-dom";
import SEO from '../components/shared/seo';
import InnerPageBanner from '../components/shared/innerPageBanner';
import ImageIcons from '../components/imageComponent/ImageIcons';
import LazyLoad from 'react-lazyload';

const PrivacyPolicy = () => {
  const email = "info@skypro.co.in";
  const mailtoLink = `mailto:${email}`;

  const openMail = () => {
    window.open(mailtoLink);
  };
  return (
    <>
      <SEO
        title="Privacy policy | Skypro IPTV"
        description="Learn how Skypro IPTV protects your data. Our privacy policy ensures secure handling of your information. Trust in our commitment to privacy."
      />
      <InnerPageBanner title='Privacy Policy' innerPageBanner={ImageIcons.privacyPolicy} />
      <section className='relative overflow-hidden'>
        <LazyLoad>
        <img src={ImageIcons.patten} alt='Patten' className="absolute -translate-y-2/4 top-2/4 left-0 w-[60px]" />
        <img src={ImageIcons.patten} alt='Patten' className="absolute top-[50%] right-0 rotate-[180deg] w-[60px]" />
        </LazyLoad>
        <div className="container">
          <p>Policy last updated: <span style={{ color: "#fd5901" }}>
            November 2023
          </span>
          </p>
          <p>
            For us, your privacy is a top priority and we aspire to deal
            with your personal information responsibly in order to elevate
            your experience. Your information, which is collected by us
            while you visit our website{" "}
            <Link className='linkColor' to={mailtoLink} onClick={openMail}>
              info@skypro.co.in
            </Link>
            &nbsp; is utilised conscientiously for your better user
            experience. All the strict measures are being maintained by us
            at SkyPro in order to provide protection to your data from any
            of the illegitimate access. If you are ever susceptible to any
            of our services, feel free to contact us at{" "}
            <Link className='linkColor' to={mailtoLink} onClick={openMail}>
              info@skypro.co.in
            </Link>
            . We believe in providing transparency in every aspect
          </p>
          {privacyData.map((data, i) => (
            <>
              <h2 className='mt-[20px] mb-[10px] text-[26px]' style={{ fontFamily: 'Roboto, sans-serif' }}>{data.heading}</h2>
              <ul className="mt-[10px]">
                <li>
                  <strong className=' mb-[2px] text-[#071e43] inline-block'>{data.contentFirst}</strong>
                  <br />
                  <span className='mb-[10px] inline-block'>{data.paraFirst}</span>
                </li>
                <li>
                  <strong className='mb-[2px] text-[#071e43] inline-block'>{data.contentSecond}</strong>
                  <br />
                  <span>{data.paraSecond}</span>
                </li>
              </ul>
            </>
          ))}

          {privacySubdata.map((data, i) => (
            <>
              <h2 className='mt-[20px] mb-[10px] text-[26px]' style={{ fontFamily: 'Roboto, sans-serif' }}>{data.heading}</h2>
              <p>
                {data.para + " "}
                {data.url && (
                  <Link to={mailtoLink} onClick={openMail}>
                    info@skypro.co.in
                  </Link>
                )}
              </p>
            </>
          ))}
        </div>
      </section>
    </>
  )
}

const privacyData = [
  {
    heading: "Information We Collect",
    contentFirst: "Personal Information:",
    paraFirst:
      "Your certain personal information like name, address and your contact details etcetera are gathered by us while you visit our website. The information we collect is generally provided by you through certain forms. We ensure full confidentiality and security of your information, as strict measures are followed to safeguard your data from any illegal access, disclosure of information and any alteration with your personal data.",
    contentSecond: "Usage Information:",
    paraSecond:
      "With an aim to provide you better user experience, we collect data regarding different pages you visited along with time spent on each of the pages. Besides this, other analytical data is also collected. This helps us in the refinement of the functionality of our website and its content, so that it meets your needs.",
  },

  {
    heading: "How We Use Your Information",
    contentFirst: "Service Delivery:",
    paraFirst:
      "The information accumulated by us plays a significant role in improving our service delivery. It is being used by us in order to enhance as well as personalise our offerings, which helps us make sure that our services meet your needs. The expert team of SkyPro believes in providing quick responses to inquiries of our customers and satisfying all their concerns.",
    contentSecond: "Communication:",
    paraSecond:
      "In order to update you about our services, newsletters and promotional materials, your contact information is being utilised by us. We are dedicated to providing you flexibility to get our promotional dispatches at any time, which gives you control of the information received by you.",
  },
];

const privacySubdata = [
  {
    heading: "Security",
    para: "The details are fully protected from any unauthorised access or destruction by implementing necessary security measures. Cookies are also being used in order to improve your browsing experience and these can be managed in browser settings.",
  },
  {
    heading: "Your Choices",
    para: "Your details with us can be reviewed by you at any time and can also be cancelled, as you have the right to do this. Contact us for assistance at",
    url: "info@skypro.co.in",
  },
  {
    heading: "Changes to this Privacy Policy",
    para: "We may update this Privacy Policy periodically. Any changes will be posted on this runner with the updated date.",
  },
  {
    heading: "Changes to Policy",
    para: "Privacy policies are subject to change and changes are posted here in order to update the users regarding the same.",
  },
];


export default PrivacyPolicy