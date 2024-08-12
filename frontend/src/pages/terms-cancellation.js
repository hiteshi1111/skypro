import React from 'react'
// import termsOne from "../../assets/images/refund/why360-patten.png";
import SEO from '../components/shared/seo';
import ImageIcons from '../components/imageComponent/ImageIcons';
import InnerPageBanner from '../components/shared/innerPageBanner';
import LazyLoad from 'react-lazyload';

const TermsandConditions = () => {
  return (
    <>
      <SEO title="Tearm & Conditions - Skypro IPTV" description="SkyPro IPTV Terms and Conditions for a smooth entertainment experience. Please understand our agreement to enhance your viewing satisfaction." />
      <InnerPageBanner title='Terms and Conditions' innerPageBanner={ImageIcons.termsAndConditions} />

      <section className='relative'>
        <LazyLoad>
        <img src={ImageIcons.patten} alt='Patten' className="absolute -translate-y-2/4 top-2/4 left-0 w-[60px]" />
        <img src={ImageIcons.patten} alt='Patten' className="absolute top-[50%] right-0 rotate-[180deg] w-[60px]" />
        </LazyLoad>
        <div className="container">
          <p>Last updated: <span style={{ color: "#fd5901" }}>
            November 2023
          </span>
          </p>
          <p>
            Without any iota of doubt, journey with any of the services should
            be started by poring over the terms and conditions of the service
            providers,as this helps in directing the relationship between the
            customer and service provider. Below given is the description of
            our terms and conditions.
          </p>

          <ul className="list_style">
            {termsData.map((data, i) => (
              <>
                <h2 className='mt-[20px] mb-[10px] text-[26px]' style={{ fontFamily: 'Roboto, sans-serif' }}>{data.title}</h2>
                <li>{data.desc}</li>
              </>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

const termsData = [
  {
    title: "Service Description",
    desc: "As we are committed to elevate your digital experience, we have crafted our service in a way to simplify your operations. So, dive into the creative realm of streaming with, where imagination meets reliability and where satisfaction of customers is given priority.",
  },
  {
    title: "User Responsibilities",
    desc: "The onus of maintaining confidentiality of the credentials of the account lies on the users. They also must ensure they are not compromising laws and regulations in their use of SkyPro communications. Any kind of unauthorised use is being strictly restricted.",
  },
  {
    title: "Data Security and Privacy",
    desc: "Your Privacy is given top most priority. All the industry-standards are being taken care of by Skypro communication but users must be considerate of their own responsibilities regarding the security and the protection of the data.",
  },
  {
    title: "Payments and Billing",
    desc: "Timely payments have to be ensured by the users while subscribing to our premium services. At Skypro, we maintain the authority to modify prices and payment terms but users are always given notice.",
  },
  {
    title: "Termination of Services",
    desc: "If any user is found violating our terms and conditions, we possess the right to suspend or terminate their services. Users can also terminate their accounts at any time but in accordance with relevant cancellation terms.",
  },
  {
    title: "Intellectual Property",
    desc: "Intellectual property laws are there to protect all the content and materials provided by Skypro. Skypro ensures that users are provided with a limited, non-exclusive licence so that they can use the service for their intended purpose.",
  },
  {
    title: "Changes in Terms",
    desc: "Although terms and conditions are subject to changes or updates, we always inform users of any material changes and their continued use assures their acceptance of revised terms and conditions.",
  },
];

export default TermsandConditions
