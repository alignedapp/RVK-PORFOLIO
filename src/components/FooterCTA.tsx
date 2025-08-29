import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FooterCTA() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-charcoal to-brand-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-charcoal/90 via-transparent to-brand-charcoal/80" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{background: 'rgba(163, 142, 124, 0.15)'}} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl" style={{background: 'rgba(139, 111, 90, 0.2)'}} />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10 py-20 md:py-28">
        {/* Main CTA Section */}
        <div className="text-center space-y-12 animate-fade-in-up">
          
          {/* Headline */}
          <div className="space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="gradient-text">Aligned Work.</span>
              <br />
              <span className="gradient-text">Aligned Life.</span>
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-brand-beige-accent to-brand-cta rounded-full mx-auto" />
            
            <p className="font-body text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
              <span className="text-brand-cta">Beyond metrics and case studies, I'm driven by a mission to </span>
              <span className="text-brand-beige-accent font-semibold">change how we work and live</span>
              <span className="text-brand-cta">. Creating workplaces where people thrive, contribute authentically, and sustain their energy.</span>
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="h-14 px-8 font-body text-lg rounded-2xl cta-button text-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 premium-shadow border-0"
            >
              <Link 
                href="https://www.linkedin.com/in/rosavankuyk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="h-14 px-8 font-body text-lg rounded-2xl bg-white/70 border-white/40 text-brand-charcoal hover:bg-white transition-all duration-300"
            >
              <Link href="mailto:rosavankuyk@gmail.com">
                Email Rosa
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
            <div className="flex items-center gap-3 text-brand-cta">
              <div className="w-2 h-2 bg-brand-beige-accent rounded-full animate-pulse" />
              <span className="text-sm">Melbourne, Australia</span>
            </div>
            <div className="flex items-center gap-3 text-brand-cta">
              <div className="w-2 h-2 bg-brand-cta rounded-full animate-pulse" />
              <span className="text-sm">Open to opportunities</span>
            </div>
          </div>
        </div>
        
        
        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/10 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="text-brand-cta font-heading font-semibold text-xl heading">Rosa Van Kuyk</div>
              <div className="hidden md:block w-1 h-1 bg-brand-cta/30 rounded-full" />
              <div className="text-brand-cta text-sm">Recruitment & Employer Brand Leader</div>
            </div>
            
            <div className="flex items-center gap-6 text-brand-cta text-sm">
              <span>© 2025 Rosa Van Kuyk · Recruitment & Employer Brand</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}