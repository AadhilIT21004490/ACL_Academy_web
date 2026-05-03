// data/blogData.ts
// Path :="../../data/events"

export interface Author {
  name: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  dayOfWeek: string;
  author: Author;
  mainImage: string;
  description: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 8,
    title: "QS practice classes - Batch 06 Now Open",
    date: "May 12, 2026",
    dayOfWeek: "Tuesday",
    author: {
      name: "Afrath Mahmood",
      image: "/assets/images/blog/author-qs-1.jpg",
    },
    mainImage: "/assets/images/blog/cl1.jpeg",
    description:
      "Following the successful completion of Batch 05, ACL Academy is now accepting registrations for Batch 06 of our Quantity Surveying Practice Classes. This programme is designed to bridge the gap between academic knowledge and real-world QS practice. It offers hands-on experience through real project scenarios, covering the full lifecycle of quantity surveying—from initial stages to final account—across Contractor, Consultant, and Client roles.With interactive sessions, continuous Q&A, and a final mock interview, the course focuses on building practical skills, industry awareness, and job readiness aligned with RICS standards. Seats are limited. Secure your place early.",
    tags: ["Career", "QS", "Middle East"],
  },
  {
    id: 9,
    title: "“QS+AI Masterclass: Shaping Tomorrow’s Surveyors",
    date: "May 09, 2026",
    dayOfWeek: "Saturday",
    author: {
      name: "Irsath Ali",
      image: "/assets/images/blog/author-qs-1.jpg",
    },
    mainImage: "/assets/images/blog/cl2.jpeg",
    description:
      "At ACL Academy, we are shaping future-ready, AI-powered Quantity Surveyors. This exclusive QS+AI session is designed for our ACL Academy QS Practice students, focusing on how AI is applied in BOQ, cost planning, contracts, and commercial decision-making — aligned with real industry practice and RICS expectations. 04 May 2026 Exclusively for ACL Academy QS Practice Students In addition, our Power BI Course starts on 09 May 2026.",
    tags: ["AI", "QS", "Technology"],
  },
];
0;
