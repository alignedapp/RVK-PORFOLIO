# Rosa Van Kuyk - Personal Portfolio

A modern, responsive personal website showcasing Rosa Van Kuyk's expertise in recruitment and employer brand leadership for the Seek Star Award submission.

## 🚀 Features

- **Modern Design**: Bold, editorial style with clean typography and generous whitespace
- **Responsive**: Mobile-first design that works across all devices
- **Accessible**: WCAG 2.1 AA compliant with semantic HTML and proper focus management
- **Performance**: Optimized with Next.js 15, Turbopack, and Vercel Analytics
- **SEO Optimized**: Comprehensive metadata and Open Graph tags

## 🛠 Tech Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Styling**: Tailwind CSS 4.x with shadcn/ui components
- **Typography**: Inter (headings) and Public Sans (body text)
- **Hosting**: Designed for Vercel deployment
- **Analytics**: Vercel Analytics integration

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with SEO and fonts
│   ├── page.tsx        # Main homepage
│   └── globals.css     # Global styles and brand colors
├── components/
│   ├── ui/             # shadcn/ui base components
│   ├── Hero.tsx        # Hero section with headline and CTA
│   ├── Stats.tsx       # Impact numbers band
│   ├── TurningPoint.tsx # Personal story section
│   ├── CaseStudies.tsx # Case studies grid
│   ├── Recognition.tsx # Awards section
│   ├── PersonalNote.tsx # About Aligned app
│   ├── FooterCTA.tsx   # Footer with LinkedIn CTA
│   └── Section.tsx     # Reusable section wrapper
└── lib/
    └── utils.ts        # Utility functions
```

## 🎨 Design System

### Colors
- **Background**: White (`oklch(1 0 0)`)
- **Text**: Charcoal (`oklch(0.145 0 0)`)
- **Accent**: Muted pink/beige (`oklch(0.9 0.05 350)`)
- **Light Grey**: Background tint (`oklch(0.97 0 0)`)

### Typography
- **Headings**: Inter (font-heading)
- **Body**: Public Sans (font-body)
- **Sizes**: Responsive scaling from mobile to desktop

### Components
- **Buttons**: Rounded-2xl with hover effects
- **Cards**: Soft shadows with hover lift animations
- **Sections**: Consistent spacing and max-width containers

## 🏃‍♀️ Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd rvk-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000` (or next available port).

## 📦 Available Scripts

```bash
# Development
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Type checking
pnpm type-check   # Run TypeScript compiler check
```

## 🚀 Deployment to Vercel

### Option 1: Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push to main branch

### Option 2: Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Custom Domain Setup (rvk.alignedapp.com)

1. **In Vercel Dashboard**:
   - Go to your project settings
   - Navigate to "Domains" 
   - Add `rvk.alignedapp.com`

2. **DNS Configuration**:
   - Add a CNAME record pointing `rvk.alignedapp.com` to `cname.vercel-dns.com`
   - Or use Vercel's nameservers for the entire domain

3. **SSL Certificate**:
   - Vercel automatically provisions SSL certificates
   - HTTPS will be available within minutes

## 🔧 Environment Variables

No environment variables are required for basic functionality. Optional:

```env
# Analytics (automatically detected on Vercel)
VERCEL_ANALYTICS_ID=your_analytics_id
```

## 📱 Image Replacement

Replace the placeholder images in `public/images/`:
- `hero-placeholder.jpg` - Professional headshot or hero image
- `turning-point-placeholder.jpg` - Workplace or professional scene
- `personal-placeholder.jpg` - Personal or Aligned app related image

Recommended dimensions: 800x600px (4:3 aspect ratio)

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- High contrast colors (WCAG AA compliant)
- Responsive text scaling
- Alt text for all images

## 📊 Performance Optimization

- Next.js App Router for optimal performance
- Image optimization with next/image
- Font optimization with next/font
- Vercel Analytics for monitoring
- Responsive images with proper sizing

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: The dev server will automatically use the next available port
2. **Font loading**: Fonts are loaded via Google Fonts CDN and should work automatically
3. **Images not loading**: Ensure placeholder images are in `public/images/`

### Support

For technical issues:
- Check the Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs
- shadcn/ui documentation: https://ui.shadcn.com

## 📄 License

© 2025 Rosa Van Kuyk. All rights reserved.

---

Built with ❤️ using Next.js, Tailwind CSS, and Vercel.
