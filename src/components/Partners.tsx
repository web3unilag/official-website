import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";

const Partners = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Sample partner data - can be replaced with actual partner information
  const partners = [
    {
      id: 1,
      name: "Ethereum Foundation",
      logo: "/lovable-uploads/ethereum-logo.png",
      description: "Supporting blockchain education and development across the globe",
      website: "https://ethereum.org",
      category: "Blockchain Foundation",
      tier: "Platinum"
    },
    {
      id: 2,
      name: "Polygon",
      logo: "/lovable-uploads/polygon-logo.png", 
      description: "Scaling Ethereum for mass adoption with Layer 2 solutions",
      website: "https://polygon.technology",
      category: "Layer 2 Solution",
      tier: "Gold"  
    },
    {
      id: 3,
      name: "Chainlink",
      logo: "/lovable-uploads/chainlink-logo.png",
      description: "Decentralized oracle networks connecting smart contracts",
      website: "https://chain.link",
      category: "Oracle Network",
      tier: "Gold"
    },
    {
      id: 4,
      name: "Consensys",
      logo: "/lovable-uploads/consensys-logo.png",
      description: "Building the infrastructure and tools for Web3 ecosystem",
      website: "https://consensys.net",
      category: "Web3 Infrastructure",
      tier: "Platinum"
    },
    {
      id: 5,
      name: "Binance Academy",
      logo: "/lovable-uploads/binance-logo.png",
      description: "Leading blockchain education platform and exchange",
      website: "https://academy.binance.com",
      category: "Education",
      tier: "Gold"
        },
    {
      id: 6,
      name: "University of Lagos",
      logo: "/lovable-uploads/unilag-logo.png",
      description: "Our home institution supporting blockchain innovation",
      website: "https://unilag.edu.ng",
      category: "Academic Institution",
      tier: "Strategic"
    },
    {
      id: 7,
      name: "Solana Foundation",
      logo: "/lovable-uploads/solana-logo.png",
      description: "High-performance blockchain for decentralized applications",
      website: "https://solana.org",
      category: "Blockchain Platform",
      tier: "Gold"
    },
    {
      id: 8,
      name: "Avalanche",
      logo: "/lovable-uploads/avalanche-logo.png",
      description: "Fastest smart contracts platform in the blockchain industry",
      website: "https://avax.network",
      category: "Blockchain Platform",
      tier: "Silver"
    }
  ];

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
    <section className="py-20 bg-gradient-to-br from-background via-background/95 to-primary/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 animate-fade-in-up ${headerInView ? 'in-view' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Strategic Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We collaborate with industry-leading organizations to deliver exceptional Web3 education, 
            cutting-edge resources, and transformative opportunities to our community.
          </p>
        </div>

        {/* Infinite Scrolling Partners */}
        <div 
          ref={contentRef}
          className={`relative mb-16 animate-fade-in-up ${contentInView ? 'in-view' : ''}`}
        >
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll-infinite hover:pause-animation">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className={`flex-shrink-0 w-80 mx-4 bg-gradient-to-br ${getTierColor(partner.tier)} backdrop-blur-sm border rounded-3xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group cursor-pointer`}
                onMouseEnter={() => setHoveredCard(partner.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => window.open(partner.website, '_blank')}
              >
                <div className="relative h-full">
                  {/* Tier Badge */}
                  <div className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold border ${getTierBadgeColor(partner.tier)} backdrop-blur-sm`}>
                    {partner.tier}
                  </div>

                  {/* Partner Logo */}
                  <div className="flex justify-center mb-6">
                    <div className="relative w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-12 h-12 object-contain transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-12 h-12 bg-primary/30 rounded-xl flex items-center justify-center">
                              <span class="text-primary font-bold text-xl">${partner.name.charAt(0)}</span>
                            </div>
                          `;
                        }}
                      />
                      
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Partner Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {partner.name}
                    </h3>
                    
                    <div className="flex justify-center gap-2 flex-wrap">
                      <span className="inline-block px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full border border-white/20">
                        {partner.category}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors duration-300">
                      {partner.description}
                    </p>

                    {/* Hover overlay with additional info */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl flex items-end justify-center p-6 transition-opacity duration-300 ${hoveredCard === partner.id ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors">
                          Visit Website
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Tiers */}
        <div className={`mb-16 animate-fade-in-up ${contentInView ? 'in-view' : ''}`} style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Partnership Tiers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { tier: 'Platinum', count: partners.filter(p => p.tier === 'Platinum').length, icon: '💎' },
              { tier: 'Gold', count: partners.filter(p => p.tier === 'Gold').length, icon: '🥇' },
              { tier: 'Silver', count: partners.filter(p => p.tier === 'Silver').length, icon: '🥈' },
              { tier: 'Strategic', count: partners.filter(p => p.tier === 'Strategic').length, icon: '🤝' }
            ].map((tierInfo) => (
              <div key={tierInfo.tier} className={`text-center p-4 rounded-xl border ${getTierBadgeColor(tierInfo.tier)} backdrop-blur-sm`}>
                <div className="text-2xl mb-2">{tierInfo.icon}</div>
                <div className="font-bold text-lg">{tierInfo.count}</div>
                <div className="text-sm opacity-80">{tierInfo.tier}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div 
          className={`text-center animate-fade-in-up ${contentInView ? 'in-view' : ''}`}
          style={{ animationDelay: '0.6s' }}
        >
          <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 max-w-2xl mx-auto relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Become a Partner
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Join our ecosystem of innovators and help shape the future of Web3 education in Africa.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-xl font-medium hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Start Partnership
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 40s linear infinite;
        }
        
        .pause-animation:hover {
          animation-play-state: paused;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Partners;
