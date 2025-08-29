const stats = [
  {
    number: "82 → 93",
    label: "Candidate NPS",
    description: "Outstanding candidate experience improvement.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: "#A38E7C"  // Beige accent
  },
  {
    number: "45%",
    label: "Reduction in Cost-to-Hire", 
    description: "Efficiency and ROI delivered within three months.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    color: "#8B6F5A"  // CTA brown-beige
  },
  {
    number: "$184K",
    label: "Saved",
    description: "Value creation beyond the employer brand budget.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    color: "#A38E7C"  // Beige accent
  },
  {
    number: "4.4★",
    label: "Glassdoor Rating",
    description: "Reputation uplift from 3.0 to 4.4.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    color: "#8B6F5A"  // CTA brown-beige
  }
];

export function Stats() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/10" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{background: 'rgba(233, 214, 209, 0.2)'}} />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Measurable</span>{" "}
            <span className="heading">Results</span>
          </h2>
          <p className="text-xl muted max-w-3xl mx-auto">
            Data-driven improvements that transformed candidate experience and organisational reputation
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in-up" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500" style={{background: stat.color}} />
              
              {/* Card */}
              <div className="relative glass-effect rounded-3xl p-8 text-center space-y-6 hover:scale-[1.02] transition-all duration-500 premium-shadow">
                {/* Icon */}
                <div className="relative">
                  <div className="mb-4 animate-float flex justify-center" style={{animationDelay: `${index * 0.5}s`, color: stat.color}}>
                    {stat.icon}
                  </div>
                  <div className="absolute inset-0 opacity-20 rounded-full blur-lg" style={{background: stat.color}} />
                </div>
                
                {/* Number */}
                <div className="space-y-2">
                  <div className="font-heading text-3xl md:text-4xl lg:text-5xl heading" style={{color: stat.color}}>
                    {stat.number}
                  </div>
                  <div className="font-heading text-lg heading">
                    {stat.label}
                  </div>
                </div>
                
                {/* Divider */}
                <div className="w-12 h-0.5 rounded-full mx-auto opacity-60" style={{background: stat.color}} />
                
                {/* Description */}
                <p className="font-body text-sm muted">
                  {stat.description}
                </p>
                
                {/* Shimmer Effect on Hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Delivered within 6 months</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm">Sustainable impact</span>
          </div>
        </div>
      </div>
    </section>
  );
}