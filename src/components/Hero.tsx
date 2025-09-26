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

      <div className="relative z-10 w-full text-center flex flex-col justify-between h-full py-12 sm:py-16 px-4 sm:px-6 container mx-auto max-w-7xl">
        {/* Main Hero Content */}
        <div 
          ref={contentRef}
          className={`flex-1 flex flex-col justify-center items-center space-y-6 sm:space-y-8 animate-fade-in-up ${contentInView ? 'in-view' : ''}`}
        >
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2">
              Lagos Leading Campus Blockchain<br className="hidden sm:block" /> Movement
            </h1>

            <p className="text-sm sm:text-base text-white mx-auto leading-relaxed max-w-2xl px-4">
              Empowering the next generation of Web3 innovators through<br className="hidden sm:block" /> education, connection, and opportunity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-6 sm:mt-8 w-full max-w-md sm:max-w-none">
            <Button
              size="lg"
              className="bg-white px-6 py-3 hover:bg-white/90 text-muted font-semibold shadow-lg hover:shadow-xl hover-lift transition-all duration-300 w-full sm:w-auto"
            >
              EXPLORE OUR WORK <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Statistics Section */}
        <div 
          ref={statsRef}
          className="flex-shrink-0 mt-8 sm:mt-12 w-full max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 px-2 sm:px-4">
            <div className="bg-white/70 w-full max-w-xs mx-auto text-muted backdrop-blur-sm rounded-2xl gap-y-2 sm:gap-y-4 flex flex-col items-center py-3 sm:py-4 px-4 sm:px-6 border border-white/20">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">700+</div>
              <div className="text-muted/70 text-xs sm:text-sm lg:text-base text-center">Students Onboarded</div>
            </div>
            <div className="bg-white/70 w-full max-w-xs mx-auto text-muted backdrop-blur-sm rounded-2xl gap-y-2 sm:gap-y-4 flex flex-col items-center py-3 sm:py-4 px-4 sm:px-6 border border-white/20">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">20+</div>
              <div className="text-muted/70 text-xs sm:text-sm lg:text-base text-center">Blockchain Partners</div>
            </div>
            <div className="bg-white/70 w-full max-w-xs mx-auto text-muted backdrop-blur-sm rounded-2xl gap-y-2 sm:gap-y-4 flex flex-col items-center py-3 sm:py-4 px-4 sm:px-6 border border-white/20">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">50+</div>
              <div className="text-muted/70 text-xs sm:text-sm lg:text-base text-center">Events & Classes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;