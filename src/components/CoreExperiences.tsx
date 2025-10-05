import { Card } from "@/components/ui/card";
import { FileText, Award, GraduationCap } from "lucide-react";

const CoreExperiences = () => {
  const experiences = [
    {
      icon: FileText,
      title: "Plasma Domains",
      description: "Mint your on-chain identity",
      details: "Secure your unique Web3 identity with custom blockchain domains on the Plasma network. Your digital passport to the decentralized future.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Award,
      title: "SAFU Card",
      description: "Flex your stats and track achievements",
      details: "Your digital achievement card that showcases your Web3 journey. Track progress, display credentials, and unlock exclusive community perks.",
      gradient: "from-primary/15 to-primary/5"
    },
    {
      icon: GraduationCap,
      title: "InfoFi Courses",
      description: "Learn and earn with AI-powered lessons",
      details: "AI-curated educational content that adapts to your learning style. Complete courses, earn rewards, and level up your Web3 knowledge.",
      gradient: "from-primary/20 to-primary/5"
    }
  ];

  return (
    <section id="experiences" className="py-32 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-mesh opacity-50"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Core Experiences</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Your Gateway to <span className="gradient-text">Web3</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-700 overflow-hidden animate-scale-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${exp.gradient}"></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:glow-orange transition-all duration-500">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-primary/80 text-sm font-medium mb-4">{exp.description}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.details}</p>

                  {/* Animated border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreExperiences;
