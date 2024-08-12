import React from "react";
import Banner from "../components/home/banner";
import SEO from "../components/shared/seo";
import PackagePlans from "../components/home/packagePlans";
import IptvApp from "../components/shared/iptvapp";
import AboutUs from "../components/home/about";
import Service from "../components/home/service";
import KeyFeatures from "../components/home/keyfeature";
import Facts from "../components/home/facts";
import Testimonials from "../components/about/testimonials";
import HomeFaq from "../components/home/homefaq";
import Partners from "../components/home/partners";
import Content from "../components/home/content";
import Cta from "../components/shared/cta";

const Home = () => {
  return (
    <>
      <SEO
        title="Best IPTV Services in India | Skypro IPTV Provider"
        description="Best IPTV services in India with Skypro IPTV. Compare IPTV plans, provider and watch online for free. Find the best IPTV vs cable TV options."
        keywords="IPTV in India,Skypro IPTV, Skypro IPTV Services, IPTV Services, IPTV Service Providers, IPTV Services, IPTV Providers, bronze IPTV, IPTV Plans, IPTV service supports, watch IPTV online free, IPTV vs cable tv"
      />
      <Banner />
      <PackagePlans />
      <IptvApp bgColor="#fed2ba" />
      <AboutUs />
      <Service />
      <KeyFeatures />
      <Facts />
      <Testimonials />
      <Cta />
      <HomeFaq />
      <Partners />
      <Content />
    </>
  );
};

export default Home;
