import Image from "next/image";

export function TurningPoint() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-brand-taupe/5" />
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-accent/15 to-transparent rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Content Section */}
          <div className="lg:col-span-7 space-y-12 animate-fade-in-up">
            {/* Headline */}
            <div className="space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight">
                <span className="heading">The turning point</span>
                <br />
                <span className="gradient-text">in Career</span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-accent to-brand-cta rounded-full" />
            </div>
            
            {/* Story Content */}
            <div className="space-y-8 font-body text-lg body">
              <p>
                When I first joined AFCA, my world was recruitment. It's what I knew, and what I was good at. What I didn't know was how much I'd come to love the role I'm in now leading projects in ATS implementation, strategy and employer brand.
              </p>
              
              <p>
                It was a stretch at the start. I had to let go of being the "expert" in the room and start again in spaces I'd never worked in before. What made the difference was AFCA's culture and my leader who backed me to take the leap.
              </p>
              
              <p>
                That shift from <span className="accent">transactional to transformational recruitment</span> changed everything. Candidate NPS lifted from 82 to 93. Cost-to-hire reduced by 45%. Glassdoor climbed from 3.0 to 4.4. Most importantly, we reshaped how people talked about us as an employer.
              </p>
              
              <p>
                Fast forward to today: I've had the privilege of shaping initiatives like the AFCA-nites advocacy program, improving our reputation site ratings, and leading award submissions that showcase our team's impact. Each project has grown me in ways I never expected, reinforcing that <span className="accent">recruitment isn't just about filling roles, it's about building trust, culture, and lasting reputation</span>.
              </p>
            </div>
            
            {/* Key Insight Callout */}
            <div className="bg-gradient-to-r from-accent/10 to-brand-taupe/10 rounded-3xl p-8 glass-effect border border-accent/20">
              <div className="flex items-start gap-4">
                <div className="text-brand-charcoal">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading text-lg heading mb-2">
                    The Key Insight
                  </h4>
                  <p className="muted">
                    "Every candidate interaction is a brand moment. Transform the experience, and you transform the perception."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:col-span-5 relative animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-accent/25 to-brand-taupe/25 rounded-2xl blur-xl animate-float" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-brand-taupe/15 to-accent/15 rounded-full blur-2xl" style={{animationDelay: '1s'}} />
              
              {/* Main image container */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden premium-shadow-lg group">
                <Image
                  src="/images/turning-point-placeholder.jpg"
                  alt="Professional workspace representing transformation and growth"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                
                {/* Overlay gradients */}
                <div className="absolute inset-0 bg-brand-beige-accent/15 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 via-transparent to-transparent" />
                
              </div>
              
              {/* Quote callout */}
              <div className="absolute -right-4 top-1/4 glass-effect rounded-2xl p-4 max-w-48 animate-float" style={{animationDelay: '2s'}}>
                <div className="text-xs muted">
                  "From transactional to transformational thinking"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}