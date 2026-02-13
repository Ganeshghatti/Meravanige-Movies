# Meravanige - Next.js Website

This is the Next.js version of the Meravanige website, converted from the original React Vite codebase. This conversion provides improved SEO, performance, and modern web capabilities while maintaining 100% design and functionality parity with the original site.

## 🚀 Tech Stack

- **Framework:** Next.js 15.1.4 (App Router)
- **React:** 19.2.4
- **Styling:** Tailwind CSS 3.4.1
- **Animations:** Framer Motion 11.15.0
- **Icons:** Lucide React 0.563.0
- **TypeScript:** 5.8.2
- **Font:** Plus Jakarta Sans (via next/font/google)

## 📁 Project Structure

```
mera-next/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Home page
│   ├── contact/
│   │   └── page.tsx       # Contact page
│   ├── work/
│   │   └── page.tsx       # Portfolio/Work page
│   ├── speaks/
│   │   └── page.tsx       # Kadakk Talks Podcast page
│   ├── terms/
│   │   └── page.tsx       # Terms & Conditions
│   ├── privacy/
│   │   └── page.tsx       # Privacy Policy
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   └── FilmTicker.tsx
├── lib/                   # Utilities and constants
│   ├── types.ts           # TypeScript interfaces
│   └── constants.ts       # Data constants (FILMS, SERVICES, etc.)
├── public/                # Static assets
│   ├── logo.png          # Company logo
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # Sitemap for search engines
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS config with brand colors
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies

```

## 🎨 Brand Colors

The site uses Meravanige's custom brand palette:

- **Brand White:** `#e7eceb`
- **Brand Yellow:** `#fccd18`
- **Brand Blue:** `#01569e`
- **Brand Blue Dark:** `#002b4e`

## 🔧 Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm, yarn, or pnpm package manager

### Installation

1. **Navigate to the mera-next folder:**

```bash
cd mera-next
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Copy the logo file (IMPORTANT):**

Copy `public/logo.png` from the original project to `mera-next/public/logo.png`

```bash
# From the meravanige root directory:
# Windows:
copy public\logo.png mera-next\public\logo.png

# Mac/Linux:
cp public/logo.png mera-next/public/logo.png
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The site will automatically reload when you make changes to any file.

### Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Running Production Build

After building, you can start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## 📄 Pages & Routes

- **`/`** - Home page with hero section, philosophy, services, and film ticker
- **`/work`** - Portfolio showcasing ZEEK Creatives and ZEEK Realities divisions
- **`/speaks`** - Kadakk Talks Podcast page with voice archive and soundbites
- **`/contact`** - Contact form and company information
- **`/terms`** - Terms & Conditions
- **`/privacy`** - Privacy Policy

## 🎯 Key Features

- **SEO Optimized:** Meta tags, sitemap, robots.txt configured
- **Responsive Design:** Mobile-first approach with breakpoints for all devices
- **Smooth Animations:** Framer Motion page transitions and scroll effects
- **Performance:** Next.js optimizations including Image component and code splitting
- **Accessibility:** Semantic HTML and ARIA labels where needed
- **Type Safety:** Full TypeScript coverage

## 🔄 Conversion Notes

### Changes from React Vite to Next.js:

1. **Routing:**
   - React Router `HashRouter` → Next.js App Router
   - `NavLink` → `Link` from `next/link`
   - `useLocation()` → `usePathname()` from `next/navigation`

2. **Client Components:**
   - All interactive components marked with `"use client"` directive
   - Components with `useState`, `useEffect`, or event handlers are client components
   - Framer Motion components require client-side rendering

3. **Image Optimization:**
   - Configured remote patterns for image domains in `next.config.js`
   - Ready for `next/image` component when needed

4. **Font Loading:**
   - Google Fonts loaded via `next/font/google` for optimal performance
   - Plus Jakarta Sans configured in layout with automatic variable CSS

5. **SEO:**
   - Metadata API used in `layout.tsx` for site-wide SEO
   - Sitemap updated to use clean URLs (no hash routing)

## 🌐 Deployment

This Next.js app can be deployed to:

- **Vercel** (recommended - optimized for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any hosting platform supporting Node.js**

For Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 Environment Variables

Currently, no environment variables are required. If you add API integrations or third-party services, create a `.env.local` file:

```env
# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🐛 Troubleshooting

### Logo not showing
Make sure you've copied `logo.png` from the original `public/` folder to `mera-next/public/logo.png`

### Build errors
Ensure all dependencies are installed by running `npm install` again

### Port 3000 already in use
Specify a different port: `npm run dev -- -p 3001`

## 📧 Contact

For any questions or issues with the website:

- **Email:** meravanigeenterprises@gmail.com
- **Original Project:** Located in parent directory (`meravanige/`)

---

**Built with ❤️ by the Meravanige team**
# Meravanige-Movies
