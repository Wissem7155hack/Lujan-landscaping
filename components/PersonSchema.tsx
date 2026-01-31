import React from 'react';
import { Helmet } from 'react-helmet';

interface PersonSchemaProps {
    name?: string;
    jobTitle?: string;
    telephone?: string;
    email?: string;
}

export const PersonSchema: React.FC<PersonSchemaProps> = ({
    name = "Lujan Landscaping Team",
    jobTitle = "Landscaping Specialists",
    telephone = "+17205303933",
    email = "lujanlandscapingllc@gmail.com"
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": name,
        "jobTitle": jobTitle,
        "worksFor": {
            "@id": "https://lujanlandscaping.com/#organization"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Martin Luther King Jr. Blvd",
            "addressLocality": "Denver",
            "postalCode": "80205",
            "addressRegion": "CO",
            "addressCountry": "US"
        },
        "telephone": telephone,
        "email": email,
        "sameAs": [
            "https://www.facebook.com/profile.php?id=61579944943986"
        ],
        "knowsAbout": [
            "Landscaping",
            "Hardscaping",
            "Pavers",
            "Concrete",
            "Tree Trimming",
            "Irrigation",
            "Fencing",
            "Garden Maintenance"
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default PersonSchema;
