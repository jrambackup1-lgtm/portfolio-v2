import { Project, Experience, SocialLink, CoachingItem } from './types';

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
    company: "Google",
    role: "Interaction Designer",
    period: "Aug 2022-Today",
    description: "Led cross-platform AI experiences and high-profile features such as Satellite SOS on Pixel 9 and Android Private Space, shaping long-term Android strategies, enhancing user engagement for billions globally, and fostering cross-functional collaboration and design community initiatives."
  },
  {
    id: 2,
    company: "McKinsey & Company",
    role: "Product Design Lead",
    period: "2022",
    description: "Led design workstreams for large-scale digital transformations in the financial sector."
  },
  {
    id: 3,
    company: "McKinsey & Company",
    role: "Senior UX Designer",
    period: "2018-2022",
    description: "Served high-profile clients in the retail, construction, and banking sector to identify and create new product value propositions in concept sprints to inform key business decisions."
  }
];

export const COACHING: CoachingItem[] = [
  {
    title: "1:1 Coaching Sessions",
    price: "£89.00 / 1 hr session",
    description: "Looking for 1:1 mentoring with your design career? I'm here to help! I've helped many people land their first job in UX over the years. Maybe you're feeling a bit lost at building your portfolio, need help prepping for your next interview/ whiteboard challenge, or just need help with some challenges you're facing at work.",
    linkText: "BOOK A SESSION"
  },
  {
    title: "Offline Portfolio Review",
    price: "£49.00",
    description: "Submit your portfolio and receive a detailed written review covering structure, case study flow, design rationale, and senior-level signals. This offline review is designed for UX designers who want deep, honest feedback—not surface-level polish tips.",
    linkText: "HOW IT WORKS"
  },
  {
    title: "A Strategic Guide to UX Portfolios: Do this, Not that (PDF)",
    price: "£10.00 + VAT",
    description: "Based on experience interviewing UX designers at Google, this book breaks down the decisions that consistently help — and hurt — portfolios during hiring. This guide focuses on clarity, judgement, and intent. It shows what interviewers actually respond to, what they skim past, and what quietly raises red flags.",
    linkText: "BUY NOW"
  }
];

export const SOCIALS: SocialLink[] = [
  { name: "LinkedIn", url: "#" },
  { name: "See full CV", url: "#" }
];