# Developer Portfolio

A minimalist, modern developer portfolio built with Next.js, React, and Three.js.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helper components for react-three-fiber
- **Tailwind CSS** - Utility-first CSS framework

## Features

- 🎨 Minimalist dark theme with cyan accents
- 🌐 Fully responsive design
- 🎯 Interactive 3D homepage with animated sphere
- 📄 Multiple pages: Home, About, Projects, Blog, Resume, Contact
- ⚡ Fast page loads with Next.js optimization
- 🎭 Smooth transitions and hover effects

## Project Structure

```
dev_portfolio/
├── app/
│   ├── about/page.js       # About page
│   ├── blog/page.js        # Blog listings
│   ├── contact/page.js     # Contact information
│   ├── projects/page.js    # Project showcase
│   ├── resume/page.js      # Resume/CV
│   ├── page.js             # Homepage with 3D scene
│   ├── layout.js           # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.js           # Navigation component
│   └── Scene3D.js          # Three.js 3D scene
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Colors
Edit the CSS variables in `app/globals.css`:
```css
:root {
  --background: #0f172a;    /* Dark blue-gray */
  --foreground: #e2e8f0;    /* Light gray */
  --accent: #22d3ee;        /* Cyan */
  --accent-dark: #0891b2;   /* Dark cyan */
  --card-bg: #1e293b;       /* Card background */
  --border: #334155;        /* Border color */
}
```

### 3D Scene
Modify the Three.js scene in `components/Scene3D.js` to change:
- Geometry (sphere, box, torus, etc.)
- Materials and colors
- Animation speed
- Lighting

### Content
Update placeholder content in each page:
- **Home**: Edit name and title in `app/page.js`
- **About**: Update bio, skills, and experience in `app/about/page.js`
- **Projects**: Replace placeholder projects in `app/projects/page.js`
- **Blog**: Add your blog posts in `app/blog/page.js`
- **Resume**: Update work experience and education in `app/resume/page.js`
- **Contact**: Add your contact information in `app/contact/page.js`

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
