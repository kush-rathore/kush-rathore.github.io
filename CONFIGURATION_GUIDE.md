# Kush Rathore Portfolio - Clean & Optimized

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills overview
│   ├── EnhancedSkills.tsx # Detailed skills with progress
│   ├── LearningProgress.tsx # Coding streak & goals
│   ├── Achievements.tsx # Academic badges
│   ├── Experience.tsx  # Learning journey timeline
│   ├── Education.tsx   # Educational background
│   ├── Projects.tsx    # Project showcase
│   ├── Blog.tsx        # Learning blog posts
│   ├── CompetitiveProgramming.tsx # CP stats
│   ├── LearningResources.tsx # Tools & resources
│   ├── Testimonials.tsx # Academic testimonials
│   ├── Resume.tsx      # Resume section
│   ├── Contact.tsx     # Contact form
│   ├── Navbar.tsx      # Navigation
│   └── Footer.tsx      # Footer
├── config/
│   └── siteConfig.ts   # Site configuration
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## ⚙️ Configuration

All site content is managed through `src/config/siteConfig.ts`. Update this file to customize:

- Personal information
- Skills and technologies  
- Projects and achievements
- Contact details
- Social media links
- Theme colors

### 2. **Contact Information** 📞
```typescript
contact: {
  email: "your.email@example.com",
  telegram: "@yourusername",
  location: "Your City, Country",
  phone: "+91 1234567890"
}
```

### 3. **Social Media Links** 🌐
```typescript
social: {
  instagram: "https://instagram.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  github: "https://github.com/yourusername",
  telegram: "https://t.me/yourusername",
  twitter: "https://twitter.com/yourusername"
}
```

### 4. **Skills** 💻
```typescript
skills: [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend", 
    items: ["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "Figma", "Adobe XD", "VS Code"]
  }
]
```

### 5. **Interests** 🎯
```typescript
interests: [
  "Web Development",
  "UI/UX Design", 
  "Mobile Apps",
  "AI/ML",
  "Blockchain",
  "Cloud Computing"
]
```

### 6. **Projects** 🚀
```typescript
projects: [
  {
    title: "Your Project Name",
    description: "Project description here",
    image: "/images/projects/project-image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project",
    live: "https://your-project.com"
  }
]
```

### 7. **Experience** 💼
```typescript
experience: [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "2023 - Present",
    description: "Job description here",
    image: "/images/experience/company-logo.jpg"
  }
]
```

### 8. **Education** 🎓
```typescript
education: [
  {
    degree: "Your Degree",
    institution: "University Name",
    period: "2020 - 2024",
    description: "Education description",
    image: "/images/education/university-logo.jpg"
  }
]
```

## 🖼️ Adding Images

### **Image Guidelines:**
- **Format**: JPG, PNG, or SVG
- **Size**: Keep under 1MB for better performance
- **Dimensions**: 
  - Project images: 800x600px
  - Avatar: 400x400px
  - Logos: 200x200px

### **Where to Place Images:**

1. **Profile Picture**: `public/images/avatar/your-photo.jpg`
2. **Project Images**: `public/images/projects/project-name.jpg`
3. **Company Logos**: `public/images/experience/company-name.jpg`
4. **University Logos**: `public/images/education/university-name.jpg`
5. **Custom Logo**: `public/images/logo/your-logo.png`

### **Update Image Paths:**
After adding images, update the paths in `siteConfig.ts`:

```typescript
personal: {
  avatar: "/images/avatar/your-photo.jpg"  // Update this path
}
```

## 🎨 Customizing the Theme

### **Colors:**
```typescript
theme: {
  primaryColor: "#00FF41",    // Main green color
  secondaryColor: "#1a1a2e",  // Dark background
  accentColor: "#00CC33",     // Accent green
  textColor: "#E5E7EB",       // Text color
  backgroundColor: "#0F0F23"  // Background color
}
```

## 🔧 SEO Configuration

### **Meta Tags:**
The HTML file automatically uses your configuration for SEO:

```typescript
seo: {
  title: "Your Name - Your Title Portfolio",
  description: "Your portfolio description for search engines",
  ogImage: "/images/og-image.jpg",  // Social media preview image
  twitterCard: "summary_large_image"
}
```

## 📱 Favicon

Your custom favicon is already set up! It's located at:
- `public/favicon.svg` - SVG version (modern browsers)
- `public/favicon.ico` - ICO version (fallback)

## 🚀 Quick Start

1. **Update Personal Info**: Edit `personal` section in `siteConfig.ts`
2. **Add Your Projects**: Update the `projects` array
3. **Update Contact Info**: Modify `contact` and `social` sections
4. **Add Images**: Place images in appropriate folders
5. **Test**: Run `npm run dev` to see changes

## 💡 Tips

- **Backup**: Always backup your `siteConfig.ts` before major changes
- **Images**: Use descriptive filenames for images
- **Links**: Make sure all social media links are correct
- **SEO**: Update the description and keywords for better search visibility

## 🔄 After Making Changes

1. Save the `siteConfig.ts` file
2. The changes will automatically reflect on your site
3. If using development server, changes appear instantly
4. For production, rebuild with `npm run build`

---

**Need Help?** Check the comments in `siteConfig.ts` for detailed explanations of each field!
