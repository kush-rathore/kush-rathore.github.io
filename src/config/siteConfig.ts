// Site Configuration - Easy to update content
export const siteConfig = {
  // Personal Information
  personal: {
    name: 'Kush Rathore',
    age: '18',
    location: 'India',
    email: 'Kush_rathore@outlook.com',
    telegram: '@kushrathore',
    telegramUrl: 'https://t.me/kushrathore',
    status: 'Available for missions',
    quote: 'Everything that drowns me makes me wanna fly',
    title: 'Kush Rathore', // Browser tab title
  },

  // Social Media Links
  social: {
    instagram: {
      url: 'https://instagram.com/yourusername',
      username: '@yourusername'
    },
    linkedin: {
      url: 'https://linkedin.com/in/yourusername',
      username: '@yourusername'
    },
    github: {
      url: 'https://github.com/kushrathore',
      username: '@kushrathore'
    },
    telegram: {
      url: 'https://t.me/kushrathore',
      username: '@kushrathore'
    }
  },

  // Skills
  skills: {
    programming: [
      'HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS',
      'Node.js', 'Express.js', 'MongoDB', 'SQL', 'Python', 'C++'
    ],
    tools: [
      'VS Code', 'Python', 'GitHub', 'C++', 'DSA in C++', 'Cursor AI', 'Copilot'
    ],
    softSkills: [
      'Leadership', 'Team Collaboration', 'Learning Agility', 'Communication', 
      'Time Management', 'Creativity'
    ]
  },

  // Interests
  interests: [
    'Web Development',
    'Python Development',
    'Frontend Technologies',
    'Problem Solving',
    'Innovation',
    'Technology'
  ],

  // Projects
  projects: {
    featured: [
      {
        title: 'Portfolio Website',
        description: 'My personal portfolio built with React and Tailwind CSS, featuring a futuristic Ben 10 theme.',
        imageUrl: '/images/projects/portfolio.jpg',
        instaUrl: 'https://instagram.com/p/yourpost',
        youtubeUrl: 'https://youtube.com/watch?v=yourvideo',
        githubUrl: 'https://github.com/kushrathore/portfolio',
        category: 'Featured'
      },
      {
        title: 'Calculator App',
        description: 'A modern calculator application with advanced mathematical functions.',
        imageUrl: '/images/projects/calculator.jpg',
        instaUrl: 'https://instagram.com/p/yourpost2',
        youtubeUrl: 'https://youtube.com/watch?v=yourvideo2',
        githubUrl: 'https://github.com/kushrathore/calculator',
        category: 'Featured'
      }
    ],
    other: [
      {
        title: 'Weather App',
        description: 'Real-time weather application with location-based forecasts.',
        imageUrl: '/images/projects/weather.jpg',
        instaUrl: 'https://instagram.com/p/yourpost3',
        youtubeUrl: 'https://youtube.com/watch?v=yourvideo3',
        githubUrl: 'https://github.com/kushrathore/weather',
        category: 'Other'
      },
      {
        title: 'Todo List',
        description: 'A simple and efficient todo list application with local storage.',
        imageUrl: '/images/projects/todo.jpg',
        instaUrl: 'https://instagram.com/p/yourpost4',
        youtubeUrl: 'https://youtube.com/watch?v=yourvideo4',
        githubUrl: 'https://github.com/kushrathore/todo',
        category: 'Other'
      }
    ]
  },

  // Images Configuration
  images: {
    logo: '/images/logo.png', // Your logo image
    heroBackground: '/images/hero-bg.jpg', // Hero section background
    aboutImage: '/images/about.jpg', // About section image
    projectImages: '/images/projects/', // Project images folder
    skillIcons: '/images/skills/', // Skill icons folder
  },

  // Site Settings
  settings: {
    theme: 'ben10', // Current theme
    version: '2.0',
    deploymentYear: new Date().getFullYear()
  }
};

export default siteConfig;
