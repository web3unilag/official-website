import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-8 sm:mb-12 animate-fade-in-up ${headerInView ? 'in-view' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What are we
          </h2>
        </div>
        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center stagger-children ${contentInView ? 'in-view' : ''}`}
        >
          <div className="relative w-full animate-fade-in-left order-2 lg:order-1">
            <img
              src="/lovable-uploads/web3unilag_what_are_we.png"
              alt="Lagos Blockchain Community Members"
              className="w-full h-auto object-cover hover-lift rounded-2xl"
            />
          </div>
          <div className="flex items-center animate-fade-in-right order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-white leading-relaxed">
              <p>
                <span className="font-bold text-primary">Web3unilag</span> is committed to empowering University of Lagos students through education, community, and innovation in the decentralized world. We cultivate a vibrant ecosystem of learners, visionaries, and builders, fostering hands-on exploration and contribution to Web3, blockchain, and cryptographic technologies; shaping the future from campus outward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;