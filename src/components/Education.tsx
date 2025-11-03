import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const education = [
  {
    degree: "M.Tech in Data Science",
    institution: "Kumaraguru College of Technology, Coimbatore",
    date: "Apr 2025",
    score: "CGPA: 8.60"
  },
  {
    degree: "B.E. in Mechanical Engineering",
    institution: "Kumaraguru College of Technology, Coimbatore",
    date: "May 2021",
    score: "CGPA: 7.91"
  },
  {
    degree: "Class 12 (Higher Secondary Education)",
    institution: "SRV Boys Hr. Sec. School, Rasipuram, Namakkal, Tamil Nadu",
    date: "Mar 2017",
    score: "Percentage: 76.6%"
  },
  {
    degree: "Class 10 (Secondary Education)",
    institution: "SRV Boys Hr. Sec. School, Rasipuram, Namakkal, Tamil Nadu",
    date: "Mar 2015",
    score: "Percentage: 90.5%"
  }
];

export const Education = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background/50 to-background" id="education">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glow-text">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 hover:scale-[1.01] transition-all group animate-fade-in-up border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 border border-secondary/30 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-secondary font-medium">{edu.date}</span>
                    <span className="text-primary font-semibold">{edu.score}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
