import { Project, Experience, SocialLink, DesignValue } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Android OS 14",
    category: "Mobile OS Design",
    image: "https://picsum.photos/seed/android14/1600/1200", // Landscape 4:3
    description: "Leading several high-priority privacy and safety features on Android – the world's most widely used operating system."
  },
  {
    id: 2,
    title: "Google Maps",
    category: "Product Design",
    image: "https://picsum.photos/seed/maps/1600/1200",
    description: "Immersive view implementation and user journey mapping for the next billion users."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "Current Role",
    role: "Product Designer",
    period: "Present",
    description: "Focusing on creating thoughtful and beautiful design experiences."
  },
  {
    id: 2,
    company: "Previous Studio",
    role: "Product Design Lead",
    period: "2022",
    description: "Led design workstreams for digital products."
  }
];

export const DESIGN_VALUES: DesignValue[] = [
  {
    title: "User-First",
    description: "Every decision starts with the user. Empathy is the foundation of great products."
  },
  {
    title: "Simplicity",
    description: "Less is more. Clarity over complexity. Reducing cognitive load is key."
  },
  {
    title: "Craft",
    description: "Obsessive attention to detail. The quality of execution matters as much as the idea."
  },
  {
    title: "Impact",
    description: "Design that drives real results. solving real problems for real people."
  }
];



export const SOCIALS: SocialLink[] = [
  { name: "LinkedIn", url: "#" },
  { name: "See full CV", url: "#" }
];