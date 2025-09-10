import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student, UNILAG",
      message: "The blockchain bootcamp completely transformed my understanding of Web3. Now I'm building my own DeFi application and feel confident about my career in blockchain development.",
      rating: 5
    },
    {
      name: "Michael Adebayo",
      role: "Software Developer",
      message: "Lagos Blockchain Movement provided me with the community and resources I needed to transition into Web3. The mentorship and networking opportunities are invaluable.",
      rating: 5
    },
    {
      name: "Grace Okafor",
      role: "Blockchain Entrepreneur",
      message: "Through this community, I launched my blockchain startup and secured my first round of funding. The support system here is incredible and truly game-changing.",
      rating: 5
    },
    {
      name: "Grace Okafor",
      role: "Blockchain Entrepreneur",
      message: "Through this community, I launched my blockchain startup and secured my first round of funding. The support system here is incredible and truly game-changing.",
      rating: 5
    },
    {
      name: "Grace Okafor",
      role: "Blockchain Entrepreneur",
      message: "Through this community, I launched my blockchain startup and secured my first round of funding. The support system here is incredible and truly game-changing.",
      rating: 5
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What our Community have to say
          </h2>
          <p className="text-md text-muted-foreground max-w-3xl mx-auto">
            Hear from our community members about their transformative experiences
            and career growth in the blockchain industry.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                  <div className="p-8 bg-primary rounded-2xl text-white hover:shadow-xl transition-all duration-300 h-full">

                    <blockquote className="text-white/90 italic mb-6 leading-relaxed">
                      "{testimonial.message}"
                    </blockquote>

                    <div className="border-t border-white/10 pt-4">
                      <h4 className="font-bold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-white/80 font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-primary/80 hover:bg-primary text-white rounded-full p-2 z-10 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-primary/80 hover:bg-primary text-white rounded-full p-2 z-10 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === selectedIndex ? 'bg-primary w-8' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;