"use client"
import React from 'react'; 
import moreIcon from "../../../public/assets/images/icon/services-details-more-services-icon.png";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
interface Service {
    name: string;
    link: string;
}
const services: Service[] = [
    { name: "Digital Marketing", link: "/inner/digital-marketing" },
    { name: "Web Design & Development", link: "/inner/web-design-development" },
    { name: "Search Engine Optimization", link: "/inner/search-engine-optimization" },
    { name: "Design & Branding", link: "/inner/design-and-branding" },
    { name: "App Development", link: "/inner/app-development" },
]
const ServicesList: React.FC = () => {
    const PathName = usePathname();
    return (
        <ul className="services-details__more-services-list list-unstyled">
            {services.map((item: Service, i) => (
                <li key={i} className={item?.link === PathName ? "active" : ""}>
                    <div className="icon">
                        <Image src={moreIcon} width={19} height={18} alt={item.name} />
                    </div>
                    <p>
                        <Link href={item?.link}>{item.name}</Link>
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default ServicesList;