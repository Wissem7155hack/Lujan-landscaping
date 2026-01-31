import React from 'react';
import { Helmet } from 'react-helmet';

export const GardenerSchema: React.FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Gardener",
        "@id": "https://lujanlandscaping.com/#gardener",
        "name": "Lujan landscaping",
        "description": "Professional landscaping services specialized in pavers, concrete, mulch, and plant installation in Denver, Westminster, and Aurora",
        "founder": {
            "@type": "Person",
            "name": "Lujan Landscaping Team"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Denver"
            },
            {
                "@type": "City",
                "name": "Westminster"
            },
            {
                "@type": "City",
                "name": "Aurora"
            },
            {
                "@type": "City",
                "name": "Thornton"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Landscaping & Concrete Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Hardscaping & Pavers",
                        "description": "Professional installation of pavers and hardscaping for outdoor living spaces",
                        "provider": {
                            "@id": "https://lujanlandscaping.com/#organization"
                        },
                        "category": "Hardscaping"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Concrete Installation",
                        "description": "Durable concrete for patios, walkways, and driveways",
                        "provider": {
                            "@id": "https://lujanlandscaping.com/#organization"
                        },
                        "category": "Concrete"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Garden Maintenance",
                        "description": "Mowing, trimming, weeding, and seasonal clean-ups",
                        "category": "Maintenance"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Tree & Plant Services",
                        "description": "Installation, trimming, and removal of trees and shrubs",
                        "category": "Landscaping"
                    }
                }
            ]
        },
        "url": "https://lujanlandscaping.com/",
        "telephone": "+17205303933",
        "email": "lujanlandscapingllc@gmail.com",
        "priceRange": "$$",
        "paymentAccepted": "Cash, Check, Digital Payment",
        "currenciesAccepted": "USD"
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default GardenerSchema;
