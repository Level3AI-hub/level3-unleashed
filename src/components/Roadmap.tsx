import { CheckCircle2, Circle } from "lucide-react";

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "completed",
      items: [
        "Launch on Plasma Network",
        "Plasma Domains release",
        "Community building",
        "Initial partnerships"
      ]
    },
    {
      phase: "Phase 2",
      title: "Expansion",
      status: "in-progress",
      items: [
        "BNB Chain integration",
        "SAFU Card launch",
        "Enhanced learning platform",
        "Reward mechanisms"
      ]
    },
    {
      phase: "Phase 3",
      title: "Innovation",
      status: "upcoming",
      items: [
        "Solana ecosystem entry",
        "Cross-chain bridges",
        "Advanced educational modules",
        "DeFi integrations"
      ]
    },
    {
      phase: "Phase 4",
      title: "Scale",
      status: "upcoming",
      items: [
        "Global expansion",
        "Enterprise solutions",
        "DAO governance",
        "Ecosystem grants"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Roadmap</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building the future of Web3 education, one milestone at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, index) => (
            <div 
              key={index} 
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`
                p-6 rounded-lg border transition-all duration-300 h-full
                ${item.status === 'completed' ? 'bg-primary/10 border-primary' : 
                  item.status === 'in-progress' ? 'bg-card border-primary/50' : 
                  'bg-card border-border'}
                hover:border-primary card-shadow
              `}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-primary">{item.phase}</span>
                  {item.status === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  ) : item.status === 'in-progress' ? (
                    <Circle className="w-5 h-5 text-primary animate-glow-pulse" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                
                <ul className="space-y-2">
                  {item.items.map((task, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground">
                      <div className={`
                        w-1.5 h-1.5 rounded-full mr-2 mt-1.5 flex-shrink-0
                        ${item.status === 'completed' ? 'bg-primary' : 'bg-muted'}
                      `}></div>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
