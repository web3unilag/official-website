import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Programs from "@/components/Programs";
import Blog from "@/components/Blog";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/finalCTA";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <Mission />
      <div id="about">
        <About />
      </div>
      <Partners />
      <div id="programs">
        <Programs />
      </div>
      <Blog />
      <div id="events">
        <Events />
      </div>
      <div id="team">
        <Team />
      </div>
      <Testimonials />
      <div id="contact">
        <Contact />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
