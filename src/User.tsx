import IBMSkill from "./assests/IBM.png";
import GOPROTOZ from "./assests/goprotoz.png";
import GoprotozLogo from "./assests/goprotoz-logo.webp";
import SUPERLEADS from "./assests/Superleads.png";
import DEGITECHAMOUR from "./assests/DegitechAmour.png";
import GOPROTOZ_SITE from "./assests/goprotoz-site.png";
import COVER_B from "./assests/CoverB.png";
import KONFIG_AI from "./assests/KonfigAI.png";
import SPARKLE_PLUS from "./assests/SparklePlus.png";
import UX_ANALYTICS from "./assests/UXAnalytics.png";
import HOTEL_HIVE from "./assests/HotelHive.png";
import PATHFINDING_VISUALIZER from "./assests/PathfindingVisualizer.png";
import PROFILE_PICTURE from "./assests/profile.png";
import ABHINAV_PICTURE from "./assests/image.jpg";
import UDAY_PICTURE from "./assests/uday.jpg";
import PLACEHOLDER_IMAGE from "./assests/profile_placeholder.png";

import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconWorld,
} from "@tabler/icons-react";
import {
  FaDraftingCompass,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";
const Info = {
  name: "Abhinav Mishra",
  stack: [
    "NITian",
    "Full Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Open Source Contributor",
  ],
  bio: "I'm a results-driven Full Stack Developer with strong expertise in building scalable web applications, AI-powered tools, and analytics platforms. Currently working at GoProtoz, I specialize in Next.js, Node.js, NestJS, PostgreSQL, and Kafka with a focus on performance, accessibility, and modern UX. I’ve led impactful projects like Superleads and UXAnalytics, contributed to SEO-optimized websites, and streamlined web performance for enterprise clients. Let’s build powerful digital experiences together!",
};

const ProjectInfo = [
  {
    title: "Goprotoz",
    desc: "Optimized and maintained Goprotoz and client websites, enhancing SEO performance and accessibility by 90%. Translated Figma designs into responsive web interfaces using Tailwind CSS and integrated Sanity CMS for scalable content delivery. Focused on performance, responsiveness, and seamless integration with tools like Zoho for lead management.",
    image: GOPROTOZ,
    live: true,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Sanity CMS",
      "Zoho Integration",
      "SEO",
      "Performance Optimization",
    ],
    link: "https://www.goprotoz.com",
    github: "",
  },
  {
    title: "Superleads",
    desc: "Architected a next-generation no-code platform enabling users to ideate, build, and deploy landing pages at scale using AI and visual editing. Features prompt-to-page AI generation for HTML/CSS, drag-and-drop editing with GrapeJS, and seamless 1-click deployment to AWS. Integrated built-in analytics to track user interaction, form submissions, and conversion metrics—empowering data-driven iteration and marketing decisions.",
    image: SUPERLEADS, // Replace with your image import
    live: true,
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Express.js",
      "GrapeJS",
      "AWS",
      "Vercel",
      "AI Automation",
      "Low-code Builder",
      "Custom Analytics",
    ],
    link: "https://superleads-io.netlify.app/",
    github: "",
  },

  {
    title: "DegitechAmour",
    desc: "Developed a fully responsive and accessible website focused on inclusive design for visually impaired users and optimized for search engines. Leveraged semantic HTML and Bootstrap for cross-device compatibility and screen reader support. Integrated Zoho Forms for lead collection and Sanity CMS for dynamic content updates, enabling maintainable and scalable architecture.",
    image: DEGITECHAMOUR,
    live: true,
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Sanity CMS",
      "Zoho Forms",
      "Accessibility",
      "SEO Optimization",
      "Responsive Design",
    ],
    link: "https://digitecharmour-website.vercel.app/",
    github: "",
  },
  {
    title: "LandingPage",
    desc: "Designed and developed a fully responsive company landing page to strengthen brand presence and drive lead generation. Built with Next.js and Tailwind CSS featuring smooth animations and modern UI for enhanced engagement. Integrated Zoho CRM for lead management and WhatsApp API for real-time prospect communication. Deployed via Netlify with custom domain management through GoDaddy, ensuring global availability and reliability.",
    image: GOPROTOZ_SITE, // Replace with your actual image reference
    live: true,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Zoho CRM",
      "WhatsApp API",
      "Netlify",
      "GoDaddy",
      "Responsive Design",
      "UI Animation",
    ],
    link: "https://goprotoz.co/",
    github: "",
  },
  {
    title: "CoverB",
    desc: "Designed and developed a professional, responsive website for Cover B to showcase their services and portfolio. Built using HTML, CSS, JavaScript, and Bootstrap, the site delivers a clean layout with modern visual design inspired by Figma mockups. Ensured cross-device compatibility, smooth navigation, and an engaging user interface tailored to the client's brand identity.",
    image: COVER_B, // Replace with imported image for the project
    live: true,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Figma",
      "Responsive Design",
      "Client Delivery",
    ],
    link: "https://cover-b-website.vercel.app/",
    github: "",
  },
  {
    title: "KonfigAI ",
    desc: "Developed a sleek, responsive website for Konfig AI using HTML, CSS, JavaScript, and Bootstrap. Focused on translating Figma designs into clean, accessible layouts that effectively communicate the client's AI services. The site ensures smooth navigation, fast load times, and an optimized user experience across all devices.",
    image: KONFIG_AI, // Replace with the image reference for Konfig AI
    live: true,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Figma",
      "Responsive Design",
      "Client Delivery",
    ],
    link: "https://konfig-ai.vercel.app/",
    github: "",
  },
  {
    title: "Sparkle Plus",
    desc: "Developed a dynamic, fully responsive website for Sparkle Realty, blending modern design with traditional aesthetics. Built with HTML, CSS, JavaScript, and Bootstrap, and integrated with Sanity CMS to empower real-time content updates. The site showcases the brand’s vision—combining world-class architecture, sustainability, and client-first experience—in a clean and accessible layout optimized across devices.",
    image: SPARKLE_PLUS, // Replace with actual image import
    live: true,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Sanity CMS",
      "Figma",
      "Responsive Design",
      "Client Delivery",
    ],
    link: "https://sparkle-plus.vercel.app/",
    github: "",
  },
  {
    title: "UXAnalytics",
    desc: "Architected a full-stack, microservices-based analytics platform using Next.js, NestJS, Kafka, and PostgreSQL. UXAnalytics enables session replays, user journey tracking, real-time event capture, and AI-driven UX insights. Designed as a lightweight yet powerful alternative to tools like Google Analytics and Mixpanel, it empowers teams to make data-backed UX decisions at scale.",
    image: UX_ANALYTICS, // Replace with your image reference
    live: true,
    technologies: [
      "Next.js",
      "NestJS",
      "Kafka",
      "PostgreSQL",
      "Microservices",
      "Session Replay",
      "Event Tracking",
      "AI Insights",
    ],
    link: "https://ux-analytics-frontend.vercel.app/",
    github: "",
  },
  {
    title: "HotelHive",
    desc: "Built a full-stack food ordering application with secure user authentication, order history, and real-time admin control. Developed using Next.js, Tailwind CSS, and MongoDB for modern performance and scalability. Integrated Stripe for secure payments and AWS S3 for image uploads. Admins can manage users, orders, categories, and menu items via a dedicated dashboard.",
    image: HOTEL_HIVE, // Replace with actual image import
    live: true,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "AWS S3",
      "User Auth",
      "Admin Dashboard",
    ],
    link: "https://hotel-hive.vercel.app/",
    github: "https://github.com/abhi9ji01/hotel-hive",
  },
  {
    title: "Visualizer",
    desc: "Developed an interactive pathfinding visualizer that lets users set start/end points, place obstacles, and watch how algorithms like BFS, DFS, Bidirectional BFS, Dijkstra’s, and A* find the optimal path. Built with React.js and Tailwind CSS, the app focuses on intuitive UI, responsive design, and animated algorithmic exploration to enhance learning through visualization.",
    image: PATHFINDING_VISUALIZER, // Replace with actual image import
    live: true,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "BFS",
      "DFS",
      "Bidirectional BFS",
      "Dijkstra’s",
      "A*",
      "Responsive Design",
      "Animation",
    ],
    link: "https://pathfinding-visulizer.vercel.app/",
    github: "https://github.com/abhi9ji01/pathfinding-visulizer",
  },
];

