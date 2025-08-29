const caseStudies = [
  {
    title: "400% Social Engagement Increase",
    description: "AFCA-nites Advocacy Program: Built and launched an employee advocacy program that transformed internal culture and created authentic brand ambassadors.",
    impact: "93% employee participation",
    metric: "400%",
    metricLabel: "social engagement increase",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "#A38E7C", // beige-accent
    delay: "0s"
  },
  {
    title: "Glassdoor Rating Uplift (3.0 → 4.4)", 
    description: "Glassdoor Uplift Initiative: Addressed negative reviews and amplified authentic positive experiences through onboarding redesign and reputation management.",
    impact: "6-month transformation",
    metric: "3.0 → 4.4",
    metricLabel: "Glassdoor rating",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    color: "#8B6F5A", // cta-brown-beige
    delay: "0.2s"
  },
  {
    title: "45% Cost Reduction",
    description: "SmartRecruiters Platform Optimisation: Redesigned recruitment processes and technology stack to create seamless candidate experiences at every touchpoint.",
    impact: "Process transformation",
    metric: "45%",
    metricLabel: "cost reduction",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "#A38E7C", // beige-accent
    delay: "0.4s"
  }
];

export function CaseStudies() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/15 to-brand-taupe/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-brand-taupe/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-xl muted max-w-3xl mx-auto">
            Initiatives that delivered transformative results and lasting organisational impact
          </p>
        </div>
        
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in-up" 
              style={{animationDelay: study.delay}}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-3xl blur-2xl transition-all duration-700" style={{background: study.color}} />
              
              {/* Card */}
              <div className="relative glass-effect rounded-3xl p-8 h-full hover:scale-[1.02] transition-all duration-500 premium-shadow group">
                {/* Header */}
                <div className="mb-8">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="animate-float flex justify-center" style={{animationDelay: `${index * 0.5}s`, color: study.color}}>
                      {study.icon}
                    </div>
                    <div className="absolute inset-0 opacity-20 rounded-full blur-lg w-12 h-12" style={{background: study.color}} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-heading text-xl heading leading-tight mb-4">
                    {study.title}
                  </h3>
                  
                  {/* Divider */}
                  <div className="w-16 h-0.5 rounded-full opacity-60 mb-6" style={{background: study.color}} />
                </div>
                
                {/* Description */}
                <p className="font-body muted mb-8">
                  {study.description}
                </p>
                
                {/* Metrics */}
                <div className="mt-auto">
                  <div className="bg-gradient-to-r from-accent/20 to-transparent rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-heading heading">
                          {study.metric}
                        </div>
                        <div className="text-sm muted">
                          {study.metricLabel}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-medium uppercase tracking-wide" style={{color: study.color}}>
                          {study.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-3xl animate-shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
      </div>
    </section>
  );
}