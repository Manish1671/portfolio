export const profile = {
  name: "Manish Tiwari",
  firstName: "Manish",
  title: "CSE Student",
  roles: ["Full-Stack Developer", "Data Analytics Learner", "Problem Solver"],
  shortBio:
    "I build web applications, analytics dashboards, and computer science projects with a focus on usability, clarity, and real impact.",
  about:
    "I am a Computer Science and Engineering student at Lovely Professional University with interests in full-stack development, data analytics, and algorithmic problem-solving. I enjoy creating software that is practical, reliable, and thoughtful, whether it is a booking platform, a data dashboard, or a simulator built from core CS concepts.",
  email: "manishtiwari1671@gmail.com",
  phone: "+91 7264055610",
  github: "https://github.com/Manish1671",
  linkedin: "https://www.linkedin.com/in/manish-tiwari-1671",
  resumeLink: "/Manish-Tiwari-CV.pdf",
};

export const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vite.svg", language: "Vite" },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    language: "MongoDB",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    language: "Git",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    language: "Python",
  },
];

export const projects = [
  {
    id: "shramasa",
    Img: "/shramasa-preview.png",
    Title: "Shramasa — D2C E-Commerce Platform",
    Description:
      "Production-grade full-stack e-commerce platform for Shramasa Cosmetics, a premium Indian skincare and personal care startup. Built for a modern, scalable D2C shopping experience.",
    Link: "https://shramasa.in/",
    Github: "https://github.com/Manish1671/shramasa",
    TechStack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Docker"],
    Features: [
      "Full-stack D2C e-commerce platform with a modern, premium UI tailored for skincare products.",
      "Dockerized backend and frontend for consistent, production-ready deployment.",
      "Scalable architecture with PostgreSQL for reliable data management.",
      "Clean product catalog, cart flow, and checkout experience for seamless shopping.",
      "Live at shramasa.vercel.app — actively under development.",
    ],
  },
  {
    id: "skilllens",
    Img: "/skilllens-preview.png",
    Title: "SkillLens — Adaptive DSA Learning Platform",
    Description:
      "Evidence-based adaptive learning platform for DSA and technical interview preparation. Turns every practice attempt into immutable evidence, computes explainable skill mastery, and recommends the next best problem with deterministic reasons.",
    Link: "https://skilllens-manish1671-web.onrender.com/",
    Github: "https://github.com/Manish1671/SkillLens",
    TechStack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Docker"],
    Features: [
      "Evidence-based mastery model: every attempt creates an immutable EvidenceItem with recency-weighted scoring.",
      "Explainable recommendations — no ML or LLM; fully deterministic ranking with human-readable reason codes.",
      "Prerequisite-aware skill graph: advanced skills are only surfaced once foundational skills are solid.",
      "Placement readiness layer: aggregates DSA mastery across assessed skills for company-profile targeting.",
      "137+ backend tests and 15+ frontend tests. Deployable via Docker with Neon PostgreSQL on Render.",
    ],
  },
];

export const certificates = [
  {
    title: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    link: "",
  },
  {
    title: "Data Analytics Essentials: Power BI, Tableau",
    issuer: "LPU",
    date: "July 2025",
    link: "https://drive.google.com/file/d/1bwcwAhNsAHoyWK5BbilPKtvVcDHi1n8i/view?usp=sharing",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "April 2023",
    link: "https://drive.google.com/file/d/1-UKrRr0315vY2v_ZRYrqI681nw_2RyZp/view",
  },
  {
    title: "Alpha (DSA with Java)",
    issuer: "Apna College",
    date: "November 2024",
    link: "https://drive.google.com/file/d/1LlCFMNIlW5bx5o0qPJUcBnrP8GPLPHhR/view",
  },
];

export const education = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Since August 2023",
    location: "Phagwara, Punjab",
    score: "CGPA: 8.18",
  },
  {
    institution: "Dr. D. Y. Patil Arts, Commerce & Science College",
    degree: "Intermediate",
    period: "2021 - 2023",
    location: "Pune, Maharashtra",
    score: "Percentage: 87.83%",
  },
  {
    institution: "The Arhana's Rosary School",
    degree: "Matriculation",
    period: "2020 - 2021",
    location: "Pune, Maharashtra",
    score: "Percentage: 75.8%",
  },
];
