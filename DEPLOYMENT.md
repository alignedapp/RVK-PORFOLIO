# Rosa Van Kuyk Portfolio - Deployment Guide

## Deploy to Vercel with Custom Domain

### Prerequisites
- Vercel account
- Domain ownership of alignedapp.com
- Git repository

### Deployment Steps

1. **Deploy to Vercel**
   ```bash
   npx vercel --prod
   ```

2. **Configure Custom Domain**
   - Go to Vercel Dashboard → Project → **Settings → Domains**
   - Add domain: `rvk.alignedapp.com`  
   - At DNS provider create CNAME record:
     ```
     Name: rvk
     Value: cname.vercel-dns.com
     Mode: DNS only (no proxy)
     ```
   - Verify and wait for SSL certificate provisioning

3. **Environment Setup**
   - No environment variables required for current build
   - Analytics included via @vercel/analytics

### Performance Optimizations
- ✅ Next.js Image optimization with priority loading
- ✅ Static site generation (fully pre-rendered)
- ✅ Tailwind CSS optimized and purged
- ✅ Web vitals tracking via @vercel/analytics
- ✅ SEO metadata optimized for search engines
- ✅ Video optimized with iOS compatibility (playsInline)
- ✅ Semantic typography utilities (no text-white on light sections)

### Quality Checks Completed
- ✅ Build: Clean pnpm build with no errors
- ✅ Video: 200 OK response, muted/looped/playsInline
- ✅ Code: No text-white on light sections, semantic utilities used
- ✅ Performance: 8.04kB route size, 124kB First Load JS
- ⏳ Lighthouse: Run after deployment (target: Performance ≥90, Accessibility ≥95)

### Domain Configuration
- Primary: `https://rvk.alignedapp.com`
- Region: Sydney (syd1) for Australian users
- SSL: Auto-provisioned by Vercel

### Build Statistics
- Route size: 8.04 kB
- First Load JS: 124 kB
- Total bundle: 126 kB
- Static generation: ✅ Fully pre-rendered

### Post-Deployment
1. Verify video loads: `/videos/welcome.mp4`
2. Test responsive design across devices
3. Validate accessibility (WCAG AA compliant)
4. Check page speed (should be 90+ on Lighthouse)