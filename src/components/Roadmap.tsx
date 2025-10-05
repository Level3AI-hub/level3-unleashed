import { CheckCircle2, Circle, Rocket } from "lucide-react";

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "Q1 2025",
      title: "Token Launch",
      status: "in-progress",
      description: "Launch on Believe App with full trading support"
    },
    {
      phase: "Q2 2025",
      title: "Plasma Domains Mainnet",
      status: "upcoming",
      description: "Full mainnet deployment of on-chain identity system"
    },
    {
      phase: "Q3 2025",
      title: "AI Course Expansion",
      status: "upcoming",
      description: "50+ AI-powered courses across multiple blockchain topics"
    },
    {
      phase: "Q4 2025",
      title: "Referral Leaderboard",
      status: "upcoming",
      description: "Community rewards and competitive achievement tracking"
    }
  ];

  return (
    <section id="roadmap" className="py-32 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Roadmap & Vision</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            The Future of <span className="gradient-text">On-chain Learning</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Our journey to revolutionize Web3 education and earning
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative animate-fade-in ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`bg-card/50 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-500 hover:scale-105 ${
                  item.status === 'in-progress' 
                    ? 'border-primary card-shadow' 
                    : 'border-border hover:border-primary/50'
                } ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  
                  {/* Timeline Dot */}
                  <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary hidden md:block ${
                    index % 2 === 0 ? 'right-0 translate-x-1/2 mr-[calc(50%-1rem)]' : 'left-0 -translate-x-1/2 ml-[calc(50%-1rem)]'
                  } ${item.status === 'in-progress' ? 'animate-glow-pulse glow-orange' : ''}`}></div>

                  <div className="flex items-center gap-3 mb-4">
                    {item.status === 'in-progress' ? (
                      <Rocket className="w-6 h-6 text-primary" />
                    ) : item.status === 'completed' ? (
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    ) : (
                      <Circle className="w-6 h-6 text-muted-foreground" />
                    )}
                    <span className="text-sm font-semibold text-primary">{item.phase}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
