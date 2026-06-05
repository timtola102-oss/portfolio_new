import { image } from "framer-motion/client";

export const USER_PROFILE = {
  name: "Tola Tim",
  title: "Web Development",
  subTitle: "Building resilient digital products with elegant architectures.",
  bio: "I am a Software Engineering student passionate about full-stack web development. I enjoy building modern applications using JavaScript, TypeScript, React, Vue.js, Node.js, Express, Laravel, and MySQL. Through academic and personal projects, I have developed experience in designing responsive user interfaces, building RESTful APIs, and managing databases. I am continuously learning new technologies and seeking opportunities to grow as a software developer.",
  resumeUrl: "#",
  avatarUrl: "src/images/photo_2026-05-23_19-42-21.jpg",
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/tolatim", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/tola-tim-067b6339a", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Email", url: "mailto:timtola102@gmail.com", icon: "email" }
];

export const SKILL_CATEGORIES = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "Vue js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ]
  },
  {
    name: "Backend & Cloud",
    skills: [
      { name: "Node.js (Express/NestJS)", level: 88 },
      { name: "PHP (Laravel)", level: 88 },
      { name: "Python (Django/Flask)", level: 88 },
      { name: "PostgreSQL & MongoDB", level: 85 },
      { name: "Docker & Kubernetes", level: 75 },
      { name: "AWS (S3, Lambda, EC2)", level: 80 },
      { name: "RESTful API Design", level: 92 }
    ]
  },
  {
    name: "Tools & Methodologies",
    skills: [
      { name: "Git & GitHub Actions", level: 90 },
      { name: "Agile / Scrum", level: 85 },
      { name: "CI/CD Pipelines", level: 82 },
      { name: "Jest / Cypress Testing", level: 80 }
    ]
  }
];

export const ROADMAP = [
  {
    stage: "Start",
    year: "2025",
    description: "Begin computer science journey at school"
  },
  {
    stage: "Term 1",
    year: "2025",
    description: "Logic, basic programming, MS Office, UI design, typing skills",
    tags: ["Logic", "HTML Basics", "UI Design"]
  },
  {
    stage: "Term 2",
    year: "2025",
    description: "Algorithms, web design, Git, programming fundamentals",
    tags: ["JavaScript", "Git", "Web Design"]
  },
  {
    stage: "Term 3",
    year: "2025 - 2026",
    description: "Software development, PHP, database, Node.js, OOP introduction",
    tags: ["Node.js", "PHP", "MySQL", "OOP"]
  },
  {
    stage: "Term 4",
    year: "2026",
    description: "Advanced OOP, Laravel, Vue.js, full-stack practice",
    tags: ["Laravel", "Vue.js", "OOP"]
  },
  {
    stage: "Internship",
    year: "2026",
    description: "Work experience at company, apply skills in real projects",
  },
  {
    stage: "State Exam",
    year: "2026",
    description: "Final exams: OOP, Database, Programming Language, English",
  },
  {
    stage: "Finish",
    year: "2026",
    description: "Complete program and ready for professional career path",
  }
];


export const PROJECTS = [
  {
    id: 1,
    title: "Alumni Media (VC1 - Virtual Company)",
    role: "Scrum Master & Full-Stack Developer",
    period: "February 15, 2026 - March 16, 2026",
    category: "Web App",
    image:"src/images/project/photo_2026-06-05_07-26-47.jpg",
    description:
      "Worked in a team-based school project to develop an Alumni Media Platform. Served as Scrum Master, managing Agile workflow, sprint planning, task distribution, and team coordination.",
    longDescription:
      "Led Agile processes including sprint planning, task distribution, and team coordination to ensure smooth project delivery.\n\nContributed as a Full-Stack Developer by building backend features using Laravel (API), frontend using Vue.js with state management, and implementing real-time communication using Node.js WebSocket.\n\nParticipated in coding, debugging, and system integration to deliver a functional collaborative web application.",
    tags: [
      "Laravel",
      "Vue.js",
      "Node.js",
      "WebSocket",
      "Full-Stack",
      "Scrum",
      "Agile",
    ],
    githubUrl: "https://github.com/tolatim/Alumni-Media---VC1---G15.git",
  },

  {
    id: 2,
    title: "Expen Tracker (JavaScript)",
    role: "Project Manager & Developer",
    period: "December 22, 2025 - January 5, 2026",
    category: "Web App",
     image:"src/images/project/photo_2026-06-05_07-45-20.jpg",
    description:
      "Developed an Expense Tracker web application using JavaScript and LocalStorage with full CRUD functionality.",
    longDescription:
      "Led and developed an Expense Tracker web application using JavaScript and LocalStorage for data persistence.\n\nAs Project Manager, handled task planning, workflow organization, and team coordination to ensure timely project completion.\n\nAs Developer, implemented core features including adding, editing, deleting, and tracking expenses with persistent local storage in the browser.",
    tags: ["JavaScript", "HTML", "CSS", "LocalStorage", "Project Management"],
    githubUrl: "https://github.com/Darinhil/Expense-Tracker-.git",
  },

  {
    id: 3,
    title: "Software Deployment",
    role: "DevOps",
    period: "December 15, 2025 - December 21, 2025",
    category: "Deployment Project",
    image:"src/images/project/photo_2025-12-12_19-58-17.jpg",
    description:
      "Assisted in deploying web applications built with Laravel and Node.js for school projects.",
    longDescription:
      "Configured deployment environments and ensured successful application launch for testing and demonstration.\n\nPrepared technical documentation, including setup guides and deployment instructions to support future maintenance and scalability.",
    tags: ["DevOps", "Laravel", "Node.js", "Deployment"],
  },

  {
    id: 4,
    title: "Algorithms Project",
    role: "Full-Stack Developer",
    period: "October 20, 2025 - November 2, 2025",
    category: "Web App",
    image:"src/images/project/image.png",
    description:
      "Developed a web-based Student Performance System to track and analyze student scores across different time periods.",
    longDescription:
      "Built a Student Performance System designed to track and analyze student scores by month, term, and year.\n\nImplemented backend APIs using Python, managed data storage with MySQL, and developed frontend interfaces using HTML and CSS.\n\nDesigned and implemented core logic for score calculation, data processing, and structured database design for efficient academic data management.",
    tags: ["Python", "MySQL", "HTML", "CSS", "Full-Stack"],
  },
];