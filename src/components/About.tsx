import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();

  return (
    <section className="pb-20 bg-background">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 animate-fade-in-up ${headerInView ? 'in-view' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What are we
          </h2>
        </div>
        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-h-max stagger-children ${contentInView ? 'in-view' : ''}`}
        >
          <div className="relative w-full animate-fade-in-left">
            <img
              src="/lovable-uploads/web3unilag_what_are_we.png"
              alt="Lagos Blockchain Community Members"
              className="w-full h-[80%] object-cover hover-lift"
            />
          </div>
          <div className="flex items-center h-max animate-fade-in-right">
            <div className="space-y-6 text-lg text-white leading-relaxed">
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