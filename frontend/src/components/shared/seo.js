import React from "react";
import { Helmet } from 'react-helmet';
import { useLocation } from "react-router-dom";

const SEO = ({ title = "", description = "", keywords = "", schema = "", meta = false }) => {
  const { pathname } = useLocation();
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title || "Skypro Tv"}</title>
      <meta
        name="description"
        content={description || "Best IPTV Services in the area"}
      />
      <meta property="og:title" content={title || "Skypro Tv"} />
      <meta property="og:description" content={description} />
      {meta && (
        <meta name="robots" content="noindex, nofollow" />
      )}
      <link rel="canonical" href={`https://www.skypro.co.in${pathname}`} />
      {keywords && <meta name="keywords" content={keywords} />}
      {schema && (
        <script defer type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  );
};
export default SEO;