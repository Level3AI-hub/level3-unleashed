import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import plasmaIcon from "@/assets/plasma-icon.png";
import safuIcon from "@/assets/safu-icon.png";

const Features = () => {
  const features = [
    {
      title: "Plasma Domains",
      description: "Secure your Web3 identity with custom blockchain domains on the Plasma network",
      icon: plasmaIcon,
      benefits: [
        "Unique digital identity",
        "Cross-chain compatibility",
        "NFT-based ownership",
        "Seamless integration"
      ]
    },
    {
      title: "SAFU Card",
      description: "Your secure access card to the Level 3 Labs ecosystem and exclusive benefits",
      icon: safuIcon,
      benefits: [
        "Exclusive access rights",
        "Verified membership",
        "Community privileges",
        "Rewards and airdrops"
      ]
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Features</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful tools and utilities that make Level 3 Labs unique
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary transition-all duration-300 card-shadow group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="w-20 h-20 mb-4 rounded-lg bg-primary/10 p-4 group-hover:scale-110 transition-transform duration-300">
                  <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
