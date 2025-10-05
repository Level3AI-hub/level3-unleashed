const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Level 3 Labs</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Building the Future of Web3 Education
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Level 3 Labs is pioneering innovative multi-chain experiences that revolutionize 
              how people learn and earn in the Web3 ecosystem. We're creating seamless 
              interactions across Plasma, BNB Chain, and Solana.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to make blockchain technology accessible, educational, and 
              rewarding for everyone. Through cutting-edge tools and platforms, we're 
              empowering the next generation of Web3 enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border card-shadow hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">3</div>
              <div className="text-sm text-muted-foreground">Blockchains</div>
              <div className="text-xs text-muted-foreground mt-1">Multi-chain ecosystem</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border card-shadow hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Possibilities</div>
              <div className="text-xs text-muted-foreground mt-1">Limitless innovation</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border card-shadow hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Community</div>
              <div className="text-xs text-muted-foreground mt-1">Driven development</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border card-shadow hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Active</div>
              <div className="text-xs text-muted-foreground mt-1">Always innovating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
