import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-primary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold glow-text mb-2">Kapil Anandh P</h3>
            <p className="text-muted-foreground">AI/ML Engineer</p>
            <p className="text-sm text-muted-foreground mt-4">
              Languages: Tamil (Native) | English (Professional) | Hindi (Basics)
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <a 
                href="https://github.com/KapilAnandh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass-card hover:scale-110 transition-transform border-primary/30"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kapilanandh3611" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass-card hover:scale-110 transition-transform border-primary/30"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="mailto:kapilanandh2k@gmail.com"
                className="p-3 rounded-lg glass-card hover:scale-110 transition-transform border-primary/30"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="tel:+918825822505"
                className="p-3 rounded-lg glass-card hover:scale-110 transition-transform border-primary/30"
              >
                <Phone className="w-5 h-5 text-primary" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Kapil Anandh P. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20 text-center text-xs text-muted-foreground">
          <p>
            I hereby declare that the information provided above is true and correct to the best of my knowledge and belief.
          </p>
        </div>
      </div>
    </footer>
  );
};
