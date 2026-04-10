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
    { name: "Quantity Surveying Practice Class", link: "/inner/quantity-surveying" },
    { name: "RICS Coaching Class", link: "/inner/rics-coaching" },
    { name: "Ai x QS", link: "/inner/ai-qs" },
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