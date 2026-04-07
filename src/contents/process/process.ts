import processShape1 from '../../../public/assets/images/shapes/process-two-shape-1.png';
import processShape2 from '../../../public/assets/images/shapes/process-two-shape-2.png';
import processIcon1 from '../../../public/assets/images/icon/process-two-icon-1.png';
import processIcon2 from '../../../public/assets/images/icon/process-two-icon-2.png';
import processIcon3 from '../../../public/assets/images/icon/process-two-icon-3.png';
import processIcon4 from '../../../public/assets/images/icon/process-two-icon-4.png';
import type { ProcessItem, ProcessOneItem, ProcessStepThree } from './processType';
import icon1 from "../../../public/assets/images/icon/process-one-icon-1.png";
import icon2 from "../../../public/assets/images/icon/process-one-icon-2.png";
import icon3 from "../../../public/assets/images/icon/process-one-icon-3.png";
import icon4 from "../../../public/assets/images/icon/process-one-icon-4.png";


export const processData: ProcessItem[] = [
    {
        id: 1,
        title: 'Technical Mastery',
        description:
            'Master core competencies in cost management, procurement, and contract administration through real project data.',
        icon: processIcon1,
        shape: processShape1.src,
        animation: 'fadeInLeft',
    },
    {
        id: 2,
        title: 'Digital Transformation',
        description:
            'Implement AI and modern digital workflows to automate tasks and enhance project delivery efficiency.',
        icon: processIcon2,
        shape: processShape2.src,
        animation: 'fadeInRight',
    },
    {
        id: 3,
        title: 'Commercial Simulation',
        description:
            'Navigate real-world commercial scenarios and project challenges to develop high-level strategic decision-making skills.',
        icon: processIcon3,
        shape: processShape1.src,
        animation: 'fadeInLeft',
    },
    {
        id: 4,
        title: 'Career Strategy',
        description:
            'Optimize your professional profile and interview performance to secure roles in competitive global markets.',
        icon: processIcon4,
        shape: processShape2.src,
        animation: 'fadeInRight',
    },
];


export const processSteps: ProcessStepThree[] = [
    {
        id: 1,
        icon: 'icon-information-technology',
        title: 'Choose A Service',
        text: 'Choose a Service: Like IT Support & Maintenance',
        delay: 200,
    },
    {
        id: 2,
        icon: 'icon-define',
        title: 'Define Requirements',
        text: 'Define Requirements: Like IT Support & Maintenance',
        delay: 300,
        reverse: true,
    },
    {
        id: 3,
        icon: 'icon-seminar',
        title: 'Request A Meeting',
        text: 'Request A Meeting: Like IT Support & Maintenance',
        delay: 400,
    },
    {
        id: 4,
        icon: 'icon-solution',
        title: 'Final Solution',
        text: 'Final Solution: Like IT Support & Maintenance',
        delay: 500,
        reverse: true,
    },
]



export const processOneItem: ProcessOneItem[] = [
    {
        id: 1,
        title: `Planning for <br /> business`,
        description: `This process involves collaborating with clients to identify their business goals and challenges.`,
        icon: icon1
    },
    {
        id: 2,
        title: `Client <br /> Focused`,
        description: `This process involves collaborating with clients to identify their business goals and challenges.`,
        icon: icon2
    },
    {
        id: 3,
        title: `Business <br /> Implementation`,
        description: `This process involves collaborating with clients to identify their business goals and challenges.`,
        icon: icon3
    },
    {
        id: 4,
        title: `Business <br /> Success`,
        description: `This process involves collaborating with clients to identify their business goals and challenges.`,
        icon: icon4
    }
]