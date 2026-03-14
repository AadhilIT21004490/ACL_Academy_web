
// service tow
import serviceIcon1 from '../../../public/assets/images/icon/services-two-icon-1.png';
import serviceIcon2 from '../../../public/assets/images/icon/services-two-icon-2.png';
import serviceIcon3 from '../../../public/assets/images/icon/services-two-icon-3.png';
import serviceIcon4 from '../../../public/assets/images/icon/services-two-icon-4.png';
import type { ServiceOneItem, ServicesThree, ServicesTow, ServingItem } from './type';
import productDesignIcon from '../../../public/assets/images/icon/product-design.png';
import digitalMarketingIcon from '../../../public/assets/images/icon/digital-marketing.png';
import userResearchIcon from '../../../public/assets/images/icon/user-reaserach.png';
import webDesignIcon from '../../../public/assets/images/icon/web-design.png';



export const servicesTow: ServicesTow[] = [
    {
        id: 1,
        icon: serviceIcon1,
        title: 'Product Design & Branding',
        link: '/inner/digital-marketing',
        description:
            "We create innovative product designs and develop cohesive branding that captures your audience's attention.",
    },
    {
        id: 2,
        icon: serviceIcon2,
        title: 'Web Design & Development',
        link: '/inner/web-design-development',
        description:
            'We craft user-friendly websites that combine visually appealing design with powerful functionality.',
    },
    {
        id: 3,
        icon: serviceIcon3,
        title: 'Content Creation & Video Marketing',
        link: '/inner/search-engine-optimization',
        description:
            'We produce compelling content and dynamic video marketing campaigns that engage and convert.',
    },
    {
        id: 4,
        icon: serviceIcon4,
        title: 'Digital Marketing & Ads Campaign',
        link: '/inner/digital-marketing',
        description:
            'We design targeted digital marketing strategies and ad campaigns that deliver measurable results.',
    },
];


//service three
export const servicesThree: ServicesThree[] = [
    {
        id: 1,
        icon: 'icon-information-technology',
        title: 'Managed IT Services',
        description:
            'Managed IT Services offer a comprehensive, cost-effective solution for businesses...',
        link: '/inner/services',
    },
    {
        id: 2,
        icon: 'icon-software-development',
        title: 'Software Development',
        description:
            'We deliver powerful, scalable, and user-focused applications built for performance.',
        link: '/inner/services',
    },
    {
        id: 3,
        icon: 'icon-cybersecurity',
        title: 'Cybersecurity Services',
        description:
            'Protect your business from digital threats with robust cybersecurity frameworks.',
        link: '/inner/services',
    },
    {
        id: 4,
        icon: 'icon-data-security',
        title: 'Incident Responder',
        description:
            'Swift and efficient incident response to minimize damage and recovery time.',
        link: '/inner/services',
    },
    {
        id: 5,
        icon: 'icon-encrypted',
        title: 'Data Encryption',
        description:
            'Advanced encryption techniques to secure sensitive data and maintain compliance.',
        link: '/inner/services',
    },
    {
        id: 6,
        icon: 'icon-planning',
        title: 'Disaster Planning',
        description:
            'Ensure business continuity with disaster recovery and proactive planning.',
        link: '/inner/services',
    },
    {
        id: 7,
        icon: 'icon-cyber-threat',
        title: 'Threat Hunter',
        description:
            'Identify and neutralize emerging threats before they impact operations.',
        link: '/inner/services',
    },
    {
        id: 8,
        icon: 'icon-data-recovery',
        title: 'Data Recovery',
        description:
            'Recover lost or corrupted data efficiently with our expert recovery solutions.',
        link: '/inner/services',
    },
];




export const servicesOneData: ServiceOneItem[] = [
    {
        id: 1,
        icon: productDesignIcon,
        title: 'Product Design & Branding',
        link: '/inner/digital-marketing',
    },
    {
        id: 2,
        icon: digitalMarketingIcon,
        title: 'Digital Marketing & ADS Camping',
        link: '/inner/digital-marketing',
    },
    {
        id: 3,
        icon: userResearchIcon,
        title: 'Ui/UX Design & User Research',
        link: '/inner/web-design-development',
    },
    {
        id: 4,
        icon: webDesignIcon,
        title: 'Website Design & Development',
        link: '/inner/web-design-development',
    }
];




export const servingItems: ServingItem[] = [
    { id: 1, icon: "icon-information-technology", title: "IT Automation" },
    { id: 2, icon: "icon-technology", title: "Network Solutions" },
    { id: 3, icon: "icon-infrastructure", title: "IT Infrastructure" },
    { id: 4, icon: "icon-talk", title: "Consultant" },
    { id: 5, icon: "icon-it-processing", title: "Delivering Secure" },
    { id: 6, icon: "icon-computer-1", title: "Mobile" },
    { id: 7, icon: "icon-computer-2", title: "Computer" },
    { id: 8, icon: "icon-technology", title: "Television" },
    { id: 9, icon: "icon-efficiency", title: "Energy" },
    { id: 10, icon: "icon-growth", title: "Farming" },
    { id: 11, icon: "icon-technology-1", title: "Industries" },
    { id: 12, icon: "icon-event", title: "Events" },
];
