
export function PersonalNote() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 via-transparent to-brand-taupe/5" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-accent/15 to-transparent rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image Section - Left */}
          <div className="lg:col-span-5 relative animate-scale-in">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent/25 to-brand-taupe/25 rounded-2xl blur-xl animate-float" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-brand-taupe/15 to-accent/15 rounded-full blur-2xl" style={{animationDelay: '1s'}} />
              
              {/* Main image container */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden premium-shadow-lg group">
                <video
                  src="/videos/welcome.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
                
                {/* Overlay gradients and filters */}
                <div className="absolute inset-0 bg-brand-beige-accent/10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/10 via-transparent to-transparent" />
                
              </div>
              
              {/* Floating quote */}
              <div className="absolute -left-6 bottom-1/3 glass-effect rounded-2xl p-4 max-w-52 animate-float" style={{animationDelay: '2s'}}>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  "Working in harmony with our natural rhythms"
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section - Right */}
          <div className="lg:col-span-7 space-y-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {/* Headline */}
            <div className="space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight">
                <span className="gradient-text">A Personal</span>
                <br />
                <span className="heading">Note</span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-accent to-brand-taupe rounded-full" />
            </div>
            
            {/* Content */}
            <div className="space-y-8 font-body text-lg body">
              <p>
                Beyond metrics and case studies, I'm driven by a mission to <span className="accent">change how we work and live</span>. That mission also led me to create <em>Aligned App</em> - a wellness platform designed to help women connect with their natural rhythms of health and energy to optimise productivity and wellbeing.
              </p>
              
              <p>
                Aligned is built on my belief that <span className="accent">success in the corporate world doesn't have to come at the cost of wellbeing</span>. True progress comes when we balance performance with living in alignment with our higher selves. Workplaces that embrace this create environments where people thrive, contribute authentically, and sustain their energy.
              </p>
              
              <p>
                That same holistic view drives how I approach recruitment and employer brand. <span className="accent">Candidates aren't resources to be acquired, but people with unique needs, energy patterns, and contributions</span>. When we design processes with that in mind, we don't just improve experience—we build trust, culture, and reputation that lasts.
              </p>
            </div>
            
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-accent/10 to-brand-taupe/10 rounded-3xl p-8 glass-effect border border-accent/20">
              <div className="flex items-start gap-4">
                <div className="text-brand-charcoal">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-heading text-lg heading mb-3">
                    Aligned Wellness App
                  </h4>
                  <p className="muted mb-4">
                    Connecting women with their natural rhythms for optimal productivity and wellbeing.
                  </p>
                  <a 
                    href="https://alignedapp.com.au" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-brand-charcoal font-medium hover:underline transition-all duration-300"
                  >
                    <span>Visit alignedapp.com.au</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}