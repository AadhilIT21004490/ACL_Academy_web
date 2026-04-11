import { StaticImageData } from "next/image";

export interface TeamMember {
    id: number;
    name: string;
    position: string;
    education: string;
    description: string;
    image: string | StaticImageData;
    link: string;
}