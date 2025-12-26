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
  gradient: string;
  glowColor: string;
  iconBg: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "sumair-ahmed",
    name: "Sumair Ahmed",
    role: "GEO & SEO Expert",
    shortBio: "Driving organic growth through strategic SEO optimization.",
    fullBio: "Sumair Ahmed is a Generative Engine Optimization (GEO) and Meta Ads specialist helping brands achieve instant reach and long-term visibility. He optimizes digital presence for AI-powered platforms like ChatGPT, Google Gemini, Perplexity, Bing, and DeepSeek, while also running high-performing Meta ad campaigns focused on conversions and growth. By combining AI search visibility, structured data, and data-driven advertising, he positions brands as trusted answers across modern search ecosystems. Sumair's work centers on scalable growth, authority, and measurable results.",
    skills: ["GEO", "Technical SEO", "Keyword Research", "Content Strategy", "Link Building", "Analytics", "Local SEO"],
    email: "sumairahmed714@gmail.com",
    linkedin: "https://www.linkedin.com/in/sumair-ahmed-1087a9335",
    twitter: "https://twitter.com",
    image: "/placeholder.svg",
    gradient: "from-cyan-400 via-teal-400 to-emerald-500",
    glowColor: "shadow-[0_0_60px_-10px_hsl(180_100%_50%/0.5)]",
    iconBg: "bg-gradient-to-br from-cyan-400 to-emerald-500",
  },
  {
    id: "jawad-ahmed",
    name: "Jawad Ahmed",
    role: "Web Developer",
    shortBio: "Building modern, scalable web applications.",
    fullBio: "I'm a passionate web developer specializing in creating fast, responsive, and user-friendly web applications. From concept to deployment, I build digital solutions that not only look great but perform exceptionally. My stack includes modern frameworks and best practices to ensure your web presence stands out.",
    skills: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "Database Design"],
    email: "jawadkhanjk.official@gmail.com",
    linkedin: "https://www.linkedin.com/in/jawad-ahmed-a91523295",
    twitter: "https://x.com/jawadkkhan07",
    github: "https://github.com",
    image: "/placeholder.svg",
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
    glowColor: "shadow-[0_0_60px_-10px_hsl(230_100%_60%/0.5)]",
    iconBg: "bg-gradient-to-br from-blue-400 to-purple-600",
  },
  {
    id: "joshua",
    name: "Joshua",
    role: "Cybersecurity & Networking Expert",
    shortBio: "Securing networks and building robust digital infrastructure.",
    fullBio: "I specialize in cybersecurity and network infrastructure, ensuring businesses have secure and reliable digital foundations. From network architecture design to threat detection and prevention, I provide comprehensive solutions that protect your assets while maintaining optimal performance. My expertise spans both defensive security measures and proactive network optimization.",
    skills: ["Network Security", "Penetration Testing", "Network Architecture", "Firewall Management", "Threat Detection", "Infrastructure Design"],
    email: "joshua.sandhuorg@gmail.com",
    linkedin: "https://www.linkedin.com/in/joshua-sandhu-9213953a0",
    twitter: "https://x.com/joshuasandhuorg",
    image: "/placeholder.svg",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    glowColor: "shadow-[0_0_60px_-10px_hsl(30_100%_50%/0.5)]",
    iconBg: "bg-gradient-to-br from-amber-400 to-red-500",
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
    gradient: "from-purple-400 via-fuchsia-500 to-pink-500",
    glowColor: "shadow-[0_0_60px_-10px_hsl(280_100%_60%/0.5)]",
    iconBg: "bg-gradient-to-br from-purple-400 to-pink-500",
  },
  {
    id: "kamran-khan",
    name: "Kamran Khan",
    role: "Data Analyst",
    shortBio: "Transforming raw data into actionable business insights.",
    fullBio: "I specialize in data analysis and visualization, helping businesses make informed decisions through data-driven insights. From collecting and cleaning data to building comprehensive dashboards and reports, I turn complex datasets into clear, actionable strategies. My expertise spans statistical analysis, predictive modeling, and business intelligence tools.",
    skills: ["Data Analysis", "SQL", "Python", "Data Visualization", "Excel", "Business Intelligence"],
    email: "kamrankhankakar000@gmail.com",
    linkedin: "https://www.linkedin.com/in/kamran-kakar-581043376",
    image: "/placeholder.svg",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    glowColor: "shadow-[0_0_60px_-10px_hsl(160_100%_50%/0.5)]",
    iconBg: "bg-gradient-to-br from-green-400 to-teal-600",
  },
];

export const getTeamMember = (id: string): TeamMember | undefined => {
  return teamMembers.find((member) => member.id === id);
};
