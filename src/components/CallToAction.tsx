import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Coins, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="join" className="py-32 px-4 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh opacity-60"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Join the Future of
            <br />
            <span className="gradient-text text-shadow-glow">On-chain Learning</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Be part of a community pushing the boundaries of Web3 education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Discord CTA */}
          <div className="group relative bg-card/50 backdrop-blur-sm p-10 rounded-3xl border border-border hover:border-primary transition-all duration-500 card-shadow hover:scale-105 animate-slide-up overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6 mx-auto group-hover:scale-110 group-hover:glow-orange transition-all duration-500">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Join Our Community</h3>
              <p className="text-muted-foreground mb-8 text-center leading-relaxed">
                Connect with fellow Web3 enthusiasts, get support, and stay updated with the latest developments
              </p>
              <Button className="w-full group/btn" size="lg">
                Join Discord
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Token CTA */}
          <div className="group relative bg-card/50 backdrop-blur-sm p-10 rounded-3xl border border-border hover:border-primary transition-all duration-500 card-shadow hover:scale-105 animate-slide-up overflow-hidden" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6 mx-auto group-hover:scale-110 group-hover:glow-orange transition-all duration-500">
                <Coins className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Get Access Token</h3>
              <p className="text-muted-foreground mb-8 text-center leading-relaxed">
                Acquire tokens on Believe App to access exclusive features and participate in the ecosystem
              </p>
              <Button variant="outline" className="w-full group/btn border-primary/30 hover:border-primary" size="lg">
                Get Token
                <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
              <p className="text-xs text-muted-foreground/60 text-center mt-6 leading-relaxed">
                *Token provides platform access and is not an investment guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
