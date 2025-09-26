import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Blog = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation();

  const blogPosts = [
    {
      id: 1,
      title: "A Deep Dive Into The Octant Ecosystem",
      excerpt: "In a world increasingly driven by profit margins and shareholder interests, the idea of public goods often gets left behind. Public goods are those resources and services that benefit everyone, like open-source software, scientific research, climate, and environmental protection; the backbone of innovation and social progress. Yet, they suffer from a chronic problem: funding.",
      image: "/blog/Octant.webp",
      date: "October 2024",
      readTime: "8 min read",
      category: "Ecosystem",
      url: "https://web3unilag.substack.com/p/a-deep-dive-into-the-octant-ecosystem"
    },
    {
      id: 2,
      title: "W3U YARNS- April",
      excerpt: "First, let's pause and breathe — February, March, and April were a long, tough stretch with tests and exams consuming most of our attention. We know it's been intense: overnights, nerve-wracking exam halls, and (let's be honest) lots of prayer and coffee. ☕📖 Whether it was easy for you or survived by a thread, we're proud of you for making it through! 💪",
      image: "/blog/April yarns.webp",
      date: "April 2024",
      readTime: "5 min read",
      category: "Community",
      url: "https://web3unilag.substack.com/p/w3u-yarns-april"
    },
    {
      id: 3,
      title: "W3U Yarns - May",
      excerpt: "May flew by faster than airdrops during a bull run, and trust me—you're going to want to catch all the premium gist I've packed in this one. So, grab a chill drink, get comfy, and let's dive into everything that went down and what's coming next 👇",
      image: "/blog/May Yarns.webp",
      date: "May 2024",
      readTime: "6 min read",
      category: "Updates",
      url: "https://web3unilag.substack.com/p/w3u-yarns-may"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Ecosystem': return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'Community': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'Updates': return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      default: return 'bg-primary/20 text-primary border-primary/40';
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-8 sm:mb-12 animate-fade-in-up ${headerInView ? 'in-view' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Stay updated with the latest insights, community updates, and deep dives into the Web3 ecosystem 
            from the Web3 UNILAG community.
          </p>
        </div>

        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 stagger-children ${gridInView ? 'in-view' : ''}`}
        >
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group cursor-pointer h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(post.url, '_blank')}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        <div class="text-primary text-4xl font-bold">${post.title.charAt(0)}</div>
                      </div>
                    `;
                  }}
                />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border ${getCategoryColor(post.category)} backdrop-blur-sm`}>
                  {post.category}
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors duration-300 mb-4 flex-grow">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-white/90 font-medium text-sm group-hover:gap-3 transition-all duration-300 mt-auto">
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center animate-fade-in-up ${gridInView ? 'in-view' : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 max-w-2xl mx-auto relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Get the latest Web3 insights, community updates, and exclusive content delivered straight to your inbox.
              </p>
              
              <a
                href="https://web3unilag.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-xl font-medium hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Visit Our Blog
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
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
      `}</style>
    </section>
  );
};

export default Blog;
