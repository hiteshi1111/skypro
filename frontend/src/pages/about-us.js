import React from 'react';
import Vision from '../components/about/vision';
import Blocks from '../components/about/blocks';
import Testimonials from '../components/about/testimonials';
import InnerPageBanner from '../components/shared/innerPageBanner';
import ImageIcons from '../components/imageComponent/ImageIcons';
import SEO from '../components/shared/seo';
const AboutUs = () => {
  return (
    <>
    <SEO 
     title="About Us- Skypro, a preeminent IPTV services provider"
     description="We are a premier IPTV services providers, offering  users a wide range of content, providing experience of theatre screen from the comfort of their living room."
     keywords="about skypro, about skypro iptv"
    />
      <InnerPageBanner title="About Us" innerPageBanner={ImageIcons.aboutBg} />
      <Vision />
      <Blocks />
      <Testimonials />
    </>
  );
};

export default AboutUs;
