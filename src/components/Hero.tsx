import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.7s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-slide-down">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Web3 Platform</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-fade-in tracking-tighter">
          Where Ideas Become
          <br />
          <span className="gradient-text text-shadow-glow">Ecosystems</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto animate-fade-in font-light" style={{ animationDelay: '0.2s' }}>
          AI-powered, multi-chain experiences for learning, earning, and building in Web3
        </p>
        
        <p className="text-base md:text-lg mb-12 text-muted-foreground/80 max-w-2xl mx-auto animate-fade-in font-light" style={{ animationDelay: '0.3s' }}>
          Built on BNB Chain, Plasma, and Solana
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button size="xl" className="group relative overflow-hidden">
            <span className="relative z-10">Explore Ecosystem</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
          </Button>
          <Button variant="outline" size="xl" className="group border-primary/30 hover:border-primary">
            Join the Community
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">3</div>
            <div className="text-sm text-muted-foreground">Blockchains</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">AI</div>
            <div className="text-sm text-muted-foreground">Powered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Possibilities</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
