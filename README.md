# Kush Rathore - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a Ben 10 Omnitrix-inspired sci-fi theme.

## 🚀 Features

- **Centralized Configuration**: All content managed through a single `siteConfig.ts` file
- **Type Safety**: Full TypeScript support with proper interfaces
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Ben 10 Theme**: Omnitrix-inspired sci-fi aesthetic with green/black color scheme
- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── About.tsx        # About section with personal info
│   ├── Achievements.tsx # Academic and learning achievements
│   ├── Blog.tsx         # Blog posts and learning journey
│   ├── Contact.tsx      # Contact form and information
│   ├── Education.tsx    # Educational background
│   ├── Experience.tsx   # Learning and project experience
│   ├── Footer.tsx       # Site footer with social links
│   ├── Hero.tsx         # Landing section with introduction
│   ├── Navbar.tsx       # Navigation component
│   ├── Projects.tsx     # Project showcase
│   ├── Skills.tsx       # Technical skills display
│   ├── Testimonials.tsx # Learning testimonials
│   └── ...
├── config/
│   └── siteConfig.ts    # Centralized configuration file
├── App.tsx              # Main application component
└── main.tsx            # Application entry point
```

## 🔧 Centralized Configuration

All website content is managed through `src/config/siteConfig.ts`, providing:

### Data Structures
- **Personal Information**: Name, age, location, contact details
- **Social Links**: GitHub, LinkedIn, Instagram, Telegram
- **Hero Data**: Main landing content and roles
- **Education**: Academic achievements and coursework
- **Experience**: Learning projects and activities
- **Projects**: Portfolio projects with descriptions and links
- **Skills**: Technical skills with categories
- **Blog Posts**: Learning journey articles
- **Testimonials**: Feedback from teachers and peers
- **Achievements**: Academic and learning milestones

### TypeScript Interfaces
```typescript
interface PersonalInfo {
  name: string;
  fullName: string;
  age: number;
  location: string;
  email: string;
  phone: string;
  bio: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

// ... and many more
```

## 🎨 Design Theme

The portfolio features a **Ben 10 Omnitrix-inspired** design with:
- **Color Scheme**: Green (#10B981) and Black (#0F172A) primary colors
- **Typography**: Orbitron and Audiowide fonts for sci-fi aesthetic
- **Animations**: Pulse effects, glows, and smooth transitions
- **Components**: Holographic cards, tech panels, and futuristic UI elements

## 🛠️ Development

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

### Development Server
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Content Management

To update website content:

1. **Edit `src/config/siteConfig.ts`**
2. **Modify the relevant data objects**
3. **TypeScript will ensure type safety**
4. **Changes reflect automatically in all components**

Example - Adding a new project:
```typescript
// In siteConfig.ts
projects: [
  {
    title: "New Project",
    description: "Project description",
    technologies: ["React", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/repo"
  },
  // ... existing projects
]
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm, md, lg, xl responsive breakpoints
- **Touch Friendly**: Proper touch targets and interactions
- **Performance**: Optimized images and lazy loading

## 🔒 Type Safety

Full TypeScript implementation ensures:
- **Compile-time Error Detection**
- **IntelliSense Support**
- **Refactoring Safety**
- **Documentation through Types**

## 🚀 Deployment

The site can be deployed to various platforms:

### Netlify/Vercel
```bash
npm run build
# Deploy dist/ folder
```

### GitHub Pages
```bash
npm run deploy
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About the Developer

**Kush Rathore** - 18-year-old student with exceptional academic performance:
- 99% marks in Class 12th CBSE Computer Science (2023-2024)
- 95% marks in Class 10th CBSE (2021-2022)
- Currently learning Python, C++, and Data Structures & Algorithms
- Passionate about web development and problem-solving

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
