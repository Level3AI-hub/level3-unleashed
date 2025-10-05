import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreExperiences from "@/components/CoreExperiences";
import Roadmap from "@/components/Roadmap";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <CoreExperiences />
      <Roadmap />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
