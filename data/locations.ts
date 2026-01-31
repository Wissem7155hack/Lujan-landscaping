// Location Data for SEO Landing Pages
// This file contains information for each city/location we serve

export interface LocationData {
    city: string;
    slug: string;
    postalCode: string;
    region: string;
    description: string;
    landmarks: string[];
    services: string[];
    testimonial?: {
        text: string;
        author: string;
        service: string;
    };
    mapUrl: string;
}

export const locations: LocationData[] = [
    {
        city: 'Denver',
        slug: 'denver',
        postalCode: '80205',
        region: 'Colorado',
        description:
            'Professional landscaping and hardscaping services in Denver. From plant installation and concrete work to pavers and regular maintenance, we serve the entire Mile High City with quality craftsmanship.',
        landmarks: [
            'MLK Jr. Blvd',
            'City Park',
            'LoDo Denver',
            'Five Points',
            'Cherry Creek',
        ],
        services: [
            'Hardscaping & Pavers',
            'Mulch & Rock Installation',
            'Concrete Services',
            'Plant & Tree Services',
            'Wood Fencing',
            'Maintenance Services',
            'Aeration & Fertilizer',
            'Sprinkler Winterization',
        ],
        testimonial: {
            text: 'Lujan landscaping transformed our Denver backyard. The new patio and plants look amazing!',
            author: 'Jane D.',
            service: 'Hardscaping',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7!2d-104.9!3d39.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDenver!5e0!3m2!1sen!2sus!4v1234567890',
    },
    {
        city: 'Westminster',
        slug: 'westminster',
        postalCode: '80030',
        region: 'Colorado',
        description:
            'Your local partner for landscaping in Westminster. We specialize in sod installation, mulch/rock features, and durable concrete services for Westminster residential and commercial properties.',
        landmarks: [
            'Westminster City Park',
            'Butterfly Pavilion',
            'Westminster Promenade',
            'Standley Lake',
            'Oldest Church in Westminster',
        ],
        services: [
            'Concrete Patios',
            'Sod Installation',
            'Mulch & Rock',
            'Wood Fencing',
            'Tree Trimming',
            'Regular Mowing',
            'Aeration Services',
            'Sprinkler Blowouts',
        ],
        testimonial: {
            text: 'Excellent work on our concrete driveway in Westminster. Highly recommended for any hardscaping!',
            author: 'Mark S.',
            service: 'Concrete Services',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10537.7!2d-105.0!3d39.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWestminster!5e0!3m2!1sen!2sus!4v1234567890',
    },
    {
        city: 'Aurora',
        slug: 'aurora',
        postalCode: '80010',
        region: 'Colorado',
        description:
            'Comprehensive landscaping services in Aurora. We provide high-quality mulch, rock, concrete, and plant services to keep Aurora homes looking their best all year round.',
        landmarks: [
            'Stanley Marketplace',
            'Cherry Creek State Park',
            'Buckley Space Force Base',
            'Aurora Town Center',
            'Colfax Avenue',
        ],
        services: [
            'Mulch & Rock Installation',
            'Concrete Walkways',
            'Tree Removal & Trimming',
            'Fence Installation',
            'Lawn Maintenance',
            'Aeration',
            'Sprinkler Services',
            'Planting Services',
        ],
        testimonial: {
            text: 'The team was very responsive and did a great job with our mulch and rock installation in Aurora.',
            author: 'Robert P.',
            service: 'Landscaping',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10537.7!2d-104.8!3d39.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAurora!5e0!3m2!1sen!2sus!4v1234567890',
    },
    {
        city: 'Thornton',
        slug: 'thornton',
        postalCode: '80229',
        region: 'Colorado',
        description:
            'Reliable landscaping solutions for Thornton residents. Specializing in pavers, concrete, and seasonal maintenance like aeration and sprinkler winterization.',
        landmarks: [
            'Trail Winds Park',
            'Thornton Town Center',
            'Margaret Carpenter Rec Center',
            'Thorncreek Golf Course',
        ],
        services: [
            'Paver Installation',
            'Concrete Pads',
            'Wood Fencing',
            'Tree Services',
            'Sod & Mulch',
            'Lawn Mowing',
            'Sprinkler Blowouts',
            'Seasonal Clean-ups',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10537.7!2d-104.9!3d39.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sThornton!5e0!3m2!1sen!2sus!4v1234567890',
    },
    {
        city: 'Arvada',
        slug: 'arvada',
        postalCode: '80002',
        region: 'Colorado',
        description:
            'Family-owned landscaping excellence in Arvada. From hardscaping with pavers to plant installation and maintenance, we take care of your Arvada property with passion.',
        landmarks: [
            'Olde Town Arvada',
            'Arvada Center for the Arts',
            'Apex Center',
            'Majestic View Park',
        ],
        services: [
            'Hardscaping',
            'Concrete Work',
            'Fence Repair & Install',
            'Planting & Trimming',
            'Mulching',
            'Lawn Care',
            'Aeration',
            'Sprinkler Maintenance',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10537.7!2d-105.1!3d39.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sArvada!5e0!3m2!1sen!2sus!4v1234567890',
    },
    {
        city: 'Lakewood',
        slug: 'lakewood',
        postalCode: '80226',
        region: 'Colorado',
        description:
            'Top-tier landscaping and maintenance in Lakewood. We offer professional concrete services, fencing, and complete lawn care for homes and businesses across Lakewood.',
        landmarks: [
            'Belmar Shopping District',
            'Bear Creek Lake Park',
            'Lakewood Cultural Center',
            'Colorado Christian University',
        ],
        services: [
            'Concrete Services',
            'Wood Fencing',
            'Hardscaping',
            'Mulch & Rock',
            'Tree Care',
            'Mowing & Clean-up',
            'Sprinkler Winterization',
            'Plants & Aeration',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10537.7!2d-105.1!3d39.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLakewood!5e0!3m2!1sen!2sus!4v1234567890',
    },
];

// Helper function to get location by slug
export const getLocationBySlug = (slug: string): LocationData | undefined => {
    return locations.find((loc) => loc.slug === slug);
};

// Helper function to get all location slugs (for routing)
export const getLocationSlugs = (): string[] => {
    return locations.map((loc) => loc.slug);
};
