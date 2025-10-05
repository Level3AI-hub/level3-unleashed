import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Coins } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="cta" className="py-24 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="gradient-text">Revolution</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Discord CTA */}
          <div className="bg-card p-8 rounded-lg border border-border card-shadow hover:border-primary transition-all duration-300 animate-fade-in">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Join Our Community</h3>
            <p className="text-muted-foreground mb-6 text-center">
              Connect with fellow Web3 enthusiasts, get support, and stay updated with the latest developments
            </p>
            <Button variant="hero" className="w-full" size="lg">
              Join Discord
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Token CTA */}
          <div className="bg-card p-8 rounded-lg border border-border card-shadow hover:border-primary transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
              <Coins className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Get Access Token</h3>
            <p className="text-muted-foreground mb-6 text-center">
              Acquire tokens on Believe App to access exclusive features and participate in the ecosystem
            </p>
            <Button variant="outline" className="w-full" size="lg">
              Get Token
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              *Token provides platform access and is not an investment guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
