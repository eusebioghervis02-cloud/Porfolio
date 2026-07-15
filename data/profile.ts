export interface SocialLink {
  label: string;
  href: string;
  username: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  dates: string;
  details: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Profile {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  bio: string;
  profileImage: {
    src: string;
    alt: string;
  };
  socials: {
    github: SocialLink;
    linkedin: SocialLink;
  };
  skills: SkillGroup[];
  projects: Project[];
  resume: {
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: SkillGroup[];
    certifications: Certification[];
  };
  languages: string[];
}

export const profile: Profile = {
  name: "Eusebio Ghervis H.",
  initials: "EGH",
  role: "Information Technology Student",
  tagline: "Dedicated IT student building practical hardware, networking, and programming skills.",
  location: "Pandacan, Manila",
  email: "eusebio.ghervis02@gmail.com",
  bio: "Goal-oriented Information Technology student with strong problem-solving skills and a desire to apply classroom knowledge in practical work settings.",
  profileImage: {
    src: "/profile.jpg",
    alt: "Profile photo of Eusebio Ghervis H.",
  },
  socials: {
    github: {
      label: "GitHub",
      href: "https://github.com/eusebioghervis02-cloud",
      username: "username",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ghervis-eusebio-783090343?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      username: "username",
    },
  },
  skills: [
    {
      category: "Programming",
      items: ["Java", "C", "C++", "HTML", "CSS", "JavaScript", "PHP"],
    },
    {
      category: "IT Support",
      items: ["Computer System Servicing", "Hardware Setup", "Basic Troubleshooting", "Basic Networking", "Remote Access"],
    },
    {
      category: "Creative",
      items: ["Video Editing", "Photo Editing", "Problem Solving", "Customer Service"],
    },
    {
      category: "Tools",
      items: ["Microsoft Office", "Basic Networking Tools", "Remote Access Software"],
    },
  ],
  projects: [
    {
      title: "Atlas Analytics",
      description: "A responsive dashboard for tracking customer growth, retention, and product health metrics.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/atlas-analytics",
    },
    {
      title: "Northstar Notes",
      description: "A focused writing app with markdown previews, keyboard-first flows, and fast search.",
      technologies: ["React", "TypeScript", "Local Storage"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/northstar-notes",
    },
    {
      title: "Launch Kit",
      description: "A polished landing page starter with reusable sections, SEO defaults, and accessible components.",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/launch-kit",
    },
    {
      title: "Signal CRM",
      description: "A lightweight sales workspace prototype for managing accounts, tasks, and contact history.",
      technologies: ["React", "TypeScript", "Headless UI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/signal-crm",
    },
  ],
  resume: {
    summary:
      "Dedicated and goal-oriented Information Technology student with strong problem-solving skills and a desire to apply classroom knowledge in practical work environments.",
    experience: [
      {
        company: "Pricewise CO.",
        role: "OJT Gilmore IT Center",
        location: "Gilmore",
        startDate: "2026",
        endDate: "2026",
        achievements: [
          "Assembled, configured, and tested custom personal computers based on specific client requirements, ensuring proper hardware integration and system optimization.",
          "Executed the installation and network configuration of CCTV surveillance systems, including DVR/NVR setup and troubleshooting, to provide secure and reliable monitoring solutions.",
        ],
      },
      {
        company: "Social Security System",
        role: "OJT Pasig Pioneer",
        location: "Pasig",
        startDate: "2025",
        endDate: "2025",
        achievements: [
          "Assisted SSS members at the E-center by providing hands-on technical guidance for navigating online portals, troubleshooting account issues, and facilitating seamless digital transactions.",
          "Streamlined administrative workflows by systematically organizing and maintaining both physical and digital records, ensuring data privacy and efficient document retrieval.",
        ],
      },
      {
        company: "TESDA NCII",
        role: "CSS Kaizen Tech Institute of Manila INC.",
        location: "Manila",
        startDate: "2024",
        endDate: "2024",
        achievements: [
          "Executed basic troubleshooting for network issues to ensure seamless connectivity for users.",
          "Utilized computer remote access using server capabilities to facilitate efficient problem resolution.",
          "Assisted in computer system servicing by performing hardware setup and basic troubleshooting tasks.",
          "Participated in training programs to enhance technical skills and knowledge in IT support.",
        ],
      },
    ],
    education: [
      {
        institution: "Polytechnic University of the Philippines",
        degree: "College (IT)",
        location: "Philippines",
        dates: "2023 - Present",
        details: ["Currently pursuing a degree in Information Technology."],
      },
      {
        institution: "Arellano University",
        degree: "Senior High School (ICT)",
        location: "Philippines",
        dates: "2022 - 2023",
        details: ["Completed senior high school with a focus on Information and Communications Technology."],
      },
      {
        institution: "Carlos P. Garcia",
        degree: "High School (TechVoc)",
        location: "Philippines",
        dates: "2014 - 2019",
        details: ["Completed technical-vocational high school education."],
      },
    ],
    skills: [
      {
        category: "Technical Skills",
        items: ["Basic Java", "C", "C++", "HTML", "CSS", "JavaScript", "PHP"],
      },
      {
        category: "IT Skills",
        items: ["Computer System Servicing", "Hardware Setup", "Basic Troubleshooting", "Basic Networking", "Remote Access"],
      },
      {
        category: "Soft Skills",
        items: ["Problem Solving", "Customer Service", "Collaboration", "Attention to Detail"],
      },
    ],
    certifications: [
      {
        name: "TESDA NCII",
        issuer: "CSS Kaizen Tech Institute of Manila INC.",
        date: "2024",
      },
      {
        name: "Certificate of Completion - Java Programming",
        issuer: "Joysis Techvoc INC.",
        date: "2024",
      },
    ],
  },
  languages: ["Basic English", "Fluent Tagalog"],
};
