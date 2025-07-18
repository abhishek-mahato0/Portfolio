export const personalProjects = [
  {
    id: 1,
    title: "MySecond Teacher",
    description: [
      "Led frontend development of an e-learning platform serving over 1M+ users across South Asia.",
      "Built collaborative ebook editing and real-time annotation tools using WebSockets, Redux, and React.",
      "Ensured responsive and WCAG-compliant UI for seamless learning experience on all devices.",
      "Integrated REST APIs, content playback, and offline-first support for low-bandwidth regions."
    ],
    link: "https://mysecondteacher.com.np",
    gitLink: null,
    techStack: [
      "React.js",
      "Redux",
      "React Query",
      "Saga Middleware",
      "Bootstrap",
      "WebSockets",
      "TypeScript",
      "Jest",
      "CI/CD (GitHub Actions)"
    ],
    image: "/mst.png"
  },
  {
    id: 2,
    title: "HomeSchool Asia",
    description: [
      "Built and maintained a full-stack scalable homeschooling platform used by thousands of students in Asia.",
      "Implemented real-time features using Kafka and WebSockets for interactive classrooms and parent-teacher chats.",
      "Developed structured learning flows, diagnostic assessments, and progress tracking systems.",
      "Integrated secure backend using NestJS, PostgreSQL, and Redis for caching and performance."
    ],
    link: "https://homeschool.asia",
    gitLink: null,
    techStack: [
      "React",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Kafka",
      "Socket.IO",
      "SCSS Modules",
      "Redis",
      "Docker",
      "TypeScript"
    ],
    image: "/hsa.jpeg"
  },
  {
    id: 3,
    title: "Naxa Assessment System",
    description: [
      "Designed and developed a digital address tracking and spatial data management system.",
      "Enabled smart address search, GIS-based household mapping, and data analytics dashboard for municipalities.",
      "Used MapLibre GL + OpenLayers for high-performance geospatial rendering.",
      "Collaborated with cross-functional teams on data flow, mapping, and reporting logic."
    ],
    link: "https://assessment.naxa.com.np",
    gitLink: null,
    techStack: [
      "React",
      "Tailwind CSS",
      "React Query",
      "OpenLayers",
      "MapLibre GL",
      "Redux",
      "Framer Motion"
    ],
    image: "/assessment.png"
  },
  {
    id: 4,
    title: "Digital Metric Addressing",
    description: [
      "Contributed to a disaster response system collecting real-time geospatial survey data.",
      "Built dynamic survey forms with validation logic and integrated map-based data visualization.",
      "Used OpenLayers for plotting responses and enabling spatial insights for NGOs and municipalities.",
      "Implemented performance optimizations using lazy loading and memoized components."
    ],
    link: "https://dma-dev.naxa.com.np/dashboard",
    gitLink: null,
    techStack: [
      "React",
      "Tailwind CSS",
      "OpenLayers",
      "MapLibre GL",
      "React Query",
      "Jest",
      "Vite",
      "TypeScript"
    ],
    image: "/dmaps.png"
  },
  {
    id: 5,
    title: "License Appointment System",
    description: [
      "Built a full-stack license scheduling platform with real-time appointment slots and role-based access.",
      "Integrated secure authentication, admin dashboards, and audit logs using NextAuth and MongoDB.",
      "Implemented reusable UI components using Shadcn/UI and maintained accessibility standards.",
      "Deployed on Vercel with environment-based CI/CD pipelines and testing."
    ],
    link: "https://license-appointment-system.vercel.app/",
    gitLink: "https://github.com/abhishek-mahato0/license-appointment-system",
    techStack: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Shadcn/UI",
      "Redux Toolkit",
      "NextAuth.js",
      "Zod",
      "TypeScript",
      "Vercel"
    ],
    image: "/license.png"
  },
  {
    id: 6,
    title: "MERN E-commerce Website",
    description: [
      "Developed a full-featured MERN-based e-commerce app with user registration, cart, and admin panel.",
      "Built RESTful APIs with Express for order handling, product filtering, and secure payment simulation.",
      "Implemented Redux for efficient cart and product state management and optimized for mobile.",
      "Added route protection, JWT auth, and reusable hooks for clean architecture."
    ],
    link: "https://mern-helmart-website-client.vercel.app/",
    gitLink: "https://github.com/abhishek-mahato0/MERN-helmart-Website",
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "JWT Auth",
      "React Router",
      "Formik + Yup"
    ],
    image: "/helmet.png"
  }
];


export const companyProjects = [
  {
    id: 1,
    title: "MySecond Teacher",
    description:
      "Developed a resource-sharing system for educational materials access, an Ebook module for collaborative editing, and integrated scribble functionality for content annotation. Enabled real-time notifications and chat using socket technology, focusing on a user-friendly experience.",
    link: "https://mysecondteacher.com.np",
    techStack: [
      "Resource Sharing",
      "Ebook Module",
      "Sockets",
      "Notifications",
      "User Experience",
    ],
    image: "/mst.png",
  },
  {
    id: 2,
    title: "Naxa Assessment",
    description:
      "Created a disaster prevention website to collect data from affected regions via questionnaires, with predictive analytics to forecast potential disasters. Contributed to UI design and data management for accurate, timely project delivery.",
    link: "https://assessment.naxa.com.np",
    techStack: [
      "Optimisation",
      "Data Visualization",
      "React Query",
      "Tailwind CSS",
      "OpenLayers",
    ],
    image: "/assessment.png",
  },
  {
    id: 3,
    title: "Digital Metric Addressing System",
    description:
      "Designed a digital addressing system for municipal use, enabling efficient household tracking with features for data storage, retrieval, and visualization. Collaborated with stakeholders, refined functionalities, and ensured system reliability through testing.",
    link: "https://dma-dev.naxa.com.np/dashboard",
    techStack: [
      "Digital Addressing",
      "React Query",
      "Tailwind CSS",
      "MaplibreGL",
      "Jest",
    ],
    image: "/dmaps.png",
  },
];
