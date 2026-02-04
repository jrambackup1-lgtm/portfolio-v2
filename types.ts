export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface DesignValue {
  title: string;
  description: string;
}