import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

const publications = [
  {
    title: "MR-Image Based Self-Supervised Learning for Knee Injury Classification",
    venue: "IEEE, 2025",
    description: "Developed a self-supervised deep learning model in PyTorch for MRI-based knee injury detection, achieving 92% validation accuracy. Published in IEEE under the same title."
  }
];

export const Publications = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background/50 to-background" id="publications">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glow-text">
          Publications
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-sm">
          Research contributions to the academic community
        </p>

        <div className="max-w-3xl mx-auto">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 hover:scale-[1.02] transition-all group animate-fade-in-up border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-secondary font-medium mb-3">
                    {pub.venue}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
