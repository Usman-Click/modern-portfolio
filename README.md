# Modern Portfolio

A modern portfolio website built with Next.js, React, and Tailwind CSS, showcasing design and development projects.

## Project Structure

```
modern-portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── projects/
│       └── locale/
│           └── page.tsx    # Locale project case study
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Features

- **Next.js 15** with TypeScript
- **Tailwind CSS** for styling
- **Responsive Design** - Works on all devices
- **Project Case Studies** - Detailed project pages with case study content
- **Modern Aesthetics** - Clean, minimal design matching Framer style

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

1. Navigate to the project directory:
```bash
cd modern-portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## Project Pages

- **Home** - `/` - Main portfolio landing page
- **Locale Project** - `/projects/locale` - Lightweight Content Localization case study

## Customization

### Colors & Styling

Edit `tailwind.config.js` to customize colors and fonts.

### Add More Projects

1. Create a new directory: `app/projects/[project-name]/`
2. Add a `page.tsx` file with your project content
3. Link it from the home page

## Deployment

Deploy to Vercel (recommended for Next.js):

```bash
npm i -g vercel
vercel
```

Or deploy to any Node.js hosting service.

## License

© 2025 Merlin Schröter
# modern-portfolio
