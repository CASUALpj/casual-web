import { Twitter } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://i.imgur.com/L73RkZr.png" 
            alt="CASUAL" 
            className="w-10 h-10 rounded-full"
          />
          <span className="font-display text-xl font-bold text-gradient-kraft">CASUAL</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            About
          </a>
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            Features
          </a>
          <a href="#vision" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            Vision
          </a>
        </nav>

        <a
          href="https://x.com/casualpj"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors duration-300"
        >
          <Twitter className="w-4 h-4" />
          <span className="hidden sm:inline">Follow</span>
        </a>
      </div>
    </header>
  );
};

export default Header;