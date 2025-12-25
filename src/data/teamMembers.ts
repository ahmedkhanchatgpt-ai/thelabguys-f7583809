export interface TeamMember {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  skills: string[];
  email: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  image: string;
  accentColor: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "sumair-ahmed",
    name: "Sumair Ahmed",
    role: "SEO Expert",
    shortBio: "Driving organic growth through strategic SEO optimization.",
    fullBio: "With years of experience in search engine optimization, I help businesses climb to the top of search results. My approach combines technical SEO expertise with content strategy to deliver sustainable organic growth. From comprehensive site audits to keyword research and link building, I craft data-driven strategies that get results.",
    skills: ["Technical SEO", "Keyword Research", "Content Strategy", "Link Building", "Analytics", "Local SEO"],
    email: "sumair@thelabguys.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    image: "/placeholder.svg",
    accentColor: "from-emerald-400 to-teal-500",
  },
  {
    id: "jawad-ahmed",
    name: "Jawad Ahmed",
    role: "Web Developer",
    shortBio: "Building modern, scalable web applications.",
    fullBio: "I'm a passionate web developer specializing in creating fast, responsive, and user-friendly web applications. From concept to deployment, I build digital solutions that not only look great but perform exceptionally. My stack includes modern frameworks and best practices to ensure your web presence stands out.",
    skills: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "Database Design"],
    email: "jawad@thelabguys.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    image: "/placeholder.svg",
    accentColor: "from-blue-400 to-indigo-500",
  },
  {
    id: "muhammad-altaf",
    name: "Muhammad Altaf",
    role: "Cybersecurity Expert",
    shortBio: "Protecting digital assets with advanced security solutions.",
    fullBio: "In today's digital landscape, security is paramount. I specialize in identifying vulnerabilities, implementing robust security measures, and ensuring your digital infrastructure remains protected. From penetration testing to security audits, I provide comprehensive cybersecurity solutions for businesses of all sizes.",
    skills: ["Penetration Testing", "Security Audits", "Network Security", "Threat Analysis", "Compliance", "Incident Response"],
    email: "altaf@thelabguys.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    image: "/placeholder.svg",
    accentColor: "from-red-400 to-rose-500",
  },
  {
    id: "joshua",
    name: "Joshua",
    role: "Trader Expert",
    shortBio: "Navigating financial markets with precision and expertise.",
    fullBio: "With deep expertise in financial markets, I help clients understand and navigate the complexities of trading. Whether it's stocks, forex, or cryptocurrencies, I provide insights, strategies, and education to help you make informed investment decisions. My analytical approach combines technical analysis with market fundamentals.",
    skills: ["Technical Analysis", "Risk Management", "Forex Trading", "Crypto Markets", "Market Research", "Portfolio Strategy"],
    email: "joshua@thelabguys.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    image: "/placeholder.svg",
    accentColor: "from-amber-400 to-orange-500",
  },
  {
    id: "muhammad-ahmed",
    name: "Muhammad Ahmed",
    role: "Video Editor & Graphic Designer",
    shortBio: "Crafting visual stories that captivate and inspire.",
    fullBio: "I bring ideas to life through compelling visual content. From cinematic video editing to stunning graphic design, I create content that resonates with audiences. My creative process focuses on storytelling, brand consistency, and visual impact. Whether it's a brand identity, social media content, or a promotional video, I deliver polished, professional results.",
    skills: ["Video Editing", "Motion Graphics", "Brand Design", "Adobe Creative Suite", "Color Grading", "Social Media Content"],
    email: "ahmed@thelabguys.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    image: "/placeholder.svg",
    accentColor: "from-purple-400 to-pink-500",
  },
];

export const getTeamMember = (id: string): TeamMember | undefined => {
  return teamMembers.find((member) => member.id === id);
};
