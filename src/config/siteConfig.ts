// TypeScript interfaces for type safety
export interface LearningProgressData {
  currentStreak: number;
  totalProblems: number;
  currentFocus: string;
  weeklyGoal: string;
}

export interface PersonalInfo {
  name: string;
  fullName: string;
  age: number;
  location: string;
  email: string;
  status: string;
  quote: string;
  bio: string;
  avatar: string;
}

export interface ContactInfo {
  email: string;
  telegram: string;
  location: string;
  phone: string;
}

export interface SocialLinks {
  instagram: string;
  linkedin: string;
  github: string;
  telegram: string;
  twitter: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface HeroData {
  name: string;
  tagline: string;
  roles: string[];
  status: string;
  focus: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  instagram: string;
  youtube: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  date: string;
  color: string;
}

export interface PlatformStats {
  name: string;
  username: string;
  problems: number;
  rank: string;
  badge: string;
  color: string;
  link: string;
}

export interface RecentSolve {
  problem: string;
  platform: string;
  difficulty: string;
  date: string;
  language: string;
}

export interface LearningResource {
  title: string;
  author: string;
  type: string;
  rating: number;
  status: string;
  link?: string;
  progress?: number;
}

export interface LearningResourcesData {
  tutorials: LearningResource[];
  books: LearningResource[];
  tools: LearningResource[];
  youtube: LearningResource[];
}

export interface CompetitiveProgrammingData {
  platforms: PlatformStats[];
  recentSolves: RecentSolve[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface EnhancedSkill {
  name: string;
  level: number;
  experience: string;
  projects: number;
}

export interface EnhancedSkillCategory {
  category: string;
  skills: EnhancedSkill[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SEOConfig {
  title: string;
  description: string;
  ogImage: string;
  twitterCard: string;
}

export interface SiteConfig {
  personal: PersonalInfo;
  contact: ContactInfo;
  social: SocialLinks;
  hero: HeroData;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: Project[];
  achievements: Achievement[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
  enhancedSkills: EnhancedSkillCategory[];
  learningResources: {
    tutorials: LearningResource[];
    books: LearningResource[];
    tools: LearningResource[];
    youtube: LearningResource[];
  };
  skills: Skill[];
  tools: string[];
  softSkills: string[];
  certifications: string[];
  languages: Language[];
  interests: string[];
  seo: SEOConfig;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    textColor: string;
    backgroundColor: string;
  };
  learningProgress: LearningProgressData;
  competitiveProgramming: CompetitiveProgrammingData;
}

export const siteConfig: SiteConfig = {
  // Personal Information
  personal: {
    name: "KUSH RATHORE",
    fullName: "Kush Rathore",
    age: 18,
    location: "India",
    email: "kush.rathore@example.com",
    status: "ACTIVE",
    quote: "Learning, Growing, and Building the Future",
    bio: "I'm a passionate 12th pass student with a strong foundation in Computer Science (99% marks). Currently learning Python, C++, and Data Structures & Algorithms. Eager to build innovative projects and grow as a developer.",
    avatar: "/images/avatar.jpg"
  },

  // Contact Information
  contact: {
    email: "kush.rathore@example.com",
    telegram: "@kushrathore",
    location: "India",
    phone: "+91 1234567890"
  },

  // Social Media Links
  social: {
    instagram: "https://instagram.com/kushrathore",
    linkedin: "https://linkedin.com/in/kushrathore",
    github: "https://github.com/kushrathore",
    telegram: "https://t.me/kushrathore",
    twitter: "https://twitter.com/kushrathore"
  },

  // Hero Section Data
  hero: {
    name: "KUSH RATHORE",
    tagline: "Learning, Growing, and Building the Future",
    roles: ["Undergraduate Student", "Frontend Developer", "Coding Enthusiast"],
    status: "LEARNING",
    focus: "DSA & PYTHON"
  },

  // Skills
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "C++", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Learning Focus",
      items: ["Data Structures", "Algorithms", "Problem Solving", "Object Oriented Programming"]
    },
    {
      category: "Tools & Technologies",
      items: ["VS Code", "Git", "GitHub", "React", "Tailwind CSS", "Vite"]
    }
  ],

  // Additional Skills Data
  tools: [
    'VS Code', 'Python', 'GitHub', 'C++', 'DSA', 'Problem Solving', 'Learning'
  ],

  softSkills: [
    'Leadership', 'Team Collaboration', 'Learning Agility', 'Communication', 'Time Management', 'Creativity'
  ],

  certifications: [
    'Typing'
  ],

  languages: [
    { name: 'English', level: 'Native' },
    { name: 'Hindi', level: 'Native' }
  ],

  // Interests
  interests: [
    "Web Development",
    "UI/UX Design", 
    "Mobile Apps",
    "AI/ML",
    "Blockchain",
    "Cloud Computing"
  ],

  // Learning Journey (Experience)
  experience: [
    {
      title: "Self-Learning Programming",
      company: "Independent Study",
      period: "2024 - Present",
      description: "Learning Python, C++, and Data Structures & Algorithms through online resources and practice. Building foundational programming skills."
    },
    {
      title: "Academic Excellence",
      company: "CBSE Board",
      period: "2023 - 2024",
      description: "Achieved 99% marks in Class 12th Computer Science. Developed strong understanding of programming concepts and problem-solving."
    },
    {
      title: "Foundation Building",
      company: "School Projects",
      period: "2022 - 2023",
      description: "Started programming journey with basic projects and assignments. Discovered passion for coding and technology."
    }
  ],

  // Education
  education: [
    {
      degree: "Class 12th - Computer Science",
      institution: "CBSE Board",
      period: "2023 - 2024",
      description: "Completed 12th grade with 99% marks in Computer Science. Strong foundation in programming concepts, data structures, and algorithms. Currently pursuing advanced programming skills."
    },
    {
      degree: "Class 10th",
      institution: "CBSE Board",
      period: "2021 - 2022",
      description: "Completed 10th grade with 95% marks. Developed interest in computer science and programming during this period."
    }
  ],

  // Projects
  projects: [
    {
      title: "Python Learning Projects",
      description: "Collection of Python programs including basic calculators, simple games, and data structure implementations. Currently working on improving logic and problem-solving skills.",
      technologies: ["Python", "Basic Algorithms", "Problem Solving"],
      github: "https://github.com/kushrathore/python-learning",
      demo: "https://github.com/kushrathore/python-learning",
      image: "/images/projects/python-learning.png",
      instagram: "https://instagram.com/kushrathore",
      youtube: "https://youtube.com/@kushrathore"
    },
    {
      title: "C++ DSA Practice",
      description: "Learning Data Structures and Algorithms in C++. Working on arrays, linked lists, stacks, queues, and basic sorting algorithms. Building strong programming fundamentals.",
      technologies: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
      github: "https://github.com/kushrathore/cpp-dsa",
      demo: "https://github.com/kushrathore/cpp-dsa",
      image: "/images/projects/cpp-dsa.png",
      instagram: "https://instagram.com/kushrathore",
      youtube: "https://youtube.com/@kushrathore"
    },
    {
      title: "Portfolio Website",
      description: "My first major web development project - this portfolio website built with React, TypeScript, and Tailwind CSS. Learning modern web technologies and responsive design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/kushrathore/portfolio",
      demo: "https://kush-rathore.github.io",
      image: "/images/projects/portfolio.png",
      instagram: "https://instagram.com/kushrathore",
      youtube: "https://youtube.com/@kushrathore"
    }
  ],

  // Site Configuration
  site: {
    title: "KUSH RATHORE",
    description: "Portfolio of Kush Rathore - Student & Aspiring Developer",
    keywords: ["student", "portfolio", "programming", "python", "cpp", "dsa", "learning"],
    author: "Kush Rathore",
    favicon: "/favicon-circle.svg",
    logo: "/images/logo.png"
  },

  // Theme Configuration
  theme: {
    primaryColor: "#00FF41", // omniGreen-500
    secondaryColor: "#1a1a2e", // omniBlack-950
    accentColor: "#00CC33", // omniGreen-600
    textColor: "#E5E7EB", // omniSilver-200
    backgroundColor: "#0F0F23" // omniBlack-950
  },

  // Learning Progress
  learningProgress: {
    currentStreak: 45, // Days of continuous learning
    totalProblems: 127, // DSA problems solved
    currentFocus: "Binary Trees & Graph Algorithms",
    weeklyGoal: "Complete 15 DSA problems"
  },

  // Learning Resources
  learningResources: {
    tutorials: [
      {
        title: "Python for Everybody (Coursera)",
        author: "Dr. Charles Severance",
        type: "Course",
        rating: 5,
        status: "Completed",
        link: "https://www.coursera.org/specializations/python"
      },
      {
        title: "C++ DSA by Love Babbar",
        author: "Love Babbar",
        type: "YouTube",
        rating: 5,
        status: "In Progress",
        link: "https://www.youtube.com/watch?v=WQoB2z67hvY"
      },
      {
        title: "React Official Documentation",
        author: "React Team",
        type: "Documentation",
        rating: 5,
        status: "Reference",
        link: "https://reactjs.org/docs/getting-started.html"
      }
    ],
    books: [
      {
        title: "Introduction to Algorithms",
        author: "Cormen, Leiserson, Rivest, Stein",
        type: "Textbook",
        rating: 5,
        status: "Reading",
        progress: 25
      },
      {
        title: "Python Crash Course",
        author: "Eric Matthes",
        type: "Programming",
        rating: 5,
        status: "Completed",
        progress: 100
      },
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        type: "Programming",
        rating: 5,
        status: "To Read"
      }
    ],
    tools: [
      {
        title: "VS Code",
        author: "Microsoft",
        type: "Code Editor",
        rating: 5,
        status: "Using Daily",
        link: "https://code.visualstudio.com/"
      },
      {
        title: "Git & GitHub",
        author: "GitHub",
        type: "Version Control",
        rating: 5,
        status: "Using Daily",
        link: "https://github.com/"
      },
      {
        title: "LeetCode",
        author: "LeetCode",
        type: "Coding Practice",
        rating: 5,
        status: "Using Daily",
        link: "https://leetcode.com/"
      }
    ],
    youtube: [
      {
        title: "NeetCode",
        author: "NeetCode",
        type: "DSA Tutorials",
        rating: 5,
        status: "Following",
        link: "https://www.youtube.com/c/NeetCode"
      },
      {
        title: "Web Dev Simplified",
        author: "Kyle",
        type: "Web Development",
        rating: 5,
        status: "Following",
        link: "https://www.youtube.com/c/WebDevSimplified"
      },
      {
        title: "Fireship",
        author: "Jeff Delaney",
        type: "Tech Education",
        rating: 5,
        status: "Following",
        link: "https://www.youtube.com/c/Fireship"
      }
    ]
  },

  // Competitive Programming
  competitiveProgramming: {
    platforms: [
      {
        name: "LeetCode",
        username: "kushrathore",
        problems: 45,
        rank: "Beginner",
        badge: "🟢",
        color: "from-green-500 to-green-300",
        link: "https://leetcode.com/kushrathore"
      },
      {
        name: "CodeChef",
        username: "kush_rathore",
        problems: 23,
        rank: "1 Star",
        badge: "⭐",
        color: "from-yellow-500 to-yellow-300",
        link: "https://www.codechef.com/users/kush_rathore"
      },
      {
        name: "Codeforces",
        username: "kushrathore",
        problems: 12,
        rank: "Newbie",
        badge: "🔰",
        color: "from-gray-500 to-gray-300",
        link: "https://codeforces.com/profile/kushrathore"
      },
      {
        name: "HackerRank",
        username: "kush_rathore",
        problems: 38,
        rank: "Bronze",
        badge: "🥉",
        color: "from-orange-500 to-orange-300",
        link: "https://www.hackerrank.com/kush_rathore"
      }
    ],
    recentSolves: [
      {
        problem: "Two Sum",
        platform: "LeetCode",
        difficulty: "Easy",
        date: "Aug 30, 2024",
        language: "Python"
      },
      {
        problem: "Binary Search",
        platform: "LeetCode",
        difficulty: "Easy",
        date: "Aug 29, 2024",
        language: "C++"
      },
      {
        problem: "Reverse Linked List",
        platform: "LeetCode",
        difficulty: "Easy",
        date: "Aug 28, 2024",
        language: "Python"
      },
      {
        problem: "Valid Parentheses",
        platform: "LeetCode",
        difficulty: "Easy",
        date: "Aug 27, 2024",
        language: "C++"
      }
    ]
  },

  // Achievements
  achievements: [
    {
      title: "Academic Excellence",
      description: "99% in Class 12th Computer Science",
      icon: "🏆",
      date: "2024",
      color: "from-yellow-500 to-yellow-300"
    },
    {
      title: "High Achiever",
      description: "95% in Class 10th CBSE",
      icon: "🎯",
      date: "2022",
      color: "from-omniGreen-500 to-omniGreen-300"
    },
    {
      title: "Programming Journey",
      description: "Started learning Python & C++",
      icon: "💻",
      date: "2024",
      color: "from-blue-500 to-blue-300"
    },
    {
      title: "DSA Enthusiast",
      description: "Mastering Data Structures & Algorithms",
      icon: "🧠",
      date: "2024",
      color: "from-purple-500 to-purple-300"
    },
    {
      title: "Portfolio Creator",
      description: "Built first React TypeScript project",
      icon: "🚀",
      date: "2024",
      color: "from-omniGreen-500 to-omniGreen-300"
    },
    {
      title: "Continuous Learner",
      description: "45+ day coding streak",
      icon: "⚡",
      date: "2024",
      color: "from-orange-500 to-orange-300"
    }
  ],

  // Blog Posts
  blogPosts: [
    {
      title: "My Journey with Python: From Zero to Problem Solver",
      excerpt: "Starting my programming journey with Python and the challenges I faced while learning basic concepts like loops, functions, and data structures.",
      date: "Aug 25, 2024",
      readTime: "5 min read",
      tags: ["Python", "Beginner", "Learning"],
      category: "Programming"
    },
    {
      title: "Understanding Arrays and Linked Lists in C++",
      excerpt: "Deep dive into my first data structures in C++. Comparing arrays vs linked lists and implementing basic operations.",
      date: "Aug 20, 2024",
      readTime: "7 min read",
      tags: ["C++", "DSA", "Data Structures"],
      category: "DSA"
    },
    {
      title: "Building My First React Portfolio",
      excerpt: "The story behind creating this portfolio website using React, TypeScript, and Tailwind CSS. Lessons learned and challenges overcome.",
      date: "Aug 15, 2024",
      readTime: "6 min read",
      tags: ["React", "TypeScript", "Web Dev"],
      category: "Web Development"
    },
    {
      title: "Binary Search: My First Algorithm Victory",
      excerpt: "How I finally understood binary search algorithm and implemented it in both Python and C++. The 'aha!' moment explained.",
      date: "Aug 10, 2024",
      readTime: "4 min read",
      tags: ["Algorithms", "Binary Search", "Problem Solving"],
      category: "DSA"
    },
    {
      title: "From 95% to 99%: My Class 12 CS Journey",
      excerpt: "Reflecting on my academic journey, the preparation strategies that helped me achieve 99% in Computer Science, and what I learned.",
      date: "Aug 5, 2024",
      readTime: "8 min read",
      tags: ["Academic", "CBSE", "Computer Science"],
      category: "Academic"
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Computer Science Teacher",
      position: "Subject Teacher",
      company: "CBSE School",
      content: "Kush showed exceptional dedication in Computer Science, achieving 99% marks. His logical thinking and programming aptitude are remarkable for his age.",
      avatar: "/images/testimonials/teacher.jpg",
      rating: 5
    },
    {
      name: "Study Group Peer",
      position: "Classmate",
      company: "Class 12th Batch",
      content: "Kush always helped us understand complex programming concepts. His passion for coding and willingness to learn new things is inspiring.",
      avatar: "/images/testimonials/peer.jpg",
      rating: 5
    },
    {
      name: "Project Collaborator",
      position: "Fellow Student",
      company: "Learning Community",
      content: "Working with Kush on coding projects has been amazing. He brings fresh ideas and has a great problem-solving approach.",
      avatar: "/images/testimonials/collaborator.jpg",
      rating: 5
    }
  ],

  // Enhanced Skills with Progress
  enhancedSkills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 75, experience: "6 months", projects: 8 },
        { name: "C++", level: 60, experience: "4 months", projects: 5 },
        { name: "JavaScript", level: 45, experience: "2 months", projects: 3 },
        { name: "HTML5", level: 80, experience: "8 months", projects: 4 },
        { name: "CSS3", level: 70, experience: "6 months", projects: 4 }
      ]
    },
    {
      category: "Data Structures & Algorithms",
      skills: [
        { name: "Arrays & Strings", level: 85, experience: "5 months", projects: 12 },
        { name: "Linked Lists", level: 70, experience: "3 months", projects: 8 },
        { name: "Stacks & Queues", level: 65, experience: "2 months", projects: 6 },
        { name: "Binary Search", level: 80, experience: "4 months", projects: 10 },
        { name: "Sorting Algorithms", level: 75, experience: "3 months", projects: 7 }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", level: 50, experience: "2 months", projects: 2 },
        { name: "Tailwind CSS", level: 65, experience: "3 months", projects: 3 },
        { name: "TypeScript", level: 40, experience: "1 month", projects: 1 },
        { name: "Responsive Design", level: 70, experience: "4 months", projects: 4 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 75, experience: "5 months", projects: 15 },
        { name: "VS Code", level: 90, experience: "8 months", projects: 20 },
        { name: "Problem Solving", level: 80, experience: "6 months", projects: 25 },
        { name: "Debugging", level: 70, experience: "4 months", projects: 18 }
      ]
    }
  ],

  // SEO Configuration
  seo: {
    title: "Kush Rathore - Student Portfolio & Learning Journey",
    description: "Portfolio of Kush Rathore, an 18-year-old 12th pass student with 99% in Computer Science. Currently learning Python, C++, and DSA.",
    ogImage: "/images/og-image.jpg",
    twitterCard: "summary_large_image"
  }
};

export default siteConfig;
