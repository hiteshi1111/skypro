import React, { useState, useEffect } from 'react';
import SEO from '../components/shared/seo';
import InnerPageBanner from '../components/shared/innerPageBanner';
import ImageIcons from '../components/imageComponent/ImageIcons';
import CitiesDetail from '../components/cities/citiesdetail';
import { useParams } from 'react-router-dom';
import servicesData from '../data/cities.json';

const CityDetails = () => {
  const { types } = useParams();
  const [serviceDetails, setServiceDetails] = useState(null);

  useEffect(() => {
    const selectedService = servicesData.find(service => service.types === types);
    setServiceDetails(selectedService);
  }, [types]);
  return (
    <>
      <SEO
        title={serviceDetails?.metaTitle}
        description={serviceDetails?.metaDescription}
        keywords={serviceDetails?.keywords}u
      />
      <InnerPageBanner
        title={serviceDetails ? serviceDetails.cityname :"Cities"}
        path={serviceDetails ? serviceDetails.cityname : ""}
        innerPageBanner={ImageIcons.allCities}
      />
      <CitiesDetail />
    </>
  );
}

export default CityDetails;
