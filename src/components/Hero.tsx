import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Hero = () => {
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation();
  return (
    <div className="relative w-screen h-screen flex items-center justify-center text-white overflow-x-hidden overflow-y-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 w-screen h-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('/lovable-uploads/c28286ff-abdd-4961-b661-847b622fef07.png')`,
          backgroundAttachment: 'fixed',
          transform: 'translate3d(0, 0, 0)',
          willChange: 'auto'
        }}
      />
      {/* Blur Overlay */}
      <div className="absolute inset-0 w-screen h-screen backdrop-blur-sm" style={{ transform: 'translate3d(0, 0, 0)' }} />

      {/* Background Pattern */}
      <div className="absolute inset-0 w-screen h-screen opacity-30" style={{ transform: 'translate3d(0, 0, 0)' }}>
        <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px]"></div>
      </div>

      <div className="relative z-10 w-full text-center flex flex-col justify-between h-full py-20 px-4 sm:px-6 container mx-auto max-w-7xl">
        {/* Main Hero Content */}
        <div 
          ref={contentRef}
          className={`flex-1 flex flex-col justify-center items-center space-y-8 animate-fade-in-up ${contentInView ? 'in-view' : ''}`}
        >
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Lagos Leading Campus Blockchain<br /> Movement
            </h1>

            <p className="text-sm text-base text-white mx-auto leading-relaxed max-w-2xl">
              Empowering the next generation of Web3 innovators through<br /> education, connection, and opportunity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
            <Button
              size="lg"
              className="bg-white px-5 py-3 hover:bg-white/90 text-muted font-semibold shadow-lg hover:shadow-xl hover-lift transition-all duration-300"
            >
              EXPLORE OUR WORK <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Statistics Section */}
        <div 
          ref={statsRef}
          className="flex-shrink-0 mt-16 w-full max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 px-4">
            <div className="bg-white/70 w-full max-w-xs mx-auto text-muted backdrop-blur-sm rounded-2xl gap-y-4 flex flex-col items-center py-4 px-4 sm:px-8 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold">700+</div>
              <div className="text-muted/70 mt-0 text-sm sm:text-base text-center">Students Onboarded</div>
            </div>
            <div className="bg-white/70 w-full max-w-xs mx-auto text-muted backdrop-blur-sm rounded-2xl gap-y-4 flex flex-col items-center py-4 px-4 sm:px-8 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold">20+</div>
              <div className="text-muted/70 mt-0 text-sm sm:text-base text-center">Blockchain Partners</div>
            </div>
            <div className="bg-white/70 w-full max-w-xs mx-auto text-muted backdrop-blur-sm rounded-2xl gap-y-4 flex flex-col items-center py-4 px-4 sm:px-8 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold">50+</div>
              <div className="text-muted/70 mt-0 text-sm sm:text-base text-center">Events & Classes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;