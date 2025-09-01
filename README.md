# AI Engineer Portfolio

A modern, creative portfolio website showcasing AI/ML research and professional experience with an interactive neural network background and AI-powered chatbot.

## 🤖 AI Chatbot Features

### Claude Haiku Integration
- **AI Assistant**: Powered by Claude 3 Haiku model for intelligent responses
- **Profile Queries**: Answers questions about experience, skills, and background
- **Resume Download**: Direct access to download resume
- **Fallback System**: Robust local responses if API is unavailable

### Environment Setup
1. **Create `.env` file** in the root directory:
   ```bash
   REACT_APP_CLAUDE_API_KEY=your_actual_api_key_here
   REACT_APP_CLAUDE_MODEL=claude-3-haiku-20240307
   ```

2. **For GitHub Pages**: Set environment variables in your repository secrets
3. **Local Development**: Use the `.env` file (already in `.gitignore`)

### Chatbot Capabilities
- **Experience Queries**: Detailed information about work history
- **Skills Assessment**: Technical skills and technologies
- **Education Details**: Academic background and specializations
- **Resume Access**: Direct download functionality
- **Professional Responses**: HR-friendly, informative answers

## 🖼️ Image Upload Instructions

### Profile Photo
- **Location**: `public/images/`
- **Filename**: `profile-photo.jpg` (or `.png`)
- **Recommended Size**: 400x400 pixels
- **Format**: JPG or PNG

### Research Experience Images
- **Location**: `public/images/`
- **Poster Images**: Upload your conference posters here
- **Research Visuals**: Add methodology diagrams, results visualizations, etc.
- **Modal Functionality**: Click on poster images to expand and view full size

### How to Upload
1. Navigate to the `public/images/` folder in your project
2. Place your images in this folder
3. Update the image paths in the components if needed
4. The portfolio will automatically detect and display uploaded images
5. **Poster Images**: Click to expand in a modal for full viewing

## 🚀 Features

- **Interactive Neural Network Background**: 3D animated background with data engineering theme
- **Research Experience Section**: Enhanced with poster images and conference links
- **Professional Experience**: Timeline-based layout with achievements
- **Responsive Design**: Works on all devices
- **Dark/Light Theme**: Automatic theme switching
- **Smooth Animations**: Framer Motion powered interactions
- **Poster Modal System**: Click to expand research posters for full viewing

## 🛠️ Technologies Used

- React 18 + TypeScript
- Tailwind CSS
- Three.js + React Three Fiber
- Framer Motion
- Lucide React Icons

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx          # About me section with profile photo
│   ├── Experience.tsx     # Research & professional experience
│   ├── Projects.tsx       # Project showcase
│   ├── Skills.tsx         # Technical skills
│   ├── Education.tsx      # Academic background
│   ├── Recommendations.tsx # LinkedIn recommendations
│   ├── Contact.tsx        # Contact information
│   ├── NeuralBackground.tsx # 3D neural network background
│   └── Navigation.tsx     # Navigation menu
├── contexts/
│   └── ThemeContext.tsx   # Theme management
└── App.tsx                # Main application component

public/
└── images/                # 📁 Upload your images here
```

## 🎯 Customization

### Colors
- Primary colors: Blue theme (`tailwind.config.js`)
- Neural colors: Purple theme for AI/ML elements
- Dark mode support with automatic switching

### Content
- Update experience details in `Experience.tsx`
- Modify project information in `Projects.tsx`
- Customize skills in `Skills.tsx`
- Add your education details in `Education.tsx`

## 🚀 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Build for Production
```bash
npm run build
```

## 📱 Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Accessible navigation

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 📸 Image Requirements

- **Profile Photo**: 400x400px, professional headshot
- **Poster Images**: High-resolution conference posters
- **Research Visuals**: Clear, professional diagrams
- **Formats**: JPG, PNG, WebP supported
- **File Size**: Optimize for web (under 500KB recommended)

---

**Note**: The portfolio automatically detects uploaded images and displays them. If images don't appear, check the file paths and ensure images are in the correct `public/images/` folder.
