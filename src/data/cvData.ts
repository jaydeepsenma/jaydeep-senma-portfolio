export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  liveUrl?: string;
  category: string;
  summary: string;
  responsibilities: string[];
  problem: string;
  solution: string;
  myContribution: string[];
  technologies: string[];
  keyFeatures: string[];
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  location: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
  details: string;
}

export const cvData = {
  personalInfo: {
    name: "Jaydeep Senma",
    title: "Sr. PHP / Laravel Developer",
    subtitle: "Building Scalable Web Applications & Robust Cloud Backend Systems",
    email: "rawatjay532@gmail.com",
    phone: "7359258027",
    formattedPhone: "+91 7359258027",
    location: "Rawatvas, Ladjipura, Sidhpur, Patan - 384151, Gujarat, India",
    objective: "To work in a challenging environment where I can apply my software development skills, contribute to innovative projects, and continuously grow as a Full Stack Developer while mastering modern technologies like AI, React, and cloud computing.",
    summary: "Senior PHP & Laravel Engineer with over 3 years of hands-on experience designing, developing, and deploying high-performance web applications, complex admin portals, and scalable RESTful APIs. Adept at database query optimization, AWS infrastructure management, Filament framework customization, third-party API integrations, and leading development tasks with multidisciplinary teams.",
    yearsExperience: "3+",
    languagesSpoken: [
      { name: "Gujarati", proficiency: "Native / Fluent" },
      { name: "Hindi", proficiency: "Fluent" },
      { name: "English", proficiency: "Professional Working" }
    ]
  },

  stats: [
    { label: "Years of Experience", value: "3+", suffix: "" },
    { label: "Production Projects Delivered", value: "3", suffix: "+" },
    { label: "Core Technologies", value: "10", suffix: "+" },
    { label: "Academic Score (B.Tech)", value: "80", suffix: "%" }
  ],

  services: [
    {
      id: "backend",
      title: "Backend & Laravel Architecture",
      icon: "Server",
      description: "Designing robust, scalable backend architectures utilizing PHP 8+ and Laravel Framework with clean, maintainable code structures."
    },
    {
      id: "apis",
      title: "RESTful API Engineering",
      icon: "Webhook",
      description: "Developing high-performance, secure REST APIs for web and mobile applications with query optimization and authentication."
    },
    {
      id: "admin",
      title: "Admin Panel Development",
      icon: "LayoutDashboard",
      description: "Building powerful administrative controls and complex dashboards using Filament Framework, custom CRUD modules, and fine-grained permissions."
    },
    {
      id: "database",
      title: "Database Design & Optimization",
      icon: "Database",
      description: "Architecting efficient MySQL database schemas, indexing strategies, relationship mapping, and SQL query performance tuning."
    },
    {
      id: "cloud",
      title: "AWS & Cloud Integration",
      icon: "Cloud",
      description: "Managing cloud storage and assets via AWS S3, server configuration, environment provisioning, and cloud deployment pipelines."
    },
    {
      id: "leadership",
      title: "Technical Leadership & Estimation",
      icon: "Users",
      description: "Collaborating directly with clients, performing precise project task estimations, coordinating design tasks, and mentoring junior developers."
    }
  ],

  skillsCategories: [
    {
      title: "Backend Engineering",
      iconName: "Server",
      skills: [
        { name: "PHP", level: "Expert", highlight: true },
        { name: "Laravel Framework", level: "Expert", highlight: true },
        { name: "Filament Framework", level: "Advanced", highlight: true },
        { name: "RESTful APIs", level: "Expert", highlight: true },
        { name: "CRUD Architectures", level: "Expert" }
      ]
    },
    {
      title: "Database & Storage",
      iconName: "Database",
      skills: [
        { name: "MySQL", level: "Advanced", highlight: true },
        { name: "Query Optimization", level: "Advanced", highlight: true },
        { name: "Database Schema Design", level: "Advanced" },
        { name: "Indexing & Tuning", level: "Advanced" }
      ]
    },
    {
      title: "Cloud & DevOps",
      iconName: "Cloud",
      skills: [
        { name: "AWS S3", level: "Advanced", highlight: true },
        { name: "AWS Management", level: "Intermediate", highlight: true },
        { name: "Git Version Control", level: "Advanced", highlight: true }
      ]
    },
    {
      title: "Frontend Development",
      iconName: "Code2",
      skills: [
        { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
        { name: "jQuery", level: "Advanced" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: "horizoncore",
      role: "Sr PHP / Laravel Developer",
      company: "Horizoncore Infosoft Private Limited",
      period: "01/05/2023 - Present",
      startDate: "2023-05-01",
      endDate: "Present",
      isCurrent: true,
      location: "Gujarat, India",
      summary: "Serving as Senior Backend Engineer leading PHP/Laravel development, client requirement analysis, API architecture, AWS cloud storage management, and team task allocation.",
      responsibilities: [
        "Architect and implement custom web application modules, RESTful API endpoints, and admin panels for clients across education, web portals, and local discovery platforms.",
        "Utilize Laravel and Filament framework to build scalable admin control systems for managing users, schools, universities, businesses, artists, and events.",
        "Perform MySQL query optimizations, database configuration, indexing, and storage integration with AWS S3 for fast media streaming and asset retrieval.",
        "Conduct direct client technical communication, analyze project scope, break down tasks, provide accurate time estimations, and assign design/frontend deliverables.",
        "Collaborate closely with cross-functional mobile application developers to deliver real-time backend API integrations.",
        "Mentored and trained new freshers in web development standard practices, Git workflows, and Laravel architecture."
      ],
      achievements: [
        "Successfully trained and onboarded new freshers in full-stack web development.",
        "Engineered backend REST APIs and admin portals for multiple live enterprise platforms (Joinincampus, Jeduka, Glimsp).",
        "Improved system performance across legacy queries through MySQL indexing and query refactoring."
      ],
      technologies: ["PHP", "Laravel", "Filament", "MySQL", "AWS S3", "REST APIs", "JavaScript", "jQuery", "Git"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "joinincampus",
      name: "Joinincampus",
      subtitle: "Educational Campus & Institution Management Platform",
      liveUrl: "https://www.joinincampus.com",
      category: "Educational Portal",
      summary: "Comprehensive web portal connecting students, employees, schools, and universities into an integrated digital campus ecosystem.",
      responsibilities: [
        "Conducted client technical requirement gathering and scope clarification.",
        "Assigned and supervised design task execution with UI/UX designers.",
        "Designed and implemented admin panel functionality for managing employee, school, university, and student modules."
      ],
      problem: "Educational institutions and campus stakeholders lacked a unified portal to manage multi-tiered entity roles (employees, schools, universities) with granular administration controls.",
      solution: "Engineered a centralized Laravel platform with a rich administrative panel allowing dynamic creation, role assignment, and management of educational entities.",
      myContribution: [
        "Architected core administrative modules for employee, school, and university entities.",
        "Established structured client communication workflows and task estimations.",
        "Assigned design and frontend task specifications to ensure seamless UI integration."
      ],
      technologies: ["PHP", "Laravel", "MySQL", "HTML5/CSS3", "JavaScript", "jQuery", "REST APIs"],
      keyFeatures: [
        "Multi-tenant style admin panel for schools and universities",
        "Employee role and credential allocation module",
        "Dynamic content publishing and institutional profiles",
        "Client-driven dynamic workflow customizer"
      ],
      featured: true
    },
    {
      id: "jeduka",
      name: "Jeduka",
      subtitle: "Global Education & Study Abroad Information Hub",
      liveUrl: "https://www.jeduka.com",
      category: "Web Platform & Portal",
      summary: "Large-scale educational portal providing extensive information on universities, courses, study destinations, and application guidance.",
      responsibilities: [
        "Handled direct technical client communications and scope discussions.",
        "Calculated precise task estimates and coordinated development task assignments.",
        "Developed custom CRUD functionality and optimized frontend data visualization algorithms."
      ],
      problem: "Handling high volumes of structured university and course data required complex relational mapping and rapid content rendering for end users.",
      solution: "Developed streamlined CRUD workflows in Laravel to manage massive datasets and display interactive, filterable education choices on the user-facing web portal.",
      myContribution: [
        "Built modular CRUD engines for course data, country profiles, and university listings.",
        "Configured efficient data fetch pipelines to display dynamic dataset views on site frontend.",
        "Managed development task allocation and estimation timelines."
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "jQuery", "Git", "REST APIs"],
      keyFeatures: [
        "Comprehensive university & course database explorer",
        "Custom CRUD management suite for content editors",
        "Fast response data rendering for search filters",
        "Interactive portal layout with jQuery dynamic UI elements"
      ],
      featured: true
    },
    {
      id: "glimsp",
      name: "Glimsp",
      subtitle: "Real-Time Local Discovery & Event Engagement Platform",
      category: "Real-Time Platform & Mobile Backend",
      summary: "Innovative local discovery platform designed to connect users in real-time with local businesses, independent artists, trending events, and venue highlights.",
      responsibilities: [
        "Engineered admin panel to manage complex business, artist, and event modules.",
        "Architected and implemented high-concurrency RESTful APIs for mobile application consumption.",
        "Configured and managed AWS S3 cloud storage for high-resolution media uploads.",
        "Executed MySQL query optimizations and database configuration tuning.",
        "Coordinated closely with mobile application developers for API contracts and testing."
      ],
      problem: "Real-time location discovery apps demand low-latency API response times, optimized database queries, and seamless media upload handling to AWS cloud infrastructure.",
      solution: "Designed a lightweight, highly optimized Laravel API backend integrated with AWS S3 asset delivery and custom MySQL database indexing for rapid query execution.",
      myContribution: [
        "Developed end-to-end REST APIs consumed by Android and iOS mobile client applications.",
        "Configured AWS S3 bucket policies, IAM credentials, and automated image asset upload workflows.",
        "Refactored heavy SQL queries and established indexing protocols to reduce API response latency.",
        "Built administrative modules for auditing business listings, artist portfolios, and event schedules."
      ],
      technologies: ["PHP", "Laravel", "Filament Framework", "AWS S3", "AWS Mgmt", "MySQL", "REST APIs", "Git"],
      keyFeatures: [
        "Real-time local event discovery REST APIs",
        "AWS S3 integrated media management pipeline",
        "Artist & business profile verification modules",
        "Sub-second optimized database queries for location filtering",
        "Filament framework administrative dashboard"
      ],
      featured: true
    }
  ] as ProjectItem[],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) - Information Technology",
      institution: "Sankalchand Patel University",
      year: "2023",
      score: "80%",
      details: "Comprehensive undergraduate engineering degree focused on software development, data structures, database systems, web technologies, and computer networking."
    }
  ] as EducationItem[]
};
