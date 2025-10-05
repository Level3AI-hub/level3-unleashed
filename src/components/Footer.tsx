import { Github, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 py-16 px-4 overflow-hidden">
      {/* Glowing top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-4 tracking-tight">
              <span className="gradient-text">Level 3 Labs</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-sm">
              AI-powered, multi-chain experiences for learning, earning, and building in Web3
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 bg-secondary/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 border border-border hover:border-primary" aria-label="Discord">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-secondary/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 border border-border hover:border-primary" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-secondary/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 border border-border hover:border-primary" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>About</a></li>
              <li><a href="#experiences" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Experiences</a></li>
              <li><a href="#roadmap" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Roadmap</a></li>
              <li><a href="#join" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Join Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-primary">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Docs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Deck</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground/60">© 2025 Level 3 Labs — Built with Belief</p>
          <p className="text-xs text-muted-foreground/60">Multi-chain • BNB Chain • Plasma • Solana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
