# Monish Sinha - Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and TailwindCSS.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Mode** - Toggle between themes with system preference detection
- **Smooth Animations** - Subtle fade-in and hover effects
- **SEO Optimized** - Meta tags and Open Graph support
- **Fast Performance** - Built with Next.js for optimal loading

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/monishsinha/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with providers
│   └── page.tsx         # Home page
├── components/
│   ├── Footer.tsx       # Site footer
│   ├── Navbar.tsx       # Navigation bar with theme toggle
│   ├── ThemeProvider.tsx # Dark/light mode provider
│   └── sections/
│       ├── Hero.tsx     # Hero section
│       ├── About.tsx    # About section
│       ├── Projects.tsx # Projects showcase
│       ├── Experience.tsx # Work experience
│       └── Contact.tsx  # Contact information
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/sections/Hero.tsx`): Update name, tagline, and intro
2. **About Section** (`src/components/sections/About.tsx`): Update bio and education
3. **Projects Section** (`src/components/sections/Projects.tsx`): Add/edit projects array
4. **Experience Section** (`src/components/sections/Experience.tsx`): Update work history
5. **Contact Section** (`src/components/sections/Contact.tsx`): Update contact links
6. **Footer** (`src/components/Footer.tsx`): Update social links

### Add Resume

Place your resume PDF at `public/resume.pdf` for the resume download button to work.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically detect Next.js and configure the build settings.

### Manual Deployment

Build the production version:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Environment Variables

No environment variables are required for basic functionality.

## License

MIT License - feel free to use this template for your own portfolio!

## Author

**Monish Sinha** - Data Science Student | AI Governance | Machine Learning
