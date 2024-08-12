import React from 'react'
// import refundTwo from "../../assets/images/refund/why360-patten.png";
import { Link } from "react-router-dom";
import SEO from '../components/shared/seo';
import InnerPageBanner from '../components/shared/innerPageBanner';
import ImageIcons from '../components/imageComponent/ImageIcons';

const Refund = () => {
  const email = "info@skypro.co.in";
  const mailtoLink = `mailto:${email}`;

  const openMail = () => {
    window.open(mailtoLink);
  };
  return (
    <>
      <SEO
        title="Refund Policy - Skypro IPTV service provider"
        description="SkyPro IPTV Transparent Refund Policy. Your satisfaction matters is how we prioritize your experience. Get clarity on refunds."
      />
      <InnerPageBanner title='Refund Policy' innerPageBanner={ImageIcons.refundPolicy} />

      <section className="">
        <div className="container">
          <p>Last updated: <span style={{ color: "#fd5901" }}>
            November 2023
          </span>
          </p>
          <p>As we believe in providing transparency, so don't forget to read and understand our refund policy</p>
          <h2 className='mt-[20px] mb-[10px] text-[26px]' style={{ fontFamily: 'Roboto, sans-serif' }}>Eligibility for Refund</h2>
          <p>Sometimes, there are circumstances where a user demands a
            refund, so if you want to be eligible to refund, then you must
            fulfil the criteria for the same.</p>
          <ul className='list_style'>
            <li>
              The refund request must be made or submitted within the
              specified days of the purchase or service activation date
              according to the rules of the company.
            </li>
            <li>
              Only genuine reasons supported by evidence, which is checked
              upon by the company, are entertained.
            </li>
          </ul>
          <h2 className='mt-[20px] mb-[10px] text-[26px]' style={{ fontFamily: 'Roboto, sans-serif' }}>Refund Request Procedure</h2>
          <ul className='list_style'>
            <li>
              Our customer care team is always at your service, so if you
              want to request a refund, feel free to contact them at{" "}
              <Link className='linkColor' to={mailtoLink} onClick={openMail}>
                info@skypro.co.in
              </Link>
            </li>
            <li>
              You must specify the details regarding the reasons behind the
              refund as well as supporting evidence.
            </li>
          </ul>
          <h2 className='mt-[20px] mb-[10px] text-[26px]' style={{ fontFamily: 'Roboto, sans-serif' }}>Limitations</h2>
          <ul className='list_style'>
            <li>
              Only eligible services or products come under a refund policy.
              Kindly read all the details regarding your purchase before
              completing any transaction.
            </li>
          </ul>
          <h2 className='mt-[20px] mb-[10px] text-[26px]' style={{ fontFamily: 'Roboto, sans-serif' }}>Our Commitment</h2>
          <ul className='list_style'>
            <li>
              We believe in customer satisfaction, so we are always eager to
              provide top-notch services to our users along with making sure
              that every issue of theirs is getting addressed and rectified.
            </li>
            <li>
              It must be noted that you agree to abide by all our terms and
              conditions regarding the refund policy while using our
              services.
            </li>
            <li>
              If you are sceptical about anything, contact us at &nbsp;{" "}
              <Link className='linkColor' to={mailtoLink} onClick={openMail}>
                info@skypro.co.in
              </Link>
              .
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Refund