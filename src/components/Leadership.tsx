import { Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const activities = [
  "Director of Club Service, Rotaract Club of KCT (2019–20)",
  "Editor, Pride Event – District Rotaract Conference (2019–20)",
  "Active member of NSS, RRC, VBC, Rotaract KCT (2018–20)",
  "Club Advisor for RaC, NSS, RRC, VBC Clubs (2020–21)",
  "Recognized by Coursera Campus for Outstanding Engagement (2024)",
  "Led PG Freshers as Brigade Leader, KCT (2024–25)"
];

export const Leadership = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/50" id="leadership">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glow-text">
          Leadership & Activities
        </h2>

        <Card className="glass-card p-8 rounded-2xl border-primary/20">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">Community Leadership</h3>
              <p className="text-muted-foreground">Driving positive impact through service and mentorship</p>
            </div>
          </div>

          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-all group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Award className="w-5 h-5 text-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-foreground group-hover:text-primary transition-colors">
                  {activity}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
