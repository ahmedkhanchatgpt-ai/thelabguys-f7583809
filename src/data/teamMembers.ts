export interface ServiceItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export type LayoutVariant = "minimal" | "creative" | "tech" | "security" | "data" | "futuristic";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  tagline: string;
  layoutVariant: LayoutVariant;
  skills: string[];
  services: ServiceItem[];
  process: ProcessStep[];
  stats: { label: string; value: string }[];
  email: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  image: string;
  gradient: string;
  glowColor: string;
  iconBg: string;
  initials?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "sumair-ahmed",
    name: "Sumair Ahmed",
    role: "GEO & SEO Expert",
    tagline: "Making brands discoverable across AI & search",
    shortBio: "Driving organic growth through strategic SEO optimization.",
    layoutVariant: "minimal",
    fullBio: "I help brands, websites, and creators get discovered through GEO and SEO, on AI platforms like ChatGPT, DeepSeek, Google Gemini, Perplexity, Bing, and Google. I focus on AI search visibility, structured data, entity optimization, and technical GEO, making your content a trusted answer across all search.",
    skills: ["GEO", "Technical SEO", "Keyword Research", "Content Strategy", "Link Building", "Analytics", "Local SEO"],
    services: [
      { title: "AI Search Optimization", description: "Get your brand mentioned as the answer on ChatGPT, Gemini, and Perplexity" },
      { title: "Technical SEO Audit", description: "Deep-dive analysis of your site's technical health and performance" },
      { title: "Content Strategy", description: "Data-driven content planning that ranks and converts" },
      { title: "Entity Optimization", description: "Build your brand's knowledge graph presence" },
    ],
    process: [
      { step: 1, title: "Discovery", description: "Understanding your business, competitors, and goals" },
      { step: 2, title: "Audit & Analysis", description: "Comprehensive technical and content audit" },
      { step: 3, title: "Strategy", description: "Custom roadmap tailored to your objectives" },
      { step: 4, title: "Execution", description: "Implementation with continuous optimization" },
    ],
    stats: [
      { label: "Projects Completed", value: "50+" },
      { label: "Keywords Ranked", value: "1K+" },
      { label: "Traffic Increase", value: "300%" },
      { label: "Happy Clients", value: "30+" },
    ],
    email: "sumairahmed714@gmail.com",
    linkedin: "https://www.linkedin.com/in/sumair-ahmed-1087a9335",
    twitter: "https://x.com/sumairx012",
    image: "/placeholder.svg",
    gradient: "from-cyan-400 via-teal-400 to-emerald-500",
    glowColor: "shadow-[0_0_60px_-10px_hsl(180_100%_50%/0.5)]",
    iconBg: "bg-gradient-to-br from-cyan-400 to-emerald-500",
  },
  {
    id: "jawad-ahmed",
    name: "Jawad Ahmed",
    role: "Web Developer",
    tagline: "Crafting digital experiences that perform",
    shortBio: "Building modern, scalable web applications.",
    layoutVariant: "tech",
    fullBio: "I'm a passionate web developer specializing in creating fast, responsive, and user-friendly web applications. From concept to deployment, I build digital solutions that not only look great but perform exceptionally. My stack includes modern frameworks and best practices to ensure your web presence stands out.",
    skills: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "Database Design"],
    services: [
      { title: "Custom Web Apps", description: "Full-stack applications built with modern technologies" },
      { title: "Landing Pages", description: "High-converting pages optimized for performance" },
      { title: "E-commerce Solutions", description: "Scalable online stores with seamless UX" },
      { title: "API Development", description: "Robust backend services and integrations" },
    ],
    process: [
      { step: 1, title: "Requirements", description: "Define scope, features, and technical needs" },
      { step: 2, title: "Design", description: "UI/UX wireframes and system architecture" },
      { step: 3, title: "Development", description: "Agile sprints with regular demos" },
      { step: 4, title: "Launch", description: "Deployment, testing, and ongoing support" },
    ],
    stats: [
      { label: "Websites Built", value: "80+" },
      { label: "Lines of Code", value: "500K+" },
      { label: "Load Time Avg", value: "<1s" },
      { label: "Client Retention", value: "95%" },
    ],
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
    tagline: "Protecting your digital fortress",
    shortBio: "Securing networks and building robust digital infrastructure.",
    layoutVariant: "security",
    fullBio: "I specialize in cybersecurity and network infrastructure, ensuring businesses have secure and reliable digital foundations. From network architecture design to threat detection and prevention, I provide comprehensive solutions that protect your assets while maintaining optimal performance. My expertise spans both defensive security measures and proactive network optimization.",
    skills: ["Network Security", "Penetration Testing", "Network Architecture", "Firewall Management", "Threat Detection", "Infrastructure Design"],
    services: [
      { title: "Security Assessment", description: "Comprehensive vulnerability analysis and penetration testing" },
      { title: "Network Design", description: "Enterprise-grade infrastructure architecture" },
      { title: "Incident Response", description: "24/7 threat monitoring and rapid response" },
      { title: "Compliance Consulting", description: "Meet industry security standards and regulations" },
    ],
    process: [
      { step: 1, title: "Assessment", description: "Evaluate current security posture and risks" },
      { step: 2, title: "Planning", description: "Design comprehensive security strategy" },
      { step: 3, title: "Implementation", description: "Deploy security measures and controls" },
      { step: 4, title: "Monitoring", description: "Continuous surveillance and improvement" },
    ],
    stats: [
      { label: "Threats Blocked", value: "10K+" },
      { label: "Networks Secured", value: "100+" },
      { label: "Uptime Achieved", value: "99.9%" },
      { label: "Certifications", value: "5+" },
    ],
    email: "joshua.sandhuorg@gmail.com",
    linkedin: "https://www.linkedin.com/in/joshua-sandhu-9213953a0",
    twitter: "https://x.com/joshuasandhuorg",
    image: "/placeholder.svg",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    glowColor: "shadow-[0_0_60px_-10px_hsl(30_100%_50%/0.5)]",
    iconBg: "bg-gradient-to-br from-amber-400 to-red-500",
  },
  {
    id: "muhammad-ahmed-khan",
    name: "Muhammad Ahmed Khan",
    role: "Video Editor & Graphic Designer",
    tagline: "Visual storytelling that captivates",
    shortBio: "Crafting visual stories that captivate and inspire.",
    layoutVariant: "creative",
    fullBio: "I bring ideas to life through compelling visual content. From cinematic video editing to stunning graphic design, I create content that resonates with audiences. My creative process focuses on storytelling, brand consistency, and visual impact. Whether it's a brand identity, social media content, or a promotional video, I deliver polished, professional results.",
    skills: ["Video Editing", "Motion Graphics", "Brand Design", "Adobe Creative Suite", "Color Grading", "Social Media Content"],
    services: [
      { title: "Video Production", description: "End-to-end video creation from concept to final cut" },
      { title: "Brand Identity", description: "Logos, color systems, and visual guidelines" },
      { title: "Motion Graphics", description: "Animated content that brings stories to life" },
      { title: "Social Content", description: "Scroll-stopping visuals for all platforms" },
    ],
    process: [
      { step: 1, title: "Brief", description: "Understand vision, style, and objectives" },
      { step: 2, title: "Concept", description: "Mood boards, storyboards, and initial ideas" },
      { step: 3, title: "Creation", description: "Craft visuals with attention to detail" },
      { step: 4, title: "Refinement", description: "Iterate based on feedback until perfect" },
    ],
    stats: [
      { label: "Videos Edited", value: "200+" },
      { label: "Brands Designed", value: "50+" },
      { label: "Views Generated", value: "5M+" },
      { label: "Years Experience", value: "4+" },
    ],
    email: "Mahmedkhan.personal@gmail.com",
    linkedin: "https://www.linkedin.com/in/ahmedvideoeditor/",
    twitter: "https://x.com/Ahmed_khan_ae",
    image: "/placeholder.svg",
    gradient: "from-purple-400 via-fuchsia-500 to-pink-500",
    glowColor: "shadow-[0_0_60px_-10px_hsl(280_100%_60%/0.5)]",
    iconBg: "bg-gradient-to-br from-purple-400 to-pink-500",
    initials: "MAK",
  },
  {
    id: "kamran-khan",
    name: "Kamran Khan",
    role: "Data Analyst",
    tagline: "Turning data into decisions",
    shortBio: "Transforming raw data into actionable business insights.",
    layoutVariant: "data",
    fullBio: "I specialize in data analysis and visualization, helping businesses make informed decisions through data-driven insights. From collecting and cleaning data to building comprehensive dashboards and reports, I turn complex datasets into clear, actionable strategies. My expertise spans statistical analysis, predictive modeling, and business intelligence tools.",
    skills: ["Data Analysis", "SQL", "Python", "Data Visualization", "Excel", "Business Intelligence"],
    services: [
      { title: "Data Analytics", description: "Extract insights from your business data" },
      { title: "Dashboard Design", description: "Interactive visualizations for decision-making" },
      { title: "Predictive Modeling", description: "Forecast trends and anticipate outcomes" },
      { title: "Process Automation", description: "Streamline reporting and data workflows" },
    ],
    process: [
      { step: 1, title: "Data Collection", description: "Gather and consolidate data sources" },
      { step: 2, title: "Analysis", description: "Clean, process, and analyze datasets" },
      { step: 3, title: "Visualization", description: "Create compelling visual narratives" },
      { step: 4, title: "Insights", description: "Deliver actionable recommendations" },
    ],
    stats: [
      { label: "Reports Created", value: "300+" },
      { label: "Data Points Analyzed", value: "10M+" },
      { label: "Accuracy Rate", value: "99%" },
      { label: "Cost Savings Found", value: "$2M+" },
    ],
    email: "kamrankhankakar000@gmail.com",
    linkedin: "https://www.linkedin.com/in/kamran-kakar-581043376",
    twitter: "https://x.com/kamrankakar07",
    image: "/placeholder.svg",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    glowColor: "shadow-[0_0_60px_-10px_hsl(160_100%_50%/0.5)]",
    iconBg: "bg-gradient-to-br from-green-400 to-teal-600",
  },
  {
    id: "muhammad-altaf",
    name: "Muhammad Altaf",
    role: "AI & Software Engineer",
    tagline: "Building intelligence into everything",
    shortBio: "Building intelligent solutions with cutting-edge AI technology.",
    layoutVariant: "futuristic",
    fullBio: "I'm an AI and Software Engineer specializing in developing intelligent applications and scalable software solutions. From machine learning models to full-stack applications, I create technology that solves real-world problems. My expertise spans AI/ML development, backend systems, and building robust software architectures that power modern businesses.",
    skills: ["Artificial Intelligence", "Machine Learning", "Python", "Software Architecture", "Deep Learning", "API Development"],
    services: [
      { title: "AI Solutions", description: "Custom AI/ML models for your specific needs" },
      { title: "Intelligent Automation", description: "Automate complex processes with AI" },
      { title: "Software Development", description: "Scalable applications built to last" },
      { title: "AI Integration", description: "Add AI capabilities to existing systems" },
    ],
    process: [
      { step: 1, title: "Problem Definition", description: "Identify the right AI approach" },
      { step: 2, title: "Data Preparation", description: "Collect and prepare training data" },
      { step: 3, title: "Model Development", description: "Build and train AI models" },
      { step: 4, title: "Deployment", description: "Integrate and monitor in production" },
    ],
    stats: [
      { label: "AI Models Built", value: "40+" },
      { label: "Accuracy Achieved", value: "97%" },
      { label: "Processing Speed", value: "10x" },
      { label: "Automation Hours Saved", value: "5K+" },
    ],
    email: "altafbangulzai0009@gmail.com",
    linkedin: "https://www.linkedin.com/in/altaf-bangulzai-5972a522a",
    twitter: "https://x.com/AltafAl34900",
    image: "/placeholder.svg",
    gradient: "from-rose-400 via-pink-500 to-red-500",
    glowColor: "shadow-[0_0_60px_-10px_hsl(350_100%_60%/0.5)]",
    iconBg: "bg-gradient-to-br from-rose-400 to-red-500",
  },
];

export const getTeamMember = (id: string): TeamMember | undefined => {
  return teamMembers.find((member) => member.id === id);
};
