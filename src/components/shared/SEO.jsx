import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    canonical,
}) => {
    const siteTitle = 'The Bridge Travel';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = 'Luxury Egypt tours, private Nile cruises & Red Sea holidays. Explore Cairo, Luxor & Aswan with The Bridge Travel.';
    const defaultKeywords = 'Egypt Tours, Luxury Travel Egypt, Nile Cruise, Pyramids Tour, Custom Egypt Tours';
    const defaultImage = 'https://thebridgetravel.com/logo.png';

    return (
        <Helmet>
            {/* Basic metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || description || defaultDescription} />
            <meta property="og:image" content={ogImage || defaultImage} />
            {ogUrl && <meta property="og:url" content={ogUrl} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ogTitle || fullTitle} />
            <meta name="twitter:description" content={ogDescription || description || defaultDescription} />
            <meta name="twitter:image" content={ogImage || defaultImage} />
        </Helmet>
    );
};

export default SEO;
