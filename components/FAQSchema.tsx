import React from 'react';
import { Helmet } from 'react-helmet';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    faqs?: FAQItem[];
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
    const defaultFAQs: FAQItem[] = [
        {
            question: "How much does landscaping cost in Denver?",
            answer: "Landscaping costs in Denver vary depending on the service. We offer free quotes for all projects including pavers, concrete, and garden maintenance. Call us at 720-530-3933 for an accurate estimate."
        },
        {
            question: "How long does a landscaping project take?",
            answer: "Small maintenance jobs can be done in a few hours, while larger projects like concrete patios or hardscaping may take 2-5 days depending on the scope and weather conditions."
        },
        {
            question: "Do you provide free estimates?",
            answer: "Yes! We provide free quotes and estimates for all our services in Denver, Westminster, Aurora, and surrounding areas. Give us a call or text at 720-530-3933."
        },
        {
            question: "What services does Lujan landscaping offer?",
            answer: "We offer a full range of services including installing pavers, mulch, rock, concrete, plant and tree installation, wood fencing, and regular lawn maintenance like mowing, clean-ups, and aeration."
        },
        {
            question: "Do you handle sprinkler winterization and aeration?",
            answer: "Yes, we provide seasonal maintenance services including lawn aeration, fertilizer application, and sprinkler system blowouts/winterization to keep your yard healthy year-round."
        },
        {
            question: "Are you a locally owned business?",
            answer: "Yes, Lujan landscaping is a family-owned business serving the Denver metro area, including Westminster, Aurora, Thornton, and nearby Colorado communities."
        }
    ];

    const faqItems = faqs || defaultFAQs;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default FAQSchema;
