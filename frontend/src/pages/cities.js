import React from 'react'
import SEO from '../components/shared/seo'
import InnerPageBanner from '../components/shared/innerPageBanner'
import ImageIcons from '../components/imageComponent/ImageIcons'
import Cities from '../components/cities/cities'
import Search from '../components/cities/search'

const City = () => {
  return (
    <>
      <SEO
        title="Explore Skypro IPTV Services in Major Cities"
        description="Skypro IPTV services available in various cities. Find out how we bring high-quality streaming solutions to your doorstep."
        keywords="Skypro cities, IPTV services in cities, Skypro IPTV coverage, city-wise IPTV services, Skypro urban areas, metropolitan IPTV services, Skypro IPTV availability, local IPTV services, Skypro city, expansion
       IPTV in major cities, Skypro service locations, urban IPTV solutions, Skypro city-based services, IPTV services nearby, Skypro city network"
      />
      <InnerPageBanner title='Cities' innerPageBanner={ImageIcons.Cities} />
      <Search />
      <Cities />

    </>
  )
}

export default City