import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const images = [
    "/lovable-uploads/award of prize.png",
    "/lovable-uploads/Abdullahi speaking to sec students.png",
    "/lovable-uploads/community members.png",
    "/lovable-uploads/panel session.png", // Placeholder
    "/lovable-uploads/group pics.png", // Placeholder
    "/lovable-uploads/Web3 for good.png", // Placeholder
  ];

  return (
    <section className="bg-black text-white py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Join the force that moves web 3
            </h2>
            <p className="text-white/70 mb-8">
              Built By Students, For the Future
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                Join Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Image Collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-4">
              <div className="aspect-[15/16] rounded-lg overflow-hidden">
                <img className="h-full w-full object-cover" src={images[0]} alt="Web3Unilag Event" />
              </div>
              <div className="aspect-[15/16] rounded-lg overflow-hidden">
                <img className="h-full w-full object-cover" src={images[1]} alt="Web3Unilag Event" />
              </div>
              <div className="aspect-[15/16] rounded-lg overflow-hidden">
                <img className="h-full w-full object-cover" src={images[2]} alt="Web3Unilag Event" />
              </div>
            </div>
            <div className="grid gap-4 mt-12">
              <div className="aspect-[15/16] rounded-lg overflow-hidden">
                <img className="h-full w-full object-cover" src={images[3]} alt="Web3Unilag Event" />
              </div>
              <div className="aspect-[15/16] rounded-lg overflow-hidden">
                <img className="h-full w-full object-cover" src={images[4]} alt="Web3Unilag Event" />
              </div>
              <div className="aspect-[15/16] rounded-lg overflow-hidden">
                <img className="h-full w-full object-cover" src={images[5]} alt="Web3Unilag Event" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
