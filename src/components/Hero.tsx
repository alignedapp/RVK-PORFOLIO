import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-accent/15 to-brand-accent/20" />
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl animate-float" style={{background: 'rgba(163, 142, 124, 0.2)'}} />
      <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full blur-3xl" style={{background: 'rgba(139, 111, 90, 0.15)', animationDelay: '2s'}} />
      
      {/* Ensure text contrast on beige background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 to-white/30" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>

            <div className="mb-4">
              <h1 className="heading text-2xl md:text-3xl font-bold mb-2">Rosa Van Kuyk</h1>
              <p className="muted text-lg md:text-xl">Recruitment & Employer Brand Leader</p>
            </div>

            <h2 className="heading text-4xl font-extrabold tracking-tight md:text-6xl">
              Transforming
              <br className="hidden md:block" />
              <span className="gradient-text">Candidate Journeys</span>
              <br />
              & <span className="gradient-text">Employer Brands</span>
            </h2>

            <p className="body mt-4 max-w-2xl text-base md:text-lg">
              Transforming candidate journeys and building employer brands that{" "}
              <span className="accent">change how people see workplaces</span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="https://www.linkedin.com/in/rosavankuyk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full ring-1 ring-black/10 bg-white/70 px-5 py-3 text-sm font-semibold body hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
              >
                Connect on LinkedIn
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link
                href="mailto:rosavankuyk@gmail.com"
                className="inline-flex items-center rounded-full ring-1 ring-black/10 bg-white/70 px-5 py-3 text-sm font-semibold body hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
              >
                Email Rosa
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>

            {/* Location / availability row */}
            <div className="mt-6 flex flex-wrap gap-x-6 muted text-sm">
              <span className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
                Melbourne, Australia
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-brand-btn rounded-full animate-pulse" />
                Open to opportunities
              </span>
            </div>

            {/* Stats Preview */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { value: "93", label: "Candidate NPS", suffix: "" },
                { value: "45", label: "Cost Reduction", suffix: "%" },
                { value: "4.4", label: "Glassdoor Rating", suffix: "★" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-heading gradient-text font-bold">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs muted font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="lg:order-last">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/hero-placeholder.png"
                    alt="Rosa Van Kuyk - Recruitment & Employer Brand Leader"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Subtle warm overlay for brand consistency */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/10 via-transparent to-transparent"></div>
                </div>
              </div>
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl animate-float" style={{background: 'rgba(163, 142, 124, 0.3)', animationDelay: '1s'}} />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-3xl animate-float" style={{background: 'rgba(139, 111, 90, 0.25)', animationDelay: '3s'}} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}