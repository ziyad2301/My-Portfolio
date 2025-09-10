// src/constants/index.js

const projects = [
  {
    title: "BeondWork - CA Task Management",
    description: "A comprehensive task management platform for Chartered Accountancy firms, designed to streamline TDR filing and other critical CA-related workflows. I led major development efforts on this project, building out core backend logic and functionality.",
    image: "/assets/beondwork_image.jpg",
    tags: ["Django", "Python", "Bootstrap", "HTML/CSS", "Backend"],
    live_link: "https://beondwork.com/",
    source_link: null,
  },
  {
    title: "BeniPrint - Custom Apparel Ecommerce",
    description: "A full-stack ecommerce application for a clothing brand, featuring intricate customization options for product variants, materials, and printing. Built from the ground up to handle complex user selections and a dynamic shopping experience.",
    image: "/assets/beniprint_image.jpg",
    tags: ["Django", "Ecommerce", "Bootstrap", "JavaScript", "Full-Stack"],
    live_link: "https://beniprint.store/",
    source_link: null,
  },
  {
    title: "DeltaFour V2 - LOTO Safety System",
    description: "Contributed to the second version of an industrial Lockout-Tagout (LOTO) system for ensuring employee safety in large factories. My work involved developing high-performance REST APIs with both FastAPI and Django REST Framework, and implementing frontend components in React.",
    image: "/assets/deltafour_image.jpg",
    tags: ["FastAPI", "Django REST", "React", "Industrial IoT", "API Design"],
    live_link: null,
    source_link: null,
  },
  {
    title: "Chitza - Mobile Billing App",
    description: "A multi-tenant mobile billing application built with Ionic Vue. I was responsible for implementing core business logic, fixing critical bugs, and developing additional features like custom report generation.",
    image: "/assets/chitza_image.jpg",
    tags: ["Ionic Vue", "Mobile App", "Multi-Tenancy", "Vue.js"],
    live_link: null,
    source_link: null,
  },
  {
    title: "TargoLegal - Company Filing Platform",
    description: "A web platform designed to simplify legal and compliance filings for companies, such as GST registration and Form DPT-3. Developed using a classic Django and Bootstrap stack to provide a reliable and straightforward user experience.",
    image: "/assets/targolegal_image.jpg",
    tags: ["Django", "Bootstrap", "LegalTech", "Full-Stack"],
    live_link: "https://www.targolegal.com/",
    source_link: null,
  },
  {
    title: "LatePoint Website Clone",
    description: "A work-in-progress, pixel-perfect frontend clone of the sophisticated LatePoint booking website. This project serves as a demonstration of my ability to rapidly build complex, modern user interfaces using Vue.js and Tailwind CSS.",
    image: "/assets/latepoint_image.jpg",
    tags: ["Vue.js", "Tailwind CSS", "Frontend", "UI/UX"],
    live_link: null,
    source_link: null,
  },
  {
    title: "BeondAudit - UI Enhancements",
    description: "Assisted on the BeondAudit platform by implementing various UI enhancements and addressing small module corrections. This work involved refining the user experience within the existing Django and Bootstrap framework.",
    image: "/assets/beondaudit_image.jpg",
    tags: ["Django", "Bootstrap", "UI/UX", "Frontend"],
    live_link: "https://beondaudit.com/",
    source_link: null,
  },
];

const experiences = [
  // --- NEW INTERNSHIP ADDED HERE ---
  {
    title: "MERN Stack Intern",
    company_name: "Codekaro",
    icon: "/assets/codekaro-logo.jpeg", // You'll need to add a logo for this
    iconBg: "#272727", // A neutral dark background for the logo
    date: "Jun 2023 - Nov 2023",
    points: [
      "Completed an intensive 6-month internship focused on full-stack development with the MERN (MongoDB, Express.js, React, Node.js) stack.",
      "Developed RESTful APIs with Node.js and Express, and built responsive, interactive UIs with React.",
      "Gained hands-on experience with NoSQL databases (MongoDB) and schema design.",
      "Collaborated in an agile environment, utilizing Git for version control and participating in code reviews to ensure quality and best practices.",
    ],
  },
  // --- YOUR CURRENT JOB ---
  {
    title: "Full-Stack Developer",
    company_name: "DEIENAMI Private Limited",
    icon: "/assets/company-logo.jpeg",
    iconBg: "#1d1836",
    date: "Jan 2024 - Present",
    points: [
      "Spearheaded the development of full-stack features for diverse applications, from industrial safety systems (DeltaFour) to specialized CA task management platforms (BeondWork).",
      "Engineered robust backend systems using Django and FastAPI, designing RESTful APIs and optimizing database interactions to ensure performance and scalability.",
      "Translated complex UI/UX designs into pixel-perfect, responsive frontends using React, Vue.js, and Ionic, consistently delivering intuitive user experiences.",
      "Actively participated in the full software development lifecycle, from initial concept and requirements gathering through to deployment, maintenance, and iteration."
    ],
  },
];

export { projects, experiences };
