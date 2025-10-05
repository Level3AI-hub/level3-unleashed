import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <Roadmap />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