const TestimonialInfo = [
    {
    desc: "Amazing experience working with this guy really appreciated.",
    image: UDAY_PICTURE,
    name: "Uday Shankar D.",
    stars: 5,
    designation: "CEO & Founder of GoProtoz",
  },
    {
    desc: "Working with this team has been a game-changer. They delivered on time, exceeded expectations, and provided support even after completion.",
    image: PLACEHOLDER_IMAGE,
    name: "Rahul YADAV",
    stars: 5,
    designation: "Founder of Dcrayons",
  },
    {
    desc: "They take every project seriously, treating it as if it were their own. The level of dedication and attention to detail is unmatched",
    image: PLACEHOLDER_IMAGE,
    name: "Inshal Tabresh Alam",
    stars: 5,
    designation: "Founder & CEO, Digitrix",
  },
]

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React JS",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node JS",
      "Express JS",
      "Nest.js",
      "Firebase",
      "AWS",
      "MySQL",
      "PostgresSQL",
      "MongoDB",
    ],
  },
  {
    title: "Languages",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Github",
      "VS Code",
      "Figma",
      "Docker",
      "Postman",
      "MongoDB Compass",
    ],
  },
];

const socialLinks = [
  { link: "https://www.linkedin.com/in/abhi9ji01", icon: IconBrandLinkedin },
  { link: "https://github.com/abhi9ji01", icon: IconBrandGithub },
  { link: "https://www.geeksforgeeks.org/user/abhi9ji01", icon: IconWorld },
  { link: "https://leetcode.com/u/abhi9ji01", icon: IconBrandLeetcode },
  // { link: "https://www.geeksforgeeks.org/user/abhi9m18", icon: IconBrandInstagram },
];

