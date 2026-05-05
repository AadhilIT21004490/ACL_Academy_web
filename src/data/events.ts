// data/blogData.ts
// Path :="../../data/events"

export interface Author {
  name: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  dayOfWeek: string;
  author: Author;
  mainImage: string;
  description: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [];
