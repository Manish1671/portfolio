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
    id: "finance-powerbi-dashboard",
    Img: "/finance-dashboard-preview.svg",
    imageFit: "contain",
    Title: "Finance Dashboard — Power BI",
    Description:
      "Reduced financial reporting time through an interactive Power BI dashboard with dynamic DAX measures, KPI cards, and month-on-month trend analysis covering 2021–2024.",
    Link: "https://www.linkedin.com/feed/update/urn:li:activity:7405942246186946560/",
    Github: "Private",
    TechStack: ["Power BI", "Excel", "DAX"],
    Features: [
      "KPI cards for Income, Expenses, and Savings with dynamic year and month filtering.",
      "Dynamic line chart with metric switching using SWITCH and SELECTEDVALUE DAX functions.",
      "Month-on-month growth analysis and previous-month comparisons using DATEADD.",
      "Category-wise expense breakdown and savings allocation visualizations.",
      "DAX measures for Expense Percentage, growth analysis, and interactive drill-down reporting.",
    ],
  },
  {
    id: "appointment-booking-platform",
    Img: "/Meta.png",
    Title: "Medical Appointment Booking Platform",
    Description:
      "Eliminated manual booking friction with a role-based full-stack platform serving patients, doctors, and admins — integrating real-time scheduling, Cloudinary medical image storage, and online payment.",
    Link: "https://mednova-frontend.onrender.com/",
    Github: "Private",
    TechStack: ["React", "Node.js", "MongoDB", "Cloudinary"],
    Features: [
      "Role-based dashboards for patients, doctors, and administrators with separate access flows.",
      "MongoDB and Cloudinary integration for secure data storage and medical image management.",
      "Online payment and order verification for reliable, auditable transactions.",
      "Unified workflow that cut manual booking and medicine ordering steps significantly.",
    ],
  },
  {
    id: "advanced-disk-scheduling-simulator",
    Img: "/disk-scheduling-preview.svg",
    imageFit: "contain",
    Title: "Disk Scheduling Algorithm Simulator",
    Description:
      "Visualized and compared 6 OS-level disk scheduling algorithms in real time — with seek-movement charts, performance metrics, and one-click PDF/CSV report export.",
    Link: "https://github.com/Manish1671/Advanced-Disk-Scheduling-Simulator",
    Github: "https://github.com/Manish1671/Advanced-Disk-Scheduling-Simulator",
    TechStack: ["Python", "Tkinter", "Matplotlib"],
    Features: [
      "Implemented FCFS, SSTF, SCAN, C-SCAN, LOOK, and C-LOOK algorithms side by side.",
      "Interactive Tkinter GUI with comparison mode and random disk request generation.",
      "Real-time Matplotlib seek-movement chart and performance metrics display.",
      "PDF and CSV report export for academic and analytical use.",
    ],
  },
  {
    id: "ev-population-dashboard",
    Img: "/ev-dashboard-preview.svg",
    imageFit: "contain",
    Title: "Electric Vehicle Population Dashboard",
    Description:
      "Extracted insights from 230,000+ EV records to surface manufacturer dominance, adoption growth, and CAFV eligibility trends across Power BI, Tableau, and Excel.",
    Link: "https://www.linkedin.com/posts/manish-tiwari1671_datascience-electricvehicles-dashboard-activity-7367775963100663808-ei5e",
    Github: "Private",
    TechStack: ["Excel", "Power BI", "Tableau"],
    Features: [
      "Data-driven dashboard built with Excel, Power Query, and pivot charts.",
      "Analyzed EV trends, geographic distribution, and manufacturer dominance from a 230k+ record dataset.",
      "KPIs, growth patterns, and market insights in a clean, user-friendly layout.",
    ],
  },
];

export const certificates = [
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
