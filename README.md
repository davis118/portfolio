# Developer Portfolio

A modern, responsive developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🎭 **Smooth Animations**: Beautiful animations powered by Framer Motion
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML
- ♿ **Accessible**: Built with accessibility best practices

## Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal information, experience, and education
- **Skills**: Technical skills with proficiency levels
- **Projects**: Portfolio of work with filtering capabilities
- **Contact**: Social links and contact information

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information

Update the following files with your information:

- `src/sections/Hero.tsx` - Name, title, and description
- `src/sections/About.tsx` - Personal details, experience, and education
- `src/sections/Skills.tsx` - Your technical skills and proficiency levels
- `src/sections/Projects.tsx` - Your projects and work

### Styling

- Colors can be customized in the Tailwind classes throughout the components
- The primary color scheme uses blue (`blue-600`) as the main accent
- Background is white as requested

### Social Links

Update social media links in:

- `src/sections/Hero.tsx`
- `src/components/Footer.tsx`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with Navbar
│   ├── page.tsx        # Main page with all sections
│   └── globals.css     # Global styles and Tailwind
├── components/          # Reusable components
│   ├── Button.tsx      # Button component with variants
│   ├── Card.tsx        # Card component for projects/skills
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
└── sections/           # Page sections
    ├── Hero.tsx        # Hero/About me section
    ├── About.tsx       # Detailed about section
    ├── Skills.tsx      # Skills and technologies
    └── Projects.tsx    # Portfolio projects
```

## Deployment

This portfolio is ready to deploy on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Bundle Size**: Minimal bundle size with tree shaking
- **Images**: Optimized with Next.js Image component
- **Fonts**: System fonts for fast loading

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
