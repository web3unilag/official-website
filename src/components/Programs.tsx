import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Programs = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation();
  const programs = [
    {
      image: "/programs/video_editing.jpg",
      title: "Video Editing Mastery",
      description: "Learn professional video editing techniques, from basic cuts to advanced effects. Master industry-standard software and create compelling visual content.",
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 245,
      instructor: "Web3 UNILAG Team",
      link: "https://drive.google.com/drive/folders/1xdxyjyPlxtcUFDt7HMcvDezlV2X092xb"
    },
    {
      image: "/programs/trading.jpg",
      title: "Trading Fundamentals",
      description: "Master the fundamentals of trading, technical analysis, risk management, and market psychology. Learn to make informed trading decisions.",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 189,
      instructor: "Web3 UNILAG Team",
      link: "https://drive.google.com/drive/u/0/folders/1RWpGGVSKVoYX1NXJDcvI9h1nevGYwYxG"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-8 sm:mb-12 animate-fade-in-up ${headerInView ? 'in-view' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Programs and Projects
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto px-4">
            Comprehensive learning paths designed to take you from blockchain basics 
            to building real-world decentralized applications.
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto stagger-children ${gridInView ? 'in-view' : ''}`}
        >
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden cursor-pointer bg-transparent group hover:shadow-2xl hover-lift transition-all duration-500 border-0 ">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                    {program.level}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(program.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-white text-sm font-medium">
                      {program.rating} ({program.students} students)
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-sm text-white/60 font-medium">
                    by {program.instructor} • {program.duration}
                  </p>
                </div>
                
                <p className="text-white/60 mb-8 leading-relaxed text-base">
                  {program.description}
                </p>
                
                <div className="flex items-center justify-center">
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button 
                      className="group/btn relative w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Access Resources
                        <svg 
                          className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out"></div>
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;