const ExperienceInfo = [
  {
    role: "Software Developer",
    company: "Goprotoz UI UX Design Agency",
    image: GoprotozLogo,
    date: "August 2024 – Present",
    desc: "Led development of AI-powered no-code tools and analytics platforms, including a landing page builder with GrapeJS and an enterprise-grade UX analytics system using Next.js, NestJS, Kafka, and PostgreSQL—boosting user engagement and positioning the company competitively against tools like Mixpanel and Google Analytics. Optimized and maintained Goprotoz and client websites, enhancing SEO performance and accessibility by 90%, translated Figma designs into responsive web interfaces using Tailwind CSS and integrated Sanity CMS for scalable content delivery.",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "NestJS",
      "Kafka",
      "PostgreSQL",
      "GrapeJS",
      "Tailwind CSS",
      "Sanity CMS",
      "SEO",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "IBM Internship",
    image: IBMSkill,
    date: "June 2024 – August 2024",
    desc: "Built Share Your Food, a donation-based web app using HTML, CSS, and JavaScript to improve surplus food distribution; enhanced accessibility and performance, leading to a 75% increase in successful donations across underserved regions.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Accessibility",
      "Frontend Development",
    ],
  },
  {
    role: "Full-stack Developer Intern",
    company: "Singaji Software Solutions",
    image: GoprotozLogo, // Replace with actual variable name if you have one
    date: "January 2024 – June 2024",
    desc: "Completed a 6-month full-stack development internship focused on building scalable web applications and interactive tools using React.js, Node.js, MongoDB, and REST APIs in an agile, team-based environment—gaining strong hands-on experience in modern web architecture and collaborative development workflows.",
    skills: [
      "React.js",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Agile",
      "Full-stack Development",
    ],
  },
];
const EducationInfo = [
  {
    role: "Master of Computer Applications (MCA)",
    company:
      "Maulana Azad National Institute of Technology (NIT) Bhopal, Madhya Pradesh",
    // image: NITLogo, // Replace with actual NIT logo if available
    date: "2024",
    desc: "Graduated with an 8.28 CGPA, gaining deep expertise in software engineering, data structures, algorithms, and system design. Strengthened full-stack development skills through projects and internships.",
    skills: [
      "Data Structures",
      "Operating Systems",
      "System Design",
      "DBMS",
      "Web Development",
    ],
  },
  {
    role: "Bachelor of Science (B.Sc.) ",
    company: "Allahabad State University, Prayagraj, Uttar Pradesh",
    // image: ASULogo, // Replace with actual university logo if available
    date: "2020",
    desc: "Focused on core sciences—Physics, Chemistry, and Mathematics—developing a strong foundation in analytical thinking, logical reasoning, and problem-solving, which later translated effectively into software development.",
    skills: ["Physics", "Chemistry", "Mathematics"],
  },
];

const ServiceInfo = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "Building fast, scalable, and SEO-optimized websites using Next.js, Tailwind CSS, and Sanity CMS. Focused on performance, accessibility, and responsive design.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "UI/UX Design",
    desc: "Designing intuitive and user-friendly interfaces by transforming Figma prototypes into pixel-perfect frontends that enhance user engagement and satisfaction.",
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    desc: "Developing full-stack web applications with React, Node.js, NestJS, and PostgreSQL. Prioritizing functionality, security, and smooth user experience across devices.",
  },
];

const Slugs = [
  "typescript",
  "spring",
  "javascript",
  "dart",
  "java",
  "python",
  "react",
  "angular",
  "flutter",
  "android",
  "html5",
  "css3",
  "springboot",
  "mongodb",
  "selenium",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
export {
  Info,
  ProjectInfo,
  socialLinks,
  TestimonialInfo,
  SkillInfo,
  ExperienceInfo,
  EducationInfo,
  ServiceInfo,
  Slugs,
};
