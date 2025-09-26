import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Testimonials = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: carouselRef, isInView: carouselInView } = useScrollAnimation();
  
  const testimonials = [
    {
      name: "YINUSA",
      role: "Top Creator, Aptos",
      message: "web3unilag onboarded me to web3 through DND - I'd never heard the term before! Over the past year, I've become a top contributor in the Aptos ecosystem, led media at BIU2024, and now serve as VP. Giving back to the community that gave me everything. GTA ~ Greater Things Ahead!",
      image: "/testimonial/Yinusa.jpg",
      rating: 5
    },
    {
      name: "GRAMPS",
      role: "Top Creator, Union",
      message: "web3unilag gave me more knowledge, helped me connect with web3 chads, and even stack some 3-figs as a newbie 😅. The community support has been incredible!",
      image: "/testimonial/Gramps.jpg",
      rating: 5
    },
    {
      name: "OLAYINKA",
      role: "Community Member",
      message: "web3unilag has been my gateway into blockchain and web3. Their lessons made complex topics simple and practical for me. The learning experience has been transformative.",
      image: "/testimonial/Olayinka.jpg",
      rating: 5
    },
    {
      name: "HERCULES",
      role: "Web3 Graphic Designer",
      message: "I was already in web3 before joining web3unilag, but the community has been amazing. It's kept me updated, connected me with real builders, and opened up solid opportunities. Right now, I'm building as a Web3 Graphic Designer, helping projects craft strong visuals and branding.",
      image: "/testimonial/Herecules.jpg",
      rating: 5
    },
    {
      name: "Triumphant",
      role: "Technical Writer, Movementlabs",
      message: "Web3Unilag has been a perfect bootstrap for my career in developer relations. Serving as technical lead has given me the opportunity to discuss, innovate and build. Grateful to be at the forefront of helping developers build on web3.",
      image: "/testimonial/Triumphant.jpg",
      rating: 5
    },
    {
      name: "MASTER ZEKS",
      role: "Top Creator, Camp Network",
      message: "web3unilag gave me a real community that motivated me to explore, dig deeper, show up and set financial goals I never thought I'd set. It changed how I view web3 from being a passive farmer to an active contributor.",
      image: "/testimonial/Master Zeks.jpg",
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
    <section className="py-12 sm:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-8 sm:mb-12 animate-fade-in-up ${headerInView ? 'in-view' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            What our Community have to say
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto px-4">
            Hear from our community members about their transformative experiences
            and career growth in the blockchain industry.
          </p>
        </div>

        <div 
          ref={carouselRef}
          className={`relative animate-scale-in ${carouselInView ? 'in-view' : ''}`}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                  <div className="p-8 bg-primary rounded-2xl text-white hover:shadow-xl hover-lift transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <blockquote className="text-white/90 italic mb-6 leading-relaxed flex-grow text-sm">
                      "{testimonial.message}"
                    </blockquote>

                    <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-white/80 font-medium">
                          {testimonial.role}
                        </p>
                      </div>
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