import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect } from "react";

const Partners = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Actual partner data with real logos from public/partners folder
  const partners = [
    {
      id: 1,
      name: "Noble",
      logo: "/partners/1_Logo_full_bright (use this).png",
      description: "Native asset issuance protocol enabling digital assets to thrive across the interchain ecosystem",
      website: "https://nobleassets.xyz",
      category: "Asset Issuance",
      tier: "Strategic",
      founded: "2022",
      focus: "Interchain Assets"
    },
    {
      id: 2,
      name: "Quai Network",
      logo: "/partners/Quai_White.png",
      description: "Scalable proof-of-work blockchain network with merged mining and infinite scalability",
      website: "https://qu.ai",
      category: "Layer 1 Blockchain",
      tier: "Strategic",
      founded: "2019",
      focus: "Scalable PoW"
    },
    {
      id: 3,
      name: "Akash Network",
      logo: "/partners/akash-white-t.png",
      description: "Decentralized cloud computing marketplace providing secure, censorship-resistant cloud infrastructure",
      website: "https://akash.network",
      category: "Cloud Computing",
      tier: "Strategic",
      founded: "2018",
      focus: "DeCloud"
    },
    {
      id: 4,
      name: "SingularityNET DAO",
      logo: "/partners/SNET Logo - Horizontal - Purple - 2021.jpg",
      description: "Decentralized AI marketplace enabling anyone to create, share, and monetize AI services",
      website: "https://singularitynet.io",
      category: "AI & Blockchain",
      tier: "Strategic",
      founded: "2017",
      focus: "Decentralized AI"
    },
    {
      id: 5,
      name: "HackQuest",
      logo: "/partners/hackquest.png",
      description: "Leading Web3 developer education platform with hands-on learning experiences",
      website: "https://hackquest.io",
      category: "Education",
      tier: "Strategic",
      founded: "2021",
      focus: "Developer Education"
    },
    {
      id: 6,
      name: "Octant",
      logo: "/partners/Group 31.png",
      description: "Funding platform for public goods using Ethereum staking rewards to support open source projects",
      website: "https://octant.app",
      category: "Public Goods",
      tier: "Strategic",
      founded: "2023",
      focus: "Public Goods Funding"
    }
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [partners.length]);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum': return 'from-purple-500/20 to-indigo-500/20 border-purple-500/30';
      case 'Gold': return 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30';
      case 'Silver': return 'from-gray-400/20 to-slate-500/20 border-gray-400/30';
      case 'Strategic': return 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30';
      default: return 'from-primary/20 to-primary/10 border-primary/30';
    }
  };

  const getTierBadgeColor = (tier: string) => {
    switch (tier) {
      case 'Platinum': return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'Gold': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40';
      case 'Silver': return 'bg-gray-400/20 text-gray-300 border-gray-400/40';
      case 'Strategic': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      default: return 'bg-primary/20 text-primary border-primary/40';
    }
  };

  // Duplicate partners array for infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          ref={headerRef}
          className={`text-center mb-8 sm:mb-12 animate-fade-in-up ${headerInView ? 'in-view' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Strategic Partners
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            We collaborate with industry-leading organizations to deliver exceptional Web3 education,
            cutting-edge resources, and transformative opportunities to our community.
          </p>
        </div>

        {/* Featured Partner Carousel */}
        <div
          ref={contentRef}
          className={`relative mb-16 animate-fade-in-up ${contentInView ? 'in-view' : ''}`}
        >
          <div className="relative bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>

            {/* Featured Partner Display */}
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-bold border ${getTierBadgeColor(partners[currentSlide].tier)} backdrop-blur-sm`}>
                    {partners[currentSlide].tier} Partner
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  {partners[currentSlide].name}
                </h3>

                <div className="flex gap-3 flex-wrap">
                  <span className="px-3 py-1 bg-primary/20 text-white/90 text-sm rounded-full border border-primary/30">
                    {partners[currentSlide].category}
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-white/90 text-sm rounded-full border border-white/20">
                    {partners[currentSlide].focus}
                  </span>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {partners[currentSlide].description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={partners[currentSlide].website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                  >
                    Visit Website
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % partners.length)}
                    className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                  >
                    Next Partner
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Partner Logo Display */}
              <div className="flex justify-center">
                <div className="relative w-64 h-64 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:rotate-1">
                  <img
                    src={partners[currentSlide].logo}
                    alt={`${partners[currentSlide].name} logo`}
                    className="max-w-48 max-h-48 object-contain transition-all duration-500 hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-32 h-32 bg-primary/30 rounded-2xl flex items-center justify-center">
                          <span class="text-primary font-bold text-4xl">${partners[currentSlide].name.charAt(0)}</span>
                        </div>
                      `;
                    }}
                  />

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'bg-primary scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 max-w-3xl mx-auto relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"></div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M16 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H8M16 4V2M16 4V6M8 4V2M8 4V6M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Become a Partner
              </h3>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Join our ecosystem of innovators and help shape the future of Web3 education in Africa.
                Together, we can build the next generation of blockchain leaders.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-xl font-medium"
                >
                  Start Partnership
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Enhanced hover effects */
        .hover-lift:hover {
          transform: translateY(-4px) scale(1.02);
        }
        
        /* Stagger animation for children */
        .stagger-children {
          opacity: 0;
          transform: translateY(20px);
          animation: stagger-fade-in 0.6s ease-out forwards;
        }
        
        @keyframes stagger-fade-in {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Pulse animation for interactive elements */
        @keyframes gentle-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .animate-gentle-pulse {
          animation: gentle-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners;
