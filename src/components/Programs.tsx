import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useState } from "react";

const Programs = () => {
  const [showAll, setShowAll] = useState(false);
  const programs = [
    {
      image: "/lovable-uploads/e5eecc6c-849c-46d6-8b20-c73646e9a5c0.png",
      title: "Blockchain Fundamentals",
      description: "Learn the basics of blockchain technology, cryptocurrencies, and decentralized applications through our comprehensive beginner course.",
      duration: "4 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 1200,
      instructor: "Dr. Sarah Chen"
    },
    {
      image: "/lovable-uploads/a5fa2a11-b7c7-4dd3-9bbd-3618f915ab35.png",
      title: "Smart Contract Development",
      description: "Master Solidity programming and learn to build, test, and deploy smart contracts on Ethereum and other blockchain networks.",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.9,
      students: 850,
      instructor: "Prof. Michael Rodriguez"
    },
    {
      image: "/lovable-uploads/ca98be94-5a4a-45a1-a95c-d7936076f8eb.png",
      title: "DeFi Development",
      description: "Dive deep into Decentralized Finance protocols and learn to build the next generation of financial applications.",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.7,
      students: 420,
      instructor: "Alex Thompson"
    },
    {
      image: "/lovable-uploads/1fdc1b5e-1e82-499d-bac7-8c0b29940474.png",
      title: "Blockchain Entrepreneurship",
      description: "Learn how to build and scale blockchain startups, from ideation to funding and market deployment.",
      duration: "6 weeks",
      level: "All Levels",
      rating: 4.6,
      students: 680,
      instructor: "Emma Williams"
    }
  ];

  return (
    <section className="pb-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Programs and Projects
          </h2>
          <p className="text-md text-muted-foreground max-w-3xl mx-auto">
            Comprehensive learning paths designed to take you from blockchain basics 
            to building real-world decentralized applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(showAll ? programs : programs.slice(0, 3)).map((program, index) => (
            <Card key={index} className="overflow-hidden cursor-pointer bg-transparent group hover:shadow-2xl transition-all duration-500 border-0 ">
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
                  <Button 
                    className="group/btn relative w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Enroll Now
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
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {!showAll && programs.length > 3 && (
          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowAll(true)}
              variant="outline"
              className="bg-transparent border-2 border-primary text-white hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View More Courses
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Programs;