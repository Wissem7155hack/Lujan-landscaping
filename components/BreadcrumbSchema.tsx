import React, { useEffect } from 'react';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
}

/**
 * BreadcrumbSchema Component
 * Injects BreadcrumbList structured data into the page head for SEO.
 * This helps Google understand the page hierarchy and display breadcrumb navigation in search results.
 */
export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
    useEffect(() => {
        const baseUrl = 'https://lujanlandscaping.com';

        // Build breadcrumb schema with absolute URLs
        const breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
            }))
        };

        // Find or create schema script element
        let schemaScript = document.querySelector('script[data-schema="breadcrumb"]');
        if (!schemaScript) {
            schemaScript = document.createElement('script');
            schemaScript.setAttribute('type', 'application/ld+json');
            schemaScript.setAttribute('data-schema', 'breadcrumb');
            document.head.appendChild(schemaScript);
        }
        schemaScript.textContent = JSON.stringify(breadcrumbSchema);

        // Cleanup on unmount
        return () => {
            const script = document.querySelector('script[data-schema="breadcrumb"]');
            if (script) {
                script.remove();
            }
        };
    }, [items]);

    return null;
};

export default BreadcrumbSchema;
