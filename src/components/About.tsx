import { Cpu, Globe, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered",
      description: "Intelligent learning paths and personalized education"
    },
    {
      icon: Globe,
      title: "Multi-Chain",
      description: "Seamless experiences across BNB, Plasma, and Solana"
    },
    {
      icon: Zap,
      title: "Instant Rewards",
      description: "Earn while you learn with real-time incentives"
    }
  ];

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">About Level 3 Labs</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Merging <span className="gradient-text">Education</span>, Earning,
            <br />and Blockchain
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Level 3 Labs pioneers the future of on-chain learning by merging AI-powered education 
            with multi-chain Web3 experiences. Our mission is to make blockchain accessible, 
            educational, and rewarding for everyone.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 card-shadow hover:card-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
