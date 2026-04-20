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
    "id": 2,
    "title": "Mastering Modern Web Development: Key Trends for 2026",
    "date": "April 15, 2026",
    "dayOfWeek": "Wednesday",
    "author": {
      "name": "James Anderson",
      "image": "/assets/images/blog/author-2.jpg"
    },
    "mainImage": "/assets/images/blog/rics1.jpg",
    "description": "Navigating the landscape of modern web development requires staying updated with the latest tools and practices. As we move further into 2026, the focus has shifted towards server-side rendering and AI-assisted workflows.\n\nThe Future of Server Components\nReact Server Components allow developers to build faster, more efficient applications by moving heavy logic to the server. This reduces client-side bundle sizes significantly.\n\nAI-Driven Development\nFrom code completion to automated testing, AI agents are becoming indispensable in our daily coding routines, helping us write cleaner code faster and reducing time spent on boilerplate tasks.",
    "tags": ["Web Dev", "Trends", "React"]
  },
  {
    "id": 3,
    "title": "Why UI/UX is the Backbone of Digital Success",
    "date": "April 18, 2026",
    "dayOfWeek": "Saturday",
    "author": {
      "name": "Sarah Miller",
      "image": "/assets/images/blog/author-3.jpg"
    },
    "mainImage": "/assets/images/blog/blog-details-img-3.jpg",
    "description": "User experience is no longer just an afterthought; it is the core of any successful application. If your users find your interface confusing, they will leave, regardless of how powerful your backend is.\n\nVisual Hierarchy and Clarity\nEffective design leads the user's eye to the most important actions first. Using contrast, whitespace, and size helps in creating a natural flow for the user journey.\n\nInteractive Prototyping\nBefore writing a single line of code, use high-fidelity prototypes to test your ideas with real users. This saves countless hours of refactoring down the line.",
    "tags": ["UI/UX", "Design", "Strategy"]
  },
  {
    "id": 4,
    "title": "Securing Your Web Application: A Developer's Guide",
    "date": "April 20, 2026",
    "dayOfWeek": "Monday",
    "author": {
      "name": "David Chen",
      "image": "/assets/images/blog/author-4.jpg"
    },
    "mainImage": "/assets/images/blog/blog-details-img-4.jpg",
    "description": "With cyber threats becoming more sophisticated, security must be baked into your development process from day one. It is not just about having a firewall; it is about writing secure code.\n\nAuthentication Best Practices\nNever roll your own auth system if you can avoid it. Use industry-standard protocols like OAuth 2.0 or OpenID Connect to handle user identities securely and reliably.\n\nData Protection\nAlways encrypt sensitive data at rest and in transit. Implement strict input sanitization to prevent common vulnerabilities like SQL injection and Cross-Site Scripting (XSS) in your web apps.",
    "tags": ["Security", "Backend", "Development"]
  },
  {
    "id": 5,
    "title": "Choosing the Right Tech Stack for Your Startup",
    "date": "April 22, 2026",
    "dayOfWeek": "Wednesday",
    "author": {
      "name": "Elena Rodriguez",
      "image": "/assets/images/blog/author-5.jpg"
    },
    "mainImage": "/assets/images/blog/blog-details-img-5.jpg",
    "description": "Selecting the right tech stack is the most critical decision for any new project. The wrong choice can lead to significant technical debt and scalability issues later on.\n\nEvaluating Scalability\nConsider how your application will handle growth. Does your database choice support horizontal scaling? Is your framework modular enough to grow with your team's needs?\n\nDeveloper Experience (DX)\nChoose tools that your team enjoys using. A high-productivity environment keeps engineers motivated and reduces team turnover, which is vital for long-term project success.",
    "tags": ["Startups", "Architecture", "TechStack"]
  },
  {
    "id": 6,
    "title": "How AI Agents are Changing the Way We Code",
    "date": "April 25, 2026",
    "dayOfWeek": "Saturday",
    "author": {
      "name": "Michael Scott",
      "image": "/assets/images/blog/author-6.jpg"
    },
    "mainImage": "/assets/images/blog/blog-details-img-6.jpg",
    "description": "The way we code is changing rapidly. With the integration of AI-first development environments, the barrier to entry for building complex applications is lower than ever before.\n\nAutomating the Boilerplate\nStop wasting time on repetitive configuration tasks. Let AI agents manage your Docker containers, environment variables, and project setup, allowing you to focus on logic.\n\nCode Reviews and Debugging\nAI models are becoming surprisingly adept at spotting edge-case bugs that human eyes might miss. Integrating AI into your CI/CD pipeline ensures higher quality deployments.",
    "tags": ["AI", "Programming", "Innovation"]
  }
];