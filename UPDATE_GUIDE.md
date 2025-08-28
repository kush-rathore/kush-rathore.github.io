# 🚀 Portfolio Update Guide

## 📝 Easy Content Updates

### 1. **Personal Information** 
Edit `src/config/siteConfig.ts`:
```typescript
personal: {
  name: 'Your Name',
  age: 'Your Age',
  location: 'Your Location',
  email: 'your.email@example.com',
  telegram: '@yourusername',
  telegramUrl: 'https://t.me/yourusername',
  status: 'Available for missions',
  quote: 'Your favorite quote',
  title: 'Your Name', // Browser tab title
}
```

### 2. **Social Media Links**
Update in `src/config/siteConfig.ts`:
```typescript
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
    url: 'https://github.com/yourusername',
    username: '@yourusername'
  },
  telegram: {
    url: 'https://t.me/yourusername',
    username: '@yourusername'
  }
}
```

### 3. **Skills**
Update your skills in `src/config/siteConfig.ts`:
```typescript
skills: {
  programming: [
    'HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS',
    // Add or remove skills here
  ],
  tools: [
    'VS Code', 'Python', 'GitHub', 'C++', 'DSA in C++', 'Cursor AI', 'Copilot'
    // Add or remove tools here
  ],
  softSkills: [
    'Leadership', 'Team Collaboration', 'Learning Agility', 'Communication', 
    'Time Management', 'Creativity'
    // Add or remove soft skills here
  ]
}
```

### 4. **Projects**
Add your projects in `src/config/siteConfig.ts`:
```typescript
projects: {
  featured: [
    {
      title: 'Your Project Title',
      description: 'Project description here',
      imageUrl: '/images/projects/your-project.jpg',
      instaUrl: 'https://instagram.com/p/yourpost',
      youtubeUrl: 'https://youtube.com/watch?v=yourvideo',
      githubUrl: 'https://github.com/yourusername/project',
      category: 'Featured'
    }
  ],
  other: [
    // Add more projects here
  ]
}
```

### 5. **Images**
Place your images in the following folders:

#### **Project Images**
- **Folder**: `public/images/projects/`
- **Usage**: Add project screenshots here
- **Example**: `portfolio.jpg`, `calculator.jpg`, `weather.jpg`

#### **Skill Icons**
- **Folder**: `public/images/skills/`
- **Usage**: Add skill-specific icons here
- **Example**: `react.png`, `python.png`, `javascript.png`

#### **Main Images**
- **Logo**: `public/images/logo.png` (Your profile picture)
- **Hero Background**: `public/images/hero-bg.jpg` (Hero section background)
- **About Image**: `public/images/about.jpg` (About section image)

### 6. **Interests**
Update your interests in `src/config/siteConfig.ts`:
```typescript
interests: [
  'Web Development',
  'Python Development',
  'Frontend Technologies',
  'Problem Solving',
  'Innovation',
  'Technology'
  // Add or remove interests here
]
```

## 🎨 Image Requirements

### **Project Images**
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 800x600px or 16:9 ratio
- **File Size**: Keep under 500KB for fast loading

### **Logo/Profile Picture**
- **Format**: PNG (for transparency) or JPG
- **Size**: Square format recommended (400x400px)
- **Background**: Transparent or solid color

### **Skill Icons**
- **Format**: PNG (preferred for transparency)
- **Size**: 64x64px or 128x128px
- **Style**: Consistent design across all icons

## 🔄 Update Process

1. **Edit Configuration**: Update `src/config/siteConfig.ts`
2. **Add Images**: Place images in appropriate folders
3. **Test Locally**: Run `npm start` to see changes
4. **Deploy**: Push to GitHub for automatic deployment

## 📁 Folder Structure
```
portfolio/
├── public/
│   └── images/
│       ├── logo.png
│       ├── hero-bg.jpg
│       ├── about.jpg
│       ├── projects/
│       │   ├── portfolio.jpg
│       │   ├── calculator.jpg
│       │   └── weather.jpg
│       └── skills/
│           ├── react.png
│           ├── python.png
│           └── javascript.png
├── src/
│   └── config/
│       └── siteConfig.ts  ← Main configuration file
└── UPDATE_GUIDE.md  ← This file
```

## ⚡ Quick Updates

### **Change Contact Info**
Edit `personal` section in `siteConfig.ts`

### **Add New Project**
1. Add project image to `public/images/projects/`
2. Add project details to `projects.featured` or `projects.other` in `siteConfig.ts`

### **Update Social Links**
Edit `social` section in `siteConfig.ts`

### **Change Skills**
Edit `skills` section in `siteConfig.ts`

## 🎯 Benefits

✅ **Easy Updates**: Change content without touching code  
✅ **Organized**: All content in one configuration file  
✅ **Image Management**: Dedicated folders for different image types  
✅ **Version Control**: Track changes with Git  
✅ **Fast Deployment**: Automatic updates on GitHub Pages  

---

**Happy Updating! 🚀**
