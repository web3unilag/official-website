import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/c28286ff-abdd-4961-b661-847b622fef07.png')`
        }}
      />
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px]"></div>
      </div>

      <div className="relative z-10 text-center flex flex-col justify-between h-screen py-20 px-6">
        {/* Main Hero Content */}
        <div className="flex-1 flex flex-col justify-center items-center space-y-8">
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
              className="bg-white px-5 py-3 hover:bg-white/90 text-muted font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              EXPLORE OUR WORK <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex-shrink-0 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 w-max mx-auto text-muted backdrop-blur-sm rounded-2xl gap-y-4 flex flex-col items-center py-4 px-8 border border-white/20">
              <div className="text-4xl md:text-4xl font-bold">700+</div>
              <div className="text-muted/70 mt-0 text-base">Students Onboarded</div>
            </div>
            <div className="bg-white/70 w-max mx-auto text-muted backdrop-blur-sm rounded-2xl gap-y-4 flex flex-col items-center py-4 px-8 border border-white/20">
              <div className="text-4xl md:text-4xl font-bold">20+</div>
              <div className="text-muted/70 mt-0 text-base">Blockchain Partners</div>
            </div>
            <div className="bg-white/70 w-max mx-auto text-muted backdrop-blur-sm rounded-2xl gap-y-4 flex flex-col items-center py-4 px-8 border border-white/20">
              <div className="text-4xl md:text-4xl font-bold">50+</div>
              <div className="text-muted/70 mt-0 text-base">Events & Classes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